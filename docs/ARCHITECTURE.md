# Bimi: application structure and next integration boundary

## Current state verified on 22 October 2026

The repository already contained working fictional banking journeys in two JavaScript bundles and two stylesheets. It did not contain editable feature source directories, build scripts, a package manifest, or automated checks. This change preserves those journeys and makes the source maintainable without adding runtime dependencies.

## Source structure

- `src/core`: browser state, navigation, dialogs, form bindings and bootstrap.
- `src/features`: authentication, dashboard, accounts, transfers, cards, loans, activity, support and the new guided tour.
- `src/styles`: shared components and the existing responsive concept theme.
- `public/index.html`: HTML entry point.
- `scripts/manifest.json`: explicit source load order.
- `scripts/build.mjs`: deterministic concatenation and syntax validation.
- `scripts/serve.mjs`: local static server.
- `tests`: financial calculation and output escaping checks.
- `dist`: generated deployment files, retained for compatibility with the original deployment.

The source currently uses a shared classic-script runtime. Base views and enhanced views remain distinct to preserve behavior; this is not yet ES-module isolation. The manifest preserves ordering and the existing event-handler contract. Edit source files, then run the build; do not edit generated bundles.

## User journeys

| Area | Implemented demo flow | Production boundary |
| --- | --- | --- |
| Access | Profile form → fixed demo verification → dashboard; sample login/reset help | Identity provider, real recovery, MFA, server session and KYC |
| Dashboard | Account balances → activity → account details and actions | Core banking balances and an authoritative ledger |
| Transfers | Recipient → details → full debit review → fixed code approval → receipt | Authorized payment API, idempotency, sanctions/fraud checks and reconciliation |
| Cards | Freeze/unfreeze → payment controls → daily limits | Card processor API, server permissions and step-up approval |
| Lending | Calculator → sample documents → affordability → offer → agreement → simulated signing → fictional disbursement | Approved pricing, document storage, underwriting, bureau checks, signing provider and loan servicing |

## Proposed production architecture

Keep browser rendering separate from server-owned transactions. Introduce a backend-for-frontend with authenticated sessions, role-based authorization and schema validation. Add separate service adapters for accounts, payments, cards and lending. The browser must never directly own balances, approval outcomes or transaction status. Use an append-only audit trail and durable database records for applications, payment instructions, provider references, agreements and consent evidence. Store money using integer minor units or an approved decimal model. Use idempotency keys for payment and disbursement commands.

No production service adapters, live authentication or banking credentials are included in this increment. Fixed approval codes and sessionStorage are strictly demo behavior. Existing ProCredit-inspired styling is retained as an independent concept, not an official bank identity or a claim of approved brand compliance.
