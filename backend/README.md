## Styling Rules (MANDATORY)

- Inline CSS is forbidden.
- No <style> tags in templates.
- All visual styling must live in component .scss files.
- HTML files must contain structure only.
- TypeScript files must contain logic only.
- Use Ionic components and shared SCSS helpers.

# Pearl Horizon UK — MVP

## Purpose

Pearl Horizon UK is a UK-based Uganda Entry Advisory & Verification platform.

The MVP is designed to:

- explain what we do in under 10 seconds
- route users to the correct pathway
- convert high-intent users via a single advisory intake
- avoid execution, guarantees, or regulated advice

This README defines the **locked MVP scope**.  
Anything not listed here is out of scope for v1.

---

## Core Principles

- Advisory-led, not operational
- Fixed-scope engagements
- Verification before commitment
- Administrative coordination only (Uganda visas)
- No legal, immigration, or investment advice
- No guarantees

---

## MVP Pages & Behaviour

### 1. Home (`/`)

**Purpose**

- Explain value quickly
- Route users to a pathway
- Push advisory intake

**Sections**

- Hero: “Clarity before commitment.”
- 3 pathway cards: Invest & Work / Study / Visit
- How we work (4 bullets)
- Advisory notice
- Footer CTA: “Start with an Advisory Intake”

---

### 2. Invest & Work (`/invest-work`)

**Purpose**

- Lead with Uganda Entry Advisory
- Position as premium, decision-stage service

**Includes**

- Entry pathway overview
- Regulatory landscape awareness (non-legal)
- Risk patterns and failure points
- Verification support where relevant
- Decision readiness: proceed / pause / re-scope
- Optional introductions

**CTA**

- Request Advisory Intake

---

### 3. Study (`/study`)

**Purpose**

- Education advisory with Uganda student visa admin support

**Includes**

- School shortlists and comparisons
- Governance and safeguarding considerations
- Admissions process guidance
- Introductions to schools where appropriate

**Uganda Student Visa**

- Administrative coordination only
- Document checklists and application support
- Applicants submit applications
- No guarantees

---

### 4. Visit (`/visit`)

**Purpose**

- Curated, not tour-operator
- Confidence-building entry point

**Includes**

- Vetted operator referrals
- Group visit coordination (fixed scope)
- Pre-travel briefing pack

**Uganda Tourist Visa**

- Administrative coordination only
- Applicants submit applications
- No guarantees

**Note**

- Pearl Horizon does not operate tours
- Partner services may be commission-based

---

### 5. Advisory Intake (`/intake`)

**Purpose**

- Primary conversion engine
- Collect structured information
- Feed backend (Supabase)
- Trigger Zoho notification

**Fields**

- Name, email, phone, country
- Pathway selection
- Goal description
- Timeline
- Budget range
- Consent

**Behaviour**

- No instant promises
- Confirmation message only
- Follow-up handled offline

---

### 6. Disclaimer (`/disclaimer`)

**Purpose**

- Protect scope and expectations

**States**

- Advisory only
- Administrative coordination only for Uganda visas
- No legal, immigration, or investment advice
- No guarantees
- Client responsibility

---

## Navigation

Top Menu:

- Home
- Invest & Work
- Study
- Visit
- Request Intake (primary button)

Footer:

- Disclaimer
- Privacy
- Contact email

---

## Out of Scope (Explicit)

- Recruitment
- Property sales or management
- AML / KYC execution
- UK visa processing
- User accounts
- Dashboards
- Content marketing / blogs
- Payments

These may be revisited post-MVP.

---

## Build Status

- Frontend: Ionic Angular
- Backend: Express
- Database: Supabase
- Notifications: Zoho
