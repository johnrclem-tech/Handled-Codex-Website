# Google Ads API Basic Access Design Documentation

## 1. Company and Product Overview

**Company:** Handled, Inc.  
**Product:** Handled Commerce website and internal PPC analytics dashboard  
**Primary domain:** https://www.handledcommerce.com  
**Primary business function:** Ecommerce fulfillment services and 3PL provider operations

Handled uses Google Ads to acquire high-intent ecommerce fulfillment leads. The Google Ads API integration supports internal keyword expansion analysis, planning, and campaign optimization workflows.

---

## 2. Purpose of Google Ads API Usage

### 2.1 Business Objective

The purpose of this integration is to improve paid search efficiency and relevance by:

1. Analyzing current keyword performance grouped by ad group.
2. Generating additional keyword opportunities using Google Keyword Planner data.
3. Prioritizing opportunities using search demand, competition, and bid-range signals.
4. Producing internal recommendation reports for PPC operators.

### 2.2 API Scope in v1

This integration uses the Google Ads API for **read-only planning workflows**:

- `GenerateKeywordHistoricalMetrics`
- `GenerateKeywordIdeas`

No auto-bidding, no autonomous budget changes, and no unattended campaign-creation in v1.

---

## 3. Users and Access Model

### 3.1 Intended Users

- Internal Handled marketing team members with PPC responsibilities.
- Authorized operators reviewing keyword recommendations in an internal dashboard.

### 3.2 Account Model

- API access is authenticated through an MCC (manager) account context.
- Data is read for one primary production customer account.
- Access to credentials is restricted to authorized technical/marketing operators.

---

## 4. High-Level Architecture

### 4.1 Components

1. **Input data**: Current keyword export from Google Ads (`keywords-clem.csv`).
2. **Sync script**: Manual CLI command fetches Keyword Planner historical metrics and keyword ideas.
3. **Cache layer**: Planner responses stored in a local report artifact (`reports/google-ads-keyword-planner-cache.json`) in v1.
4. **Analysis script**: Merges planner data with existing terms; scores and prioritizes missing keywords.
5. **Report outputs**: Structured CSV/Markdown/metadata artifacts.
6. **Internal dashboard**: Next.js route displays bubble chart + recommendation tables for operators.

### 4.2 Data Flow

1. Operator runs manual sync command.
2. OAuth refresh token is exchanged for short-lived access token.
3. Planner requests are made per top-spend ad group using campaign-mirrored targeting.
4. Results are cached and normalized.
5. Analysis pipeline computes recommendation matrix and backlog.
6. Internal dashboard reads generated artifacts and renders sortable/filterable recommendations.

---

## 5. Authentication and Security

### 5.1 Credentials Used

- Developer token (Google Ads API Center)
- OAuth Client ID / Client Secret (Google Cloud)
- OAuth Refresh Token (authorized user with account access)
- Customer ID and optional Login Customer ID (MCC context)

### 5.2 Secret Management

- Secrets are managed through environment variables.
- Production deployment uses Vercel environment variables.
- Secrets are not hardcoded in application source.

### 5.3 Access Controls

- Internal-only dashboard route (`/internal/keyword-analysis`)
- `noindex` metadata + robots restrictions for internal route paths.
- Least-privilege operational access to runtime environment and API credentials.

### 5.4 Transport and Storage Protections

- All API calls use HTTPS.
- Cached planner artifacts exclude OAuth access token values.
- No credit card/payment instrument data is collected or stored.

---

## 6. Data Handling, Retention, and Use

### 6.1 Data Retrieved

For candidate and existing keywords:

- Avg monthly searches
- Competition level/index
- Top-of-page bid range (low/high)
- Keyword idea text

### 6.2 Data Usage

- Internal recommendation scoring only.
- Human-in-the-loop review before any campaign changes.
- No resale or external distribution of Google Ads data.

### 6.3 Retention

- Planner cache/report artifacts are retained for operational comparison and auditability.
- Data retention windows are controlled by internal operational processes.

---

## 7. Request Volume and Quota Controls

### 7.1 Execution Pattern

- Manual CLI workflow in v1 (operator-triggered only).
- No continuous polling and no high-frequency automated runs.

### 7.2 Quota Safety Controls

- Batching of keyword requests.
- Per-ad-group limits for analyzed terms and idea results.
- Retry/backoff behavior for transient errors and quota pressure.
- Cached reuse within configured max-age windows.

---

## 8. Compliance and Policy Controls

Handled commits to Google Ads API Terms and Policies by:

1. Using API data only for internal campaign planning and optimization.
2. Restricting API-backed workflows to authorized users and systems.
3. Avoiding prohibited data transfer or unauthorized third-party exposure.
4. Maintaining manual oversight for campaign decisions.

No prohibited use cases (such as credential sharing, scraping alternatives, or policy circumvention) are part of this design.

---

## 9. Operational Monitoring and Error Handling

### 9.1 Runtime Validation

- Fail-fast checks for missing/invalid credentials.
- Validation for customer ID/login customer ID format.
- Validation for required targeting config fields.

### 9.2 Error Handling

- Retries with exponential backoff for retriable API responses.
- Clear error output for authorization and service-permission issues.
- Request IDs logged for troubleshooting with Google support.

### 9.3 Quality Checks

The analysis pipeline enforces:

- Deduplication check
- Boundary ownership check (single ad-group owner per recommended term)
- Intent filtering check
- Coverage check for top-spend ad groups

---

## 10. Current and Future Scope

### 10.1 Current Scope (Basic Access Request)

- Read-only planning endpoints for keyword ideas and historical metrics.
- Manual execution by internal team.
- Internal dashboard/reporting output.

### 10.2 Future Scope (Post-approval)

Potential future enhancements (still human-reviewed):

- Optional forecast metrics integration.
- Cloud-native report storage and history.
- Expanded multi-account support under the same MCC governance model.

---

## 11. Contact and Ownership

**System owner:** Handled engineering/marketing operations  
**Operational owner:** Internal PPC team  
**Environment:** Next.js application + Node.js CLI scripts + Vercel deployment runtime

This document describes the intended production architecture used for Google Ads API Basic Access.
