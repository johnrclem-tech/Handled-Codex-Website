function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getAccessToken(auth) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: auth.clientId,
      client_secret: auth.clientSecret,
      refresh_token: auth.refreshToken,
      grant_type: "refresh_token",
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Failed to obtain Google OAuth access token: ${response.status} ${text}`)
  }

  const body = await response.json()
  if (!body.access_token) {
    throw new Error("No access_token returned by OAuth endpoint")
  }
  return body.access_token
}

async function requestWithRetry(url, options, retries = 3) {
  let attempt = 0
  let lastError = null

  while (attempt <= retries) {
    const response = await fetch(url, options)
    if (response.ok) {
      return response
    }

    const text = await response.text()
    const retriable = response.status === 429 || response.status >= 500
    lastError = new Error(`Google Ads API request failed: ${response.status} ${text}`)

    if (!retriable || attempt === retries) {
      throw lastError
    }

    const backoffMs = 1000 * 2 ** attempt
    await sleep(backoffMs)
    attempt += 1
  }

  throw lastError
}

function buildHeaders(auth, accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "developer-token": auth.developerToken,
  }
  if (auth.loginCustomerId) {
    headers["login-customer-id"] = auth.loginCustomerId
  }
  return headers
}

function chunk(items, size) {
  const result = []
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size))
  }
  return result
}

export async function createGoogleAdsClient(config) {
  const accessToken = await getAccessToken(config.auth)
  const headers = buildHeaders(config.auth, accessToken)
  const baseUrl = `https://googleads.googleapis.com/${config.targeting.apiVersion}/customers/${config.auth.customerId}`

  async function post(path, body) {
    const response = await requestWithRetry(`${baseUrl}:${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
    return response.json()
  }

  async function generateKeywordHistoricalMetrics({
    keywords,
    geoTargetConstants,
    language,
    keywordPlanNetwork,
  }) {
    const batches = chunk(keywords, 800)
    const allResults = []

    for (const keywordBatch of batches) {
      const body = {
        keywords: keywordBatch,
        geoTargetConstants: geoTargetConstants || [],
        language,
        keywordPlanNetwork,
      }
      const response = await post("generateKeywordHistoricalMetrics", body)
      const results = response.results || []
      allResults.push(...results)
    }

    return allResults
  }

  async function generateKeywordIdeas({
    keywords,
    landingPageUrl,
    seedStrategy,
    geoTargetConstants,
    language,
    keywordPlanNetwork,
    pageSize,
  }) {
    const seedKeywords = keywords.slice(0, 20)
    const body = {
      geoTargetConstants: geoTargetConstants || [],
      language,
      keywordPlanNetwork,
      pageSize,
    }

    if (seedStrategy === "KEYWORD_AND_URL" && landingPageUrl) {
      body.keywordAndUrlSeed = { keywords: seedKeywords, url: landingPageUrl }
    } else {
      body.keywordSeed = { keywords: seedKeywords }
    }

    const response = await post("generateKeywordIdeas", body)
    return response.results || []
  }

  return {
    generateKeywordHistoricalMetrics,
    generateKeywordIdeas,
    apiVersion: config.targeting.apiVersion,
  }
}
