---
title: "A Performance Review of the 'OpenClaw' Scam: High-IQ Delivery, Low-IQ Execution"
description: "How a mobile developer's eye for detail and a deep dive into Gmail headers exposed a sophisticated GitHub hijack."
author: "Bilal Naeem"
tags: ["security", "github", "phishing", "mobile-dev", "openclaw"]
date: 2026-03-18
---

---

# A Performance Review of the "OpenClaw" Scam: High-IQ Delivery, Low-IQ Execution

**Author:** Bilal Naeem
**Tags:** security, github, phishing, mobile-dev, openclaw
**Published:** 2026-03-18

**TL;DR:**
A phishing attempt for a fake "$CLAW" airdrop bypassed Gmail and GitHub filters, but failed at the basics developers spot immediately: typos, contribution logic, and project consistency. Here’s a step-by-step breakdown, complete with visuals and annotations.

---

## How I Almost Got Tricked

I received an email claiming I was being rewarded for my contributions to OpenClaw, Peter Steinberger’s AI framework. At first glance, it looked legitimate—even coming from a `github.com` domain. But my “developer eye” immediately spotted subtle inconsistencies that screamed **scam**.

> **Visual Callout 1:**
> Screenshot of the phishing email with red boxes highlighting:
>
> - Repository name typo (`0penClawSupport`)
> - Token allocation mention (`5,000 $CLAW`)
> - Call-to-action button/link

---

## The Three "Gives" That Failed the Dev Test

### 1. The Typo-Squatting "0"

```text
0penClawSupport
```

> **Visual Callout 2:**
> Side-by-side image comparing correct “OpenClaw” vs. fake “0penClawSupport,” highlighting the zero in red.

---

### 2. The Contribution Paradox

The email claimed I was rewarded for “contributions,” but I hadn’t submitted a PR yet. Developers: **always cross-check your commit history**.

> **Visual Callout 3:**
> Screenshot of GitHub commit history showing no contributions, with annotation pointing out mismatch.

---

### 3. The "$CLAW" Red Flag

The promise of **5,000 $CLAW** tokens immediately raised suspicion. OpenClaw is open-source—no token exists.

> **Visual Callout 4:**
> Highlight the token line in the email in red, with a note: “Open-source project ≠ crypto reward.”

---

## The Investigation: "Show Original"

I didn’t trust the email blindly. Gmail’s **“Show Original”** revealed the raw headers and HTML.

> **Visual Callout 5:**
> Screenshot of Gmail “Show Original” view. Annotate:
>
> - SPF/DKIM passes
> - GitHub IP address
> - Safe-looking domain masking redirect

---

### How They Pulled It Off

1. **The Hijack:** Fake repo + discussion.
2. **The Mention:** Tagged developers (some real, some dummy).
3. **The Notification:** GitHub notifications sent from **their own servers**, making it technically legitimate.

> **Visual Callout 6:**
> Flowchart showing how the scam works:
>
> ```
> Fake repo → Tag → GitHub notification → User sees email → Potential redirect
> ```

---

## The Google Redirect Trap

The call-to-action was a `share.google` URL. Automated scanners saw a “safe” domain, but raw HTML showed the true destination—a page designed to steal browser tokens or trick users into signing a malicious wallet transaction.

> **Visual Callout 7:**
> Highlighted HTML snippet of the redirect URL, with arrows showing original vs. final destination.

---

## Final Grade: C-

**Delivery: A** – bypassed Gmail and GitHub filters.
**Execution: D** – failed basic developer logic checks.

---

## Lessons for Developers

1. **Trust Your Developer Eye:** Debug habits save wallets.
2. **Domain Trust Is Dead:** A `@github.com` email isn’t automatically safe.
3. **Use “Show Original”:** Inspect raw HTML before clicking.
4. **Verify Contribution History:** Double-check your commit log.
5. **Question Too-Good-to-Be-True Rewards:** Open-source + token = 🚩.

> **Visual Callout 8:**
> Summary infographic with checklist for spotting developer-targeted phishing.
