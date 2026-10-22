# Verde — Kosovo digital banking concept

A dependency-free responsive banking prototype. Open dist/index.html or deploy to Vercel as a static project with output directory `dist`, framework Other, and no build command.

Demo login: demo@verde.test / Verde2026!
All simulated verification and signing codes: 123456.

Journeys: temporary profile registration; login; dashboard; reviewed and approved demo transfers with fee accounting; card freeze and limits; loan application, sample documents, affordability simulation, offer and amortization schedule, sample agreement download, simulated signing and disbursement. Statement CSV and transfer receipt downloads are included.

No backend, real authentication, real payments, card processing, credit checks or legally binding signature. Fictional data only. Not affiliated with ProCredit Bank. State lives in sessionStorage; passwords are not persisted. A page reload returns to demo login. Reset in Activity clears demo activity.

Loan assumptions: fixed nominal interest 6.9% annually, monthly amortization, 1% upfront fee withheld from disbursement. Effective annual rate computed using monthly IRR on net proceeds; no additional charges assumed. Displayed numbers rounded to cents; calculations use full precision. Demo affordability threshold: total monthly debts including proposed payment <=40% of net income. No claim about any bank's actual pricing or policies.

Production needs bank-approved architecture, identity and transaction security, server-enforced authorization, core-banking and processor APIs, transaction idempotency and reconciliation, KYC/AML and fraud services, lending rules, legally reviewed disclosures and agreements, approved signing integration, immutable audit evidence, accessibility/security assessment, operational recovery and regulatory review.
