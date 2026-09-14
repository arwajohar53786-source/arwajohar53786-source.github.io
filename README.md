# Arwa Johar — Freelance Web Developer Website

This is a plain **static website** — just HTML, CSS and JavaScript files. No installs, no build tools, no coding software required to run it. That also means it's about as easy as it gets to put on the internet using GitHub Pages, which is what this guide walks you through.

## What's in this project

```
website-project/
├── index.html              ← your main website
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── css/style.css
├── js/script.js
└── templates/
    ├── restaurant/index.html
    ├── salon/index.html
    ├── portfolio/index.html
    ├── business/index.html
    ├── creative/index.html
    └── professional/index.html
```

You don't need to understand any of the code to deploy it. Just upload the files as they are.

---

## Part 1 — See it on your own computer first (optional, 30 seconds)

Before uploading anywhere, you can just **double-click `index.html`**. It'll open in your browser (Chrome, Edge, whatever you use) and you'll see the exact site, working, on your own computer. This is a good way to check you like it before putting it online.

---

## Part 2 — Put it on the internet with GitHub Pages (step by step)

This is completely free and takes about 10 minutes the first time. Follow these exactly, in order.

### Step 1: Create a GitHub account
1. Go to **https://github.com**
2. Click **Sign up** and follow the steps (email, password, username).
3. Verify your email if it asks you to.

### Step 2: Create a new "repository" (this is just a project folder on GitHub)
1. Once logged in, click the **+** icon in the top-right corner → **New repository**.
2. Give it a name — for example `my-website`. No spaces; use hyphens if you want a space (`my-website`, not `my website`).
3. Leave it set to **Public**.
4. Do **not** tick "Add a README file" — leave everything else as default.
5. Click **Create repository**.

### Step 3: Upload your files
1. On the new (empty) repository page, click the link that says **uploading an existing file**.
2. On your computer, open the `website-project` folder.
3. Select **everything inside it** — `index.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, the `css` folder, the `js` folder, and the `templates` folder — and drag them all into the GitHub upload box at once. (Drag the folders themselves, not just the files inside them, so the folder structure is kept.)
4. Wait for the upload progress bar to finish.
5. Scroll down and click the green **Commit changes** button. (Don't worry about what "commit" means — it just means "save this upload.")

### Step 4: Turn on GitHub Pages
1. In your repository, click **Settings** (top menu, near the top-right).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → "Source," choose **Deploy from a branch**.
4. Under "Branch," choose **main** and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes. Refresh the page.
6. You'll see a message like: *"Your site is live at https://your-username.github.io/my-website/"*

That link is your real, working website — you can open it on your phone, share it with anyone, and it will work exactly like the file you double-clicked earlier.

### Step 5: Check it works
1. Open the link from Step 4 in your browser.
2. Click around — scroll to the templates section, click "View Demo" on one of the template cards, click a WhatsApp button and confirm it opens WhatsApp with a pre-filled message to your number.
3. Open the same link on your phone to confirm it looks good on mobile too.

---

## Making changes later

Whenever you edit a file (say, you change some pricing text) and want the live site to update:
1. Go to your repository on GitHub.
2. Click on the file you want to change (e.g. `index.html`).
3. Click the **pencil icon** (Edit this file) in the top-right of the file view.
4. Make your change directly in the browser.
5. Scroll down, click **Commit changes**.
6. Wait about a minute — your live GitHub Pages site updates automatically.

You can also just delete the old file and re-upload a new version the same way you did in Step 3, if that's easier for a bigger change.

---

## Things you do NOT need to worry about right now

Since you're just testing:
- **You don't need to buy a domain.** Your free `your-username.github.io/my-website` address works completely fine for testing and even for sharing with people.
- **You don't need to submit anything to Google.** `robots.txt` and `sitemap.xml` are already in the project for later, but they only matter once you have a permanent address you want to be found on Google. Ignore them for now.
- **You don't need to touch any code** to get the site live — everything above is done through GitHub's website, with buttons and drag-and-drop.

---

## For later: buying a domain and getting found on Google

When you're ready to make this a "real" site (not just a test), here's what changes:

1. **Buy a domain** (e.g. from Namecheap or BigRock — roughly ₹700–1,200/year for a `.com`).
2. In your GitHub repository **Settings → Pages**, there's a "Custom domain" box — enter your new domain there, and GitHub will show you a couple of DNS records to add at wherever you bought the domain.
3. Once that's live, add back a canonical link and Open Graph tags in `index.html` pointing at your real domain (there's a comment in the file marking where these used to be).
4. Update `robots.txt` and `sitemap.xml` with your real domain, then submit your sitemap in **Google Search Console** (`https://search.google.com/search-console`, free) and use its "Request Indexing" tool on your homepage.

None of this is needed until you actually decide to launch this for real — for now, the GitHub Pages link is all you need to test with.

---

## Updating your pricing

All pricing lives in `index.html`, inside the section that starts with `<section id="pricing">`. Search for `price-amount` — each package's price is right after that, e.g. `₹9,999<sup>onwards</sup>`. Edit the number directly (in the GitHub file editor, or on your own computer before re-uploading).

## Adding a new client template

Copy one of the folders inside `templates/` (e.g. `templates/business`), rename the copy, and edit the text, WhatsApp number, and colors inside its `index.html`. If it's a real client project rather than another demo, remove the yellow "Demo Template" banner near the top of that file and the `<meta name="robots" content="noindex, nofollow">` line.

## Business advice (pricing, contracts, payments)

**Is the pricing appropriate?** Yes — ₹9,999 / ₹19,999 / ₹34,999 (starting prices) is sensible for a freelancer starting out in Mumbai. Don't go below ₹7,000–8,000 even for the smallest site; pricing too low attracts the most difficult clients, not the easiest ones.

**When to raise prices:** After your first 4–6 paid projects, or once you're consistently busy. Raise each tier 15–25% after your first 5 projects, and again after 15–20.

**Domain and hosting:** Charge these separately, at cost or with a small markup — don't fold them into your package price.

**Maintenance:** Offer an annual plan (₹6,000–12,000/year) for small updates and fixes — it's a strong source of repeat income.

**Revisions:** Define a "round" in writing (e.g. "all feedback submitted together within 5 business days") so it doesn't quietly become unlimited free changes.

**Payment structure:** Take payment upfront — never start unpaid work. A safe split: 50% upfront, 40% on first draft delivery, 10% on final handover. For small projects, 50/50 (upfront / before going live) is fine.

**Basic client agreement — cover in writing before starting:**
1. What's included (link to the package/scope agreed).
2. What's explicitly not included.
3. Number of revision rounds and what counts as one.
4. Payment schedule.
5. Timeline, and that it shifts if the client is late sending content.
6. Who owns the final files (usually the client, once paid in full).
7. What happens if the client cancels partway (upfront payment is non-refundable).
8. Your contact method and expected response time.

A clear WhatsApp message or a simple Google Doc the client agrees to in writing is enough at this stage — you don't need a lawyer yet.
