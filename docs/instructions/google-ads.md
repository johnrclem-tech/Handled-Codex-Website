# Google Ads Instructions

Status: Active
Owner: John
Last updated: 2026-04-30
Version: 2.4

## Purpose

Use this instruction set to create or update Google Ads assets for Handled from keyword data. The goal is to produce high-quality Responsive Search Ad assets and extensions that are grounded in the selected ad group's actual eligible keyword corpus, ranked opportunity, and buyer intent.

This workflow is ad-only. It does not create SEO pages, landing pages, budgets, bids, campaign structures, or unattended Google Ads account changes.

## When To Use

Use this instruction set when the user asks to:

- Create Google Ads copy.
- Update an existing Google Ads RSA.
- Generate headlines, descriptions, sitelinks, callouts, structured snippets, or promotion extensions.
- Analyze an ad group before creating ad assets.
- Use keyword CSV data to prioritize ad copy.

Do not use this instruction set when the user asks to:

- Build or edit website pages.
- Change Google Ads bids, budgets, campaign settings, or live account configuration.
- Create landing page copy unless the user explicitly asks for a separate landing page workflow.
- Generate generic ad copy without an ad group and keyword dataset.

## Data Sources

- Primary keyword source: latest keyword dataset available in the project, currently `src/content/keywords-clem.csv`.
- Internal analysis UI: `/internal/keyword-analysis`.
- Ranking metric: `Total Available Impressions = Impr. / Search impr. share`.
- If `Search impr. share` is `< 10%`, use `10%` as the deterministic denominator.
- If `Search impr. share` is missing or invalid, exclude that row from the ranked top-10 list and note it.

## Start Protocol

When asked to create or update an ad:

1. Ask for `Ad Group Name`.
2. Ask for `Campaign Name` only if that ad group exists in multiple campaigns.
3. If the ad group is not found in the dataset, stop and request corrected input.
4. Use only rows for the selected campaign and ad group.
5. Exclude all rows where `Search keyword status = Not eligible`.
6. Present the top 10 ranked eligible keywords and wait for user confirmation before drafting ad assets.

## Search Intent Brief

The first section of the output must be `## Search Intent Brief`.

Include:

- Ad group intent classification: location-led, service-led, industry-led, or mixed.
- Buyer posture: research, comparison, high-intent, switching provider, local warehouse need, or another clear posture.
- 3 to 5 copy requirements driven by the selected keyword set.
- Notes on any excluded or unusable keyword rows that materially affect coverage.

## Top 10 Keyword Confirmation

Before drafting ad assets, present the top 10 ranked eligible keywords with:

- Keyword.
- Actual impressions.
- Search impression share.
- Total available impressions.

Wait for user confirmation before continuing.

## RSA Construction Rules

### Headlines

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

### Descriptions

Create 4 descriptions total. Each description must be `<=90` characters.

- Description 1 must be keyword-integrated and pinned to Position 1.
- Descriptions 2 to 4 are unpinned.
- Descriptions must be specific, believable, and aligned with the ad group intent.
- Avoid vague filler such as "solutions for your business" unless tied to a concrete fulfillment value prop.

## Brand And Policy Safety

- Use `Handled3PL` where ambiguity risk exists.
- Never start a headline with standalone verb-like `Handled`.
- No duplicate first word across all 15 headlines.
- Prefer numerals such as `3PL` and `100%`.
- Avoid disapproval-prone superlatives or unverifiable claims.
- Do not imply Google, Shopify, Amazon, or another platform endorses Handled.
- Do not make live-account changes or imply campaign changes have been applied.

## Ad Extensions

Create:

- 4 sitelinks, each with two description lines.
- 6 callouts.
- 4 structured snippets using the `Services` header.
- 1 promotion extension when intent supports it.

Extensions should reinforce the selected ad group's intent and should not introduce unrelated services or locations.

## Output Format

Use this exact output order:

1. `## Search Intent Brief`
2. `## Top 10 Keyword Confirmation`
3. `## Responsive Search Ad`
4. `## Ad Extensions`
5. `## Keyword Coverage Map`
6. `## Change Notes`

## Acceptance Checklist

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
- Pinning instructions are included.
- No duplicate first word appears across headlines.
- Brand and policy safety rules were checked.
- Extensions include 4 sitelinks, 6 callouts, 4 structured snippets, and a promotion extension when appropriate.
- Change Notes explain substitutions, exclusions, compromises, or assumptions.

## Examples

### Good

Good keyword matcher headline:

`Apparel Fulfillment`

Why it works:

- Uses a term from the ad group's keyword corpus.
- Fits within 30 characters.
- Is clear and natural.

Good USP headline:

`100% Order Accuracy`

Why it works:

- Uses a required guarantee.
- Is concise and policy-safe.
- Fits within 30 characters.

Good location CTA:

`Tour Our LA Warehouse`

Why it works:

- Follows the warehouse-tour pattern.
- Uses location intent.
- Fits within 30 characters.

### Avoid

Avoid generic cross-ad-group injection:

`Best Shopify 3PL`

Why to avoid it:

- It injects Shopify intent into non-Shopify ad groups.
- It uses a superlative that can be difficult to substantiate.

Avoid awkward keyword stuffing:

`Fulfillment Company Services`

Why to avoid it:

- It reads unnaturally.
- It is less likely to improve ad quality than a clean keyword-matching phrase.

Avoid unsupported endorsement language:

`Google Approved 3PL`

Why to avoid it:

- It implies endorsement.
- It creates policy risk.

## Assumptions And Defaults

- The latest uploaded keyword dataset is the source of truth until replaced.
- If an ad group exists in multiple campaigns, campaign selection is required first.
- If required phrasing exceeds limits, use the nearest compliant conversational variant and log it in `Change Notes`.
- If available keyword data is too thin, ask the user whether to continue with limited coverage or choose another ad group.
- If a user asks for live campaign changes, stop and ask for explicit confirmation because this workflow is asset-generation only.

## Changelog

- 2026-04-30: Added metadata, purpose, when-to-use guidance, data sources, expanded acceptance checklist, examples, assumptions, and changelog. Preserved the v2.3 RSA construction rules and upgraded document version to 2.4.
