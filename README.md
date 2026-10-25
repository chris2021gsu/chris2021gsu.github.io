# AI Portfolio & Research Site

A free, static personal website with two pages:

- **Profile** (`index.html`): about, stats, skills, experience, education, achievements, and your GitHub repos (loaded live).
- **Research** (`research.html`): your papers, open-source libraries, an interactive AI tech radar, and a searchable reading log.

## Edit your content

All content is in **`data.js`**. Open it, replace the placeholders, and save. You don't need to touch the HTML.

- Set `github` to your GitHub username, and your public repos appear automatically.
- To add a photo, put it in an `assets/` folder and set `avatar: "assets/me.jpg"`. Do the same for `resume`.
- To log a new AI technology, add a line to `radar`. Rings: `Adopt` (I use it), `Trial` (experimenting), `Assess` (reading about), `Watch` (on my radar).

To preview locally, open `index.html` in your browser.

## Publish for free on GitHub Pages

1. Create a GitHub repository named **`<your-username>.github.io`**, for example `chris2021gsu.github.io`.
2. Upload all files from this folder (on github.com: **Add file → Upload files**), or push them with git:
   ```bash
   git init && git add . && git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source: Deploy from a branch**, pick **main** and **/ (root)**, then click **Save**.
4. After a minute or two your site is live at **https://&lt;your-username&gt;.github.io** for anyone to visit.

To update the site later, edit `data.js` and push again (or edit it directly on github.com). It redeploys automatically.

Optional: a custom domain (like `yourname.dev`) can be added under **Settings → Pages → Custom domain**. Hosting stays free; you only pay for the domain.
