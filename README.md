# MFA Consulting Engineers — redesigned wireframes

Interactive wireframe pack prepared by DMC Consultancy Ltd for MFA Consulting Engineers.
Stage 1 for approval: **Projects and Inspections**.

The landing page offers three portals:

| Portal | What it covers |
| --- | --- |
| **Office & backend app** | The desktop system the practice runs on: project record and settings, BCAR and non-BCAR inspections, findings with photos and drawing pins, PDF reports on MFA letterhead, task calendar, issue tracker, invoices and payment schedule. |
| **Engineer mobile app** | 14 screens for a team member on site: sign in → today's tasks → open a project → start an inspection → photo with date, time and GPS → pin it on the drawing → review and submit. Fully click-through. |
| **Contractor portal** | The external view. Contractors and clients open the report link or enter a reference number to review findings, reply on an issue, take an assigned action and close items out. |

## Running locally

No dependencies to install — the server uses Node built-ins only.

```bash
npm start
```

Then open http://localhost:3000

## Deploying on Railway

1. In Railway, create a project and choose **Deploy from GitHub repo**.
2. Select `kila-cpu/MFAredeisgnedwireframes`.
3. Railway reads `railway.json` and `package.json`, builds with Nixpacks and runs `npm start`.
4. Under **Settings → Networking**, click **Generate Domain** to get a public URL.

`PORT` is supplied by Railway and read by `server.js`. A health check is exposed at `/healthz`.

## Notes

- Everything is one self-contained `index.html` — no build step, no external requests apart from Google Fonts. The MFA logo is embedded as a data URI.
- All data in the pack is demonstration data. Nothing persists: a page refresh resets the prototype to its seeded state.
- Two items in the client brief could not be completed in a static prototype: the Google Map pin inside the generated report (needs an API key at build time) and the exact brand palette (awaiting the brand guidelines PDF).
