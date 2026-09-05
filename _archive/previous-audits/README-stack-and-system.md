# Stack & System

Stack & System is a lightweight web platform focused on practical AI tools, automation, digital products and online-business systems.

The site is designed to help visitors discover useful tools, understand what they do, and connect those tools into practical systems and workflows.

## Project architecture

The project uses a simple static-web architecture:

- **HTML5** — pages, directories, guides and company profiles
- **CSS** — shared visual system and responsive layout
- **Vanilla JavaScript** — navigation, search, interactions and dynamic behaviour
- **GitHub** — source control
- **Netlify** — production hosting/deployment
- **`main` branch** — production branch

There is no requirement for a frontend framework or build system for the current site.

## Main site structure

Important root-level pages include:

```text
index.html
tools.html
tools-data.js
ai.html
agents.html
automation.html
stacks.html
systems.html
solutions.html
content.html
resources.html
products.html
blueprints.html
money.html
marketplace.html
blog.html
newsletter.html
signal.html
```

The repository also contains individual tool and company profile pages, for example:

```text
make-com.html
elevenlabs.html
tally.html
carrd.html
```

alongside the wider PartnerStack/company profile pages.

## Tool directory

The main tool directory is:

```text
tools.html
```

The searchable directory data is maintained in:

```text
tools-data.js
```

### Important link architecture

Each searchable company/tool entry should have an internal:

```javascript
profileUrl
```

pointing to its Stack & System profile page.

For example:

```javascript
{
  name: "Example Tool",
  profileUrl: "example-tool.html",
  officialUrl: "https://example.com/"
}
```

The distinction is important:

- `profileUrl` = the user's internal Stack & System company/tool page
- `officialUrl` = the company's official external website

Search results should use the **internal profile URL** when the user chooses to explore a company.

Do not replace an internal `profileUrl` with the external company URL.

## Company profile pages

Individual company pages are intended to provide useful editorial information rather than simply redirect visitors elsewhere.

A completed profile should normally cover:

- What the company does
- What problem it solves
- Who it is for
- Key use cases
- Important capabilities/features
- How it can fit into a Stack & System
- Relevant alternatives where appropriate
- Official website
- Partner/affiliate status where verified

Affiliate or PartnerStack inclusion must not be presented as confirmed approval unless that relationship has actually been verified.

## Existing reviewed companies

The established reviewed company pages include:

- Make.com
- ElevenLabs
- Tally
- Carrd

These pages should be treated as existing reference implementations and should not be casually replaced when adding new company profiles.

## JavaScript

The main shared JavaScript file is:

```text
app.js
```

The tool directory has its own data source:

```text
tools-data.js
```

Changes to directory data should be made in `tools-data.js` rather than duplicating the same company data throughout multiple HTML files.

## SEO

Important SEO files include:

```text
robots.txt
sitemap.xml
```

When adding a new indexable company/profile page:

1. Add the page to the repository.
2. Make sure the directory/search entry points to the correct `profileUrl`.
3. Add the page to `sitemap.xml` where appropriate.
4. Use an accurate page title and meta description.
5. Do not create sitemap URLs for pages that do not exist.

## Affiliate architecture

Stack & System may contain affiliate and PartnerStack opportunities.

The site should distinguish between:

- ordinary editorial recommendations
- potential partner opportunities
- confirmed affiliate relationships

Only verified affiliate relationships should be represented as active affiliate relationships.

## Deployment

Production deployment is intended to run from:

```text
main
```

Netlify is configured to deploy the production site from the `main` branch.

Typical workflow:

```text
Local changes
    ↓
Review in GitHub Desktop
    ↓
Commit to main
    ↓
Push origin
    ↓
Netlify deploy
```

Before pushing significant changes, check that the local version is the intended version. Avoid pulling/resetting over local work unless the differences have been reviewed.

## Adding a new company/tool

For a new company or tool:

1. Create its individual profile page.
2. Follow the established Stack & System page structure/design.
3. Add its data to `tools-data.js`.
4. Give it the correct internal `profileUrl`.
5. Add the official external URL separately as `officialUrl`.
6. Verify the search result opens the internal profile.
7. Add the profile to `sitemap.xml` if it should be indexed.
8. Check the page on mobile and desktop.
9. Commit and push to `main`.

## Important project rule

Keep the architecture simple.

The project is intentionally built around static HTML, CSS and JavaScript. Do not introduce unnecessary frameworks, build systems, databases or application infrastructure unless there is a clear requirement for them.

The priority is:

**clear structure → useful content → reliable links → good UX → SEO → monetisation**

