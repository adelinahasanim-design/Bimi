# Bimi — ProCredit-inspired digital banking concept

A responsive, dependency-free demonstration for Kosovo retail banking, with a white and charcoal interface, orange actions and red identity accents. This is an independent design concept, not a ProCredit Bank application or an exact reproduction of its proprietary interface.

## Develop and verify

Requires Node.js 22 or newer. No third-party runtime dependencies.

```sh
npm ci
npm run build
npm test
npm run dev
```

Open http://localhost:3000. Edit `src/` and `public/`; the build regenerates `dist/`. See [architecture and production integration plan](docs/ARCHITECTURE.md). The question-mark button in the banking header opens the new step-by-step journey guide.

## Open locally

Open `dist/index.html` in a browser. Keep the other files in `dist` beside it. Alternatively serve the directory with `python3 -m http.server 3000 --directory dist` and open `http://localhost:3000`.

Use **Explore the platform**, or the sample credentials:

- Email: `demo@bimi.test`
- Password: `Bimi2026!`
- All simulated verification, approval and signing codes: `123456`

Use fictional information only. No bank account is created and no payments, messages, credit checks or legally binding signatures are processed. Data stays in the current browser session. Passwords are not persisted. Reloading returns to the sign-in screen.

## Features

- Registration and demo login with password visibility and help.
- Account dashboard, balance privacy toggle, separate account details and account-confirmation download.
- Saved recipients, reviewed transfers with transparent fees, simulated approval and receipts.
- Sample bill payments and local payment requests (no message sent).
- Free transfers between fictional everyday and savings accounts.
- Card freeze, payment controls and daily spending limits.
- Searchable service navigation, notifications, profile and local support-message demonstration.
- Transaction search, incoming/outgoing/card filters, date ranges, details and CSV export.
- Loan product hub, presets, affordability simulation, sample documents, draft/resume, repayment schedule, sample agreement, simulated signing and net disbursement.
- Completed loan details and downloadable sample agreements.
- Responsive mobile layout with bottom navigation, native dialogs and keyboard support.

## Deploy on Vercel

Import this GitHub repository. Select **Other** as the framework, use `npm run build` as the build command and `npm ci` as the install command, and use `dist` as the output directory. `vercel.json` also declares the output directory and basic response headers. No environment variables, database or dependencies are required for the demo.

## Generated deployment files

- `dist/app.js`: transaction, card and lending calculations and core form handlers.
- `dist/experience.js`: interface, feature journeys and local data extensions.
- `dist/styles.css`: base component styles.
- `dist/experience.css`: responsive ProCredit-inspired concept theme.

## Financial assumptions

All figures and terms are fictional. Personal-loan pricing assumes fixed nominal annual interest of 6.9%, monthly amortization and a 1% upfront fee deducted from disbursement. The effective annual rate uses monthly IRR on net proceeds and assumes equal monthly periods and no other charges. Full-precision calculations are shown rounded to cents. Actual contractual schedules need a bank-approved rounding and calendar convention. Demo affordability uses total monthly debt payments of at most 40% of net income; this is not a ProCredit lending policy.

Sample transaction history is fictional and does not constitute a full ledger or bank statement. The dashboard cashflow covers the current calendar month and excludes transfers between own accounts.

## Before any live banking use

Production requires bank-approved architecture and security, real identity and transaction authorization, server-side permissions, core-banking and card/payment integrations, idempotency and reconciliation, fraud/KYC/AML checks, approved loan decisioning, legally reviewed agreements, an approved signing provider, retained audit evidence, accessibility and security assessments, operational resilience and applicable regulatory review.
