# Canonical Instructions v2.3: Google Ads Asset Generation (Ad-Only, All Ad Group Types)

## Summary
Use one ad-generation workflow across all ad group types with:
- eligible-only filtering
- top-10 confirmation gate
- ranking by total available impressions
- explicit CTA rules
- stricter USP/value-prop requirements tied to ad-group intent

---

## Final Instructions I Will Follow

### 1) Scope
- Generate Google Ads assets only (RSA + extensions + coverage notes).
- No landing-page or SEO-page generation in this workflow.

### 2) Start Protocol
When asked to create/update an ad:
1. Ask for `Ad Group Name`.
2. Ask for `Campaign Name` only if that ad group exists in multiple campaigns.
3. If not found in dataset, stop and request corrected input.

### 3) Data Source + Eligibility Filter
- Source of truth: latest uploaded keyword dataset.
- Use only rows for selected campaign + ad group.
- Exclude all rows where `Search keyword status = Not eligible`.

### 4) Ranking Method (Required)
- Compute `Total Available Impressions = Impr. / Search impr. share`.
- Rank eligible keywords by this metric (descending).
- If `Search impr. share` is `< 10%`, use `10%` as deterministic denominator.
- If share is missing/invalid, exclude that row from ranked list and note it.

### 5) Mandatory Confirmation Gate
- Present top 10 ranked keywords with:
  - actual impressions
  - search impression share
  - total available impressions
- Wait for user confirmation before generating ad assets.

### 6) Search Intent Brief (First Section)
- Classify ad group intent and buyer posture from keyword set.
- State 3 to 5 copy requirements driven by selected keywords.
- Label group as location-led, service-led, industry-led, or mixed.

### 7) RSA Construction Rules (Hard Constraints)
- Headlines: 15 total, each `<=30` chars
  - Category 1 (Keyword Matchers): 6 headlines; pin 3 to Position 1
  - Category 2 (USP/Value Props): 6 headlines; pin 2 to Position 2
  - Category 3 (CTAs): 3 headlines; pin 2 to Position 3
- Descriptions: 4 total, each `<=90` chars
  - Description 1 keyword-integrated; pin to Position 1
  - Descriptions 2 to 4 unpinned

### 8) Category 1 Keyword Matcher Rules (Use Top-10 Pool)
- Build 6 keyword matcher headlines from the top-10 eligible keywords.
- Use only terms present in that ad group's keyword corpus.
- Transform keyword phrasing into human-readable Title Case (natural order).
- No cross-ad-group term injection.
- If a top keyword creates duplication/awkwardness, skip to next top-10 keyword and document substitution in `Change Notes`.

### 9) Category 2 USP/Value Prop Rules (6 Headlines)
Required inclusions (always):
- One USP headline about same-day shipping guarantee.
- One USP headline about 100% order accuracy guarantee.

Remaining 4 USP headlines must be ad-group-specific:
- Location-led groups: emphasize proximity/logistics fit (port proximity, HQ proximity, regional transit speed, local warehouse access).
- Service-led groups: emphasize traits of searched service (automation depth, integration fit, SLA performance, kitting/returns capability, multi-channel operations).
- Industry-led groups: address industry pain points (apparel returns complexity, cosmetics temperature/control handling, compliance/packaging needs).

Ad-group-term injection preference:
- Extract salient non-generic ad-group terms (for example `California`, `Los Angeles`, `Cosmetics`, `Apparel`) and use them in USP headlines when natural.
- Keep conversational phrasing; no forced insertion or awkward constructions.
- Do not abbreviate injected terms.

Quality target:
- At least 4 of 6 USP headlines should clearly reflect ad-group-specific intent signals.
- If any cannot be made natural within constraints, use best-fit alternative and explain in `Change Notes`.

### 10) CTA Headline Rules (Required Pattern)
Exactly 3 CTA headlines:
- CTA 1: Quote CTA (for example, `Get A Custom Quote`).
- CTA 2: Conditional CTA:
  - If ad group is `Location`: warehouse-tour pattern `Tour Our [Ad Group Name] Warehouse Today` (or nearest natural `<=30` char variant).
  - If ad group is not `Location`: Expert CTA (for example, `Talk To A Fulfillment Expert`).
- CTA 3: Urgency CTA equivalent to `Start Shipping This Week`.

Additional CTA constraints:
- Include ad-group terms where natural.
- Title Case.
- Policy-safe phrasing.
- `<=30` chars.

### 11) Brand + Policy Safety
- Use `Handled3PL` where ambiguity risk exists.
- Never start a headline with standalone verb-like `Handled`.
- No duplicate first word across all 15 headlines.
- Prefer numerals (`3PL`, `100%`).
- Avoid disapproval-prone superlatives/claims.

### 12) Ad Extensions (Required)
- 4 sitelinks (each with two description lines)
- 6 callouts
- 4 structured snippets (`Services` header)
- 1 promotion extension when intent supports it

### 13) Output Format (Exact)
1. `## Search Intent Brief`
2. `## Top 10 Keyword Confirmation`
3. `## Responsive Search Ad`
4. `## Ad Extensions`
5. `## Keyword Coverage Map`
6. `## Change Notes`

### 14) Quality + Boundary Rules
- Highest-opportunity keywords must be represented in primary assets.
- Include negative-keyword guardrails to reduce cannibalization.
- Priority order when constraints conflict:
  1. compliance
  2. readability
  3. keyword coverage
  4. stylistic preference

---

## Test Plan
- Confirm top-10 gate is always shown before ad drafting.
- Verify eligible-only filtering.
- Verify ranking math/order by total available impressions.
- Verify Category 1 uses top-10 pool for 6 distinct natural headlines.
- Verify USP set always includes same-day guarantee + 100% accuracy guarantee.
- Verify USP specificity by ad-group type (location/service/industry rules).
- Verify CTA set includes quote + conditional CTA 2 + urgency CTA.
- For location ad groups, confirm CTA 2 uses warehouse-tour pattern.
- Verify 15/4 counts, pinning, character limits, and first-word uniqueness.

---

## Assumptions and Defaults
- Latest uploaded keyword dataset is source of truth until replaced.
- If ad group exists in multiple campaigns, campaign selection is required first.
- If required phrasing exceeds limits, use nearest compliant conversational variant and log it in `Change Notes`.
