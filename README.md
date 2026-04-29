This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Ads Keyword Planner Integration

This project supports a manual sync workflow for planner-enriched keyword gap analysis.

### 1) Configure credentials

Copy `.env.example` to `.env.local` (or export env vars in your shell) and set:

- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` (optional, for MCC setups)

### 2) Configure campaign/ad-group targeting

Edit `config/google-ads-targeting.json` to mirror campaign targeting:

- `geoTargetConstants`
- `language`
- `keywordPlanNetwork`
- `seedStrategy` (`KEYWORD_ONLY` or `KEYWORD_AND_URL`)
- `landingPageUrl` (when using URL seed mode)

### 3) Run manual sync + report generation

```bash
npm run sync:google-keyword-planner
npm run analyze:keyword-gaps
```

or run both:

```bash
npm run refresh:keyword-analysis
```

Generated files:

- `reports/google-ads-keyword-planner-cache.json`
- `reports/keyword-gap-top12.csv`
- `reports/keyword-gap-analysis.md`
- `reports/keyword-gap-metadata.json`

## Canonical Ad Prompt

Use this file as the single source of truth for ad creation/update instructions:

- `docs/prompts/google-ads-ad-only-canonical-v1.md`

This prompt is ad-only, dataset-driven, and outputs a full RSA package with extensions.
