# Google Ads Instructions

Status: Active
Owner: John
Last updated: 2026-04-30
Version: 2.5

## Inputs

### Summary

Use this instruction set to create or update Google Ads assets for Handled from keyword data. The goal is to produce high-quality Responsive Search Ad assets and extensions that are grounded in the selected ad group's actual eligible keyword corpus, ranked opportunity, and buyer intent.

This workflow is ad-only. It does not create SEO pages, landing pages, budgets, bids, campaign structures, or unattended Google Ads account changes.

Required context:

- Read `docs/instructions/handled-brand-and-icp.md` before drafting ad assets.

Assumptions and defaults:

- The latest uploaded keyword dataset is the source of truth until replaced.
- If an ad group exists in multiple campaigns, campaign selection is required first.
- If required phrasing exceeds limits, use the nearest compliant conversational variant and log it in `Change Notes`.
- If available keyword data is too thin, ask the user whether to continue with limited coverage or choose another ad group.
- If a user asks for live campaign changes, stop and ask for explicit confirmation because this workflow is asset-generation only.

### When To Use

Use this instruction set when the user asks to:

- Create Google Ads copy.
- Update an existing Google Ads RSA.
- Generate headlines, descriptions, sitelinks, callouts, or structured snippets.
- Analyze an ad group before creating ad assets.
- Use keyword CSV data to prioritize ad copy.

Do not use this instruction set when the user asks to:

- Build or edit website pages.
- Change Google Ads bids, budgets, campaign settings, or live account configuration.
- Create landing page copy unless the user explicitly asks for a separate landing page workflow.
- Generate generic ad copy without an ad group and keyword dataset.

### Data Sources

- Primary keyword source: latest keyword dataset available in the project, currently `src/content/keywords-clem.csv`.
- Internal analysis UI: `/internal/keyword-analysis`.
- Ranking metric: `Total Available Impressions = Impr. / Search impr. share`.
- If `Search impr. share` is `< 10%`, use `10%` as the deterministic denominator.
- If `Search impr. share` is missing or invalid, exclude that row from the ranked top-10 list and note it.

### Start Protocol

When asked to create or update an ad:

1. Ask for `Ad Group Name`.
2. Ask for `Campaign Name` only if that ad group exists in multiple campaigns.
3. If the ad group is not found in the dataset, stop and request corrected input.
4. Use only rows for the selected campaign and ad group.
5. Exclude all rows where `Search keyword status = Not eligible`.
6. Present the top 10 ranked eligible keywords and wait for user confirmation before drafting ad assets.

### Search Intent Brief

The first section of the output must be `## Search Intent Brief`.

Include:

- Ad group intent classification: location-led, service-led, industry-led, or mixed.
- Buyer posture: research, comparison, high-intent, switching provider, local warehouse need, or another clear posture.
- 3 to 5 copy requirements driven by the selected keyword set.
- Notes on any excluded or unusable keyword rows that materially affect coverage.

### Top 10 Keyword Confirmation

Before drafting ad assets, present the top 10 ranked eligible keywords with:

- Keyword.
- Actual impressions.
- Search impression share.
- Total available impressions.

Wait for user confirmation before continuing.

### Brand And Policy Safety

- Use `Handled` as the brand name.
- Do not use `Handled3PL`, `Handled.com`, or `Handled Inc.`.
- Never start a headline with standalone verb-like `Handled`.
- No duplicate first word across all 15 headlines.
- Prefer numerals such as `3PL` and `100%`.
- Avoid disapproval-prone superlatives or unverifiable claims.
- Do not imply Google, Shopify, Amazon, or another platform endorses Handled.
- Do not make live-account changes or imply campaign changes have been applied.

### Changelog

- 2026-04-30: Expanded description rules into four distinct slots for keyword integration, brand authority, pain relief, and direct CTA validation.
- 2026-04-30: Reorganized into sequential Inputs, Headlines, Descriptions, Sitelinks, Callouts, Structured Snippets, and Output sections. Moved examples into relevant sections and removed unused extension guidance.
- 2026-04-30: Added metadata, purpose, when-to-use guidance, data sources, expanded acceptance checklist, examples, assumptions, and changelog. Preserved the v2.3 RSA construction rules and upgraded document version to 2.4.

## Headlines

Create 15 headlines total. Each headline must be `<=30` characters.

Category 1: Keyword Matchers

- Create 6 headlines.
- Pin 3 to Position 1.
- Build these from the top-10 eligible keyword pool.
- Use only terms present in the selected ad group's keyword corpus.
- Transform keyword phrasing into natural, human-readable Title Case.
- Do not inject terms from other ad groups.
- If a top keyword creates duplication or awkward phrasing, skip to the next top-10 keyword and document the substitution in `Change Notes`.

Category 2: USP / Value Props

- Create 6 headlines.
- Pin 2 to Position 2.
- Always include one same-day shipping guarantee headline.
- Always include one 100% order accuracy guarantee headline.
- The other 4 headlines must be specific to the ad group intent.

Ad-group-specific USP guidance:

- Location-led groups: emphasize proximity, port access, regional transit speed, warehouse access, or local logistics fit.
- Service-led groups: emphasize automation depth, integration fit, SLA performance, kitting, returns, or multi-channel operations.
- Industry-led groups: address industry pain points such as apparel returns complexity, cosmetics temperature control, compliance, packaging needs, SKU complexity, or fragile handling.

Ad-group-term injection preference:

- Extract salient non-generic ad group terms such as `California`, `Los Angeles`, `Cosmetics`, or `Apparel`.
- Use those terms in USP headlines when natural.
- Keep phrasing conversational.
- Do not force insertion.
- Do not abbreviate injected terms.

Quality target:

- At least 4 of the 6 USP headlines should clearly reflect ad-group-specific intent signals.
- If that cannot be done naturally within character limits, use the best-fit compliant alternative and explain it in `Change Notes`.

Category 3: CTAs

- Create exactly 3 CTA headlines.
- Pin 2 to Position 3.
- CTA 1: Quote CTA, such as `Get A Custom Quote`.
- CTA 2:
  - If the ad group is location-led, use a warehouse-tour pattern such as `Tour Our [Ad Group Name] Warehouse Today`, or the nearest natural variant that fits `<=30` characters.
  - If the ad group is not location-led, use an expert CTA such as `Talk To A Fulfillment Expert`.
- CTA 3: Urgency CTA equivalent to `Start Shipping This Week`.

CTA constraints:

- Include ad group terms where natural.
- Use Title Case.
- Keep phrasing policy-safe.
- Keep every headline `<=30` characters.

Examples:

- Good keyword matcher headline: `Apparel Fulfillment`
- Good USP headline: `100% Order Accuracy`
- Good location CTA: `Tour Our LA Warehouse`
- Avoid generic cross-ad-group injection: `Best Shopify 3PL`
- Avoid awkward keyword stuffing: `Fulfillment Company Services`
- Avoid unsupported endorsement language: `Google Approved 3PL`

## Descriptions

Create 4 descriptions total. Each description must be `<=90` characters.

All descriptions must be complete, conversational sentences. They should sound like something a real person would say aloud, not scraped SEO copy or a keyword list.

Cross-cutting rules:

- Each description must start with a distinct first word.
- No two descriptions may say the same thing with different words.
- Every stat, guarantee, proof point, capability, or trust anchor must come from `docs/instructions/handled-brand-and-icp.md`.
- One description must contain the highest-impression keyword. Prefer Description 1 unless Description 2 is the more natural fit.
- Use `Handled` as the brand name, not `Handled3PL`, `Handled.com`, or `Handled Inc.`
- Do not begin a description with `Handled` immediately followed by a noun that could read as its verb object, such as orders, shipments, returns, packages, deliveries, or fulfillment.
- Prefer brand placements such as `California 3PL by Handled` or `Same-day shipping with 100% accuracy. By Handled.`
- When `Handled` must lead, follow it with a verb or category phrase that clearly disambiguates the brand, such as `Handled guarantees`, `Handled is`, or `Handled fulfills`.

Forbidden description patterns:

- Plus signs used to chain keywords.
- Slashes used to chain keywords.
- Em dashes used to chain keywords.
- Parenthetical keyword lists.
- Sentence fragments that only list services.
- Any output that reads as scraped SEO copy.
- Vague jargon such as `blind spots`, `synergies`, `alignment`, or `handoffs`.

### Description 1: Keyword-Integrated Intro

Pin: Position 1.

Purpose: maximize ad relevance and Quality Score.

Requirements:

- Contains the 2 longest exact-match keywords from the ad group, woven into one grammatically complete sentence.
- Uses a real subject, verb, and object.
- Makes the keywords load-bearing; removing them should break the meaning.
- Does not require a brand mention because this slot is for keyword relevance.
- Must be `<=90` characters.
- Cannot start with the same first word as Descriptions 2, 3, or 4.

Bad example:

`California Fulfillment Warehouse Companies + Fulfillment Center Los Angeles California.`

Good example:

`Compare California fulfillment warehouse companies serving Los Angeles brands and beyond.`

### Description 2: Brand Authority And ICP-Aligned Proof

Pin: Unpinned.

Purpose: build credibility with a real, verifiable Handled proof point.

Requirements:

- Mentions `Handled` by name using the brand placement rules above.
- Cites a real proof point from `docs/instructions/handled-brand-and-icp.md`.
- Includes a phrase-match keyword variant alongside the brand authority claim.
- Reads as a confident, factual statement, not a marketing slogan.
- Must be `<=90` characters.
- Cannot start with the same first word as Descriptions 1, 3, or 4.

Good example:

`Handled guarantees same-day shipping and 100% order accuracy across California.`

### Description 3: Pain Reliever

Pin: Unpinned.

Purpose: validate the searcher's immediate pain and why they are searching now.

Requirements:

- Names a concrete, specific pain the ad group's searcher is likely experiencing.
- Implies Handled solves the pain without needing to spell out every solution.
- Uses only approved pain points from the pain library below.
- Must be `<=90` characters.
- Cannot start with the same first word as Descriptions 1, 2, or 4.

Pain library:

| Ad Group Type | Approved Pain Points |
|---|---|
| Location | Delayed transit times, slow West Coast or East Coast reach, port congestion, distance from current 3PL |
| Service | Missed SLAs, slow shipping, no inventory visibility, brand experience failures, order accuracy issues |
| Industry | Apparel SKU sprawl, cosmetics lot tracking, fashion seasonal peaks, category-specific fulfillment complexity |
| Integration | Cart sync errors, manual order entry, broken tracking writeback, returns chaos |
| B2B / Retail | Chargebacks, EDI errors, retailer routing guide violations, capacity caps |

Bad example:

`Fix slow handoffs and blind spots with California visibility, routing, and SLA focus.`

Good example:

`Tired of missed cutoffs and stockouts? Get same-day shipping from a California 3PL.`

### Description 4: Direct CTA And Trust Anchor

Pin: Unpinned.

Purpose: convert intent into action with a low-friction ask paired with a risk-reducing trust signal.

Requirements:

- Leads with a command verb: `Get`, `Request`, `Talk to`, or `Tour`.
- Echoes the Category 3 CTA selected for the ad's headlines.
- Pairs the CTA with at least one trust anchor from `docs/instructions/handled-brand-and-icp.md`.
- Uses only real Handled commitments; never invent a trust anchor.
- Must be `<=90` characters.
- Cannot start with the same first word as Descriptions 1, 2, or 3.

Good example:

`Tour our California warehouse this week. No surprise fees. No minimums.`

Examples:

- Full Description 1 example: `Compare California fulfillment warehouse companies serving Los Angeles brands and beyond.`
- Full Description 2 example: `Handled guarantees same-day shipping and 100% order accuracy across California.`
- Full Description 3 example: `Tired of missed cutoffs and stockouts? Get same-day shipping from a California 3PL.`
- Full Description 4 example: `Tour our California warehouse this week. No surprise fees. No minimums.`

## Sitelinks

Create 4 sitelinks. Each sitelink must include two description lines.

- Sitelinks should reinforce the selected ad group's intent.
- Use clear destination-style labels, not vague teaser copy.
- Do not introduce unrelated services, industries, platforms, or locations.
- Keep each description line specific to the service, proof point, or next step.

Examples:

- Good sitelink: `Tour A Warehouse`
- Good description line: `See how Handled ships orders`
- Good description line: `Review locations and workflows`
- Avoid sitelink: `Learn More`

## Callouts

Create 6 callouts.

- Callouts should be short, scannable proof points.
- Prioritize guarantees, operational strengths, speed, accuracy, support, and fit for the selected ad group.
- Do not repeat the same phrase structure across all callouts.
- Do not use unsupported superlatives.

Examples:

- Good: `Same-Day Shipping`
- Good: `100% Order Accuracy`
- Good: `Bi-Coastal Warehouses`
- Avoid: `Best Fulfillment`

## Structured Snippets

Create 4 structured snippets using the `Services` header.

- Each snippet should name a service or capability directly relevant to the selected ad group.
- Do not use locations, claims, or generic benefits as structured snippet values.
- Keep values concise and parallel.

Examples:

- Good Services snippet: `Pick And Pack`
- Good Services snippet: `Kitting`
- Good Services snippet: `Returns`
- Good Services snippet: `B2B Fulfillment`
- Avoid Services snippet: `Fast Shipping`

## Output

### Format

Use this exact output order:

1. `## Search Intent Brief`
2. `## Top 10 Keyword Confirmation`
3. `## Responsive Search Ad`
4. `## Sitelinks`
5. `## Callouts`
6. `## Structured Snippets`
7. `## Keyword Coverage Map`
8. `## Description Validation Checklist`
9. `## Change Notes`

Responsive Search Ad description table format:

| # | Description | Char Count | Pin |
|---|---|---:|---|
| 1 | Description text | 0 | Position 1 |
| 2 | Description text | 0 | Unpinned |
| 3 | Description text | 0 | Unpinned |
| 4 | Description text | 0 | Unpinned |

Description Validation Checklist must confirm each description rule before final delivery. If any checklist item fails, regenerate the failing description before output.

### Acceptance Checklist

Before presenting final ad assets, verify:

- The selected ad group exists in the dataset.
- Campaign selection was requested if the ad group appears in multiple campaigns.
- Not eligible keywords were excluded.
- Top 10 keywords were ranked by total available impressions.
- The top-10 confirmation gate was shown before ad drafting.
- The user confirmed before ad assets were generated.
- 15 headlines were created.
- Every headline is `<=30` characters.
- 6 keyword matcher headlines use only the selected ad group's keyword corpus.
- 6 USP headlines include same-day shipping and 100% order accuracy.
- At least 4 USP headlines are ad-group-specific or the exception is explained.
- 3 CTA headlines follow the quote, conditional CTA, and urgency pattern.
- 4 descriptions were created.
- Every description is `<=90` characters.
- Description 1 contains the 2 longest exact-match keywords as load-bearing words.
- Description 1 reads as a real sentence, not a keyword stack.
- Description 1 contains no plus signs, slashes, em-dash keyword chains, or parenthetical keyword lists.
- Description 2 mentions `Handled` by name.
- Description 2 cites a proof point from `docs/instructions/handled-brand-and-icp.md`.
- Description 2 includes a phrase-match keyword variant.
- Description 3 names a concrete pain from the approved pain library.
- Description 3 contains none of the forbidden jargon.
- Description 4 leads with a command verb that echoes the ad's Category 3 CTA.
- Description 4 includes an approved trust anchor.
- All 4 descriptions start with distinct first words.
- No two descriptions say the same thing with different words.
- Brand placement rules are followed throughout all descriptions.
- One description contains the highest-impression keyword.
- All 4 descriptions pass the read-aloud sentence test.
- Pinning instructions are included.
- No duplicate first word appears across headlines.
- Brand and policy safety rules were checked.
- 4 sitelinks were created, each with two description lines.
- 6 callouts were created.
- 4 structured snippets were created using the `Services` header.
- Change Notes explain substitutions, exclusions, compromises, or assumptions.
