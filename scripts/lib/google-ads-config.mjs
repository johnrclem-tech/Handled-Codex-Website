import { readFile } from "node:fs/promises"
import path from "node:path"

function mustEnv(name, allowEmpty = false) {
  const value = process.env[name]
  if (value === undefined || (!allowEmpty && value.trim().length === 0)) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value.trim()
}

function assertCustomerId(value, fieldName) {
  const normalized = value.replace(/-/g, "")
  if (!/^\d{10}$/.test(normalized)) {
    throw new Error(`${fieldName} must be a 10-digit Google Ads customer ID (with or without dashes)`)
  }
  return normalized
}

export async function loadGoogleAdsConfig() {
  const customerId = assertCustomerId(mustEnv("GOOGLE_ADS_CUSTOMER_ID"), "GOOGLE_ADS_CUSTOMER_ID")
  const loginCustomerIdRaw = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.trim() ?? ""
  const loginCustomerId = loginCustomerIdRaw
    ? assertCustomerId(loginCustomerIdRaw, "GOOGLE_ADS_LOGIN_CUSTOMER_ID")
    : null

  const targetingPath = process.env.GOOGLE_ADS_TARGETING_CONFIG_PATH?.trim()
    || "config/google-ads-targeting.json"

  const absoluteTargetingPath = path.join(process.cwd(), targetingPath)
  const targetingRaw = await readFile(absoluteTargetingPath, "utf8")
  const targetingConfig = JSON.parse(targetingRaw)

  if (!targetingConfig.defaultTargeting) {
    throw new Error("Targeting config must include defaultTargeting")
  }

  return {
    auth: {
      developerToken: mustEnv("GOOGLE_ADS_DEVELOPER_TOKEN"),
      clientId: mustEnv("GOOGLE_ADS_CLIENT_ID"),
      clientSecret: mustEnv("GOOGLE_ADS_CLIENT_SECRET"),
      refreshToken: mustEnv("GOOGLE_ADS_REFRESH_TOKEN"),
      customerId,
      loginCustomerId,
    },
    targeting: {
      apiVersion: targetingConfig.apiVersion || "v21",
      defaultTargeting: targetingConfig.defaultTargeting,
      campaigns: targetingConfig.campaigns || {},
      adGroups: targetingConfig.adGroups || {},
      limits: {
        topAdGroups: targetingConfig.limits?.topAdGroups ?? 12,
        maxKeywordsPerAdGroup: targetingConfig.limits?.maxKeywordsPerAdGroup ?? 250,
        maxIdeaResultsPerAdGroup: targetingConfig.limits?.maxIdeaResultsPerAdGroup ?? 300,
        cacheMaxAgeHours: targetingConfig.limits?.cacheMaxAgeHours ?? 24,
      },
      targetingConfigPath: targetingPath,
    },
  }
}

export function resolveAdGroupTargeting(targeting, campaignName, adGroupName) {
  return {
    ...targeting.defaultTargeting,
    ...(targeting.campaigns[campaignName] || {}),
    ...(targeting.adGroups[adGroupName] || {}),
  }
}
