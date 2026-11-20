# RecipeHub

A recipe browsing website built with **Next.js (App Router)** and **React Bootstrap**, powered by the [DummyJSON Recipes API](https://dummyjson.com/docs/recipes).

Every page is a React **Server Component** that fetches its own data on the server. Interactivity is limited to two small Client Components, so the browser downloads very little JavaScript and never calls the external API directly.

**Live demo:** [recipe-hub-rho-three.vercel.app](https://recipe-hub-rho-three.vercel.app) &nbsp;·&nbsp; **Repository:** [github.com/adelhokulic/recipe-hub](https://github.com/adelhokulic/recipe-hub)

---

## Features

- **Home page** with 9 featured recipes shown as responsive cards (image, cuisine, name, prep time, difficulty, rating)
- **All recipes** with pagination driven by a URL parameter (`/recipes?page=2`)
- **Recipe details** with image, prep and cook time, servings, calories, tags, ingredients and numbered steps
- **Browse by tag, cuisine and meal type** from a sticky sidebar that highlights the current section, the tags on each recipe, the navigation and the footer
- **Show/hide ingredients** toggle (Client Component)
- **Calorie calculator**: choose a number of servings and see the total calories update (Client Component)
- **Top cuisines**, calculated from the full recipe list and sorted by number of recipes, shown with counts in the sidebar and in the footer
- **Friendly "not found" states** for invalid recipe IDs, unknown tags, cuisines, meal types and out-of-range pages
- **Responsive, app-like layout**: the sidebar turns into a scrollable chip row on mobile, cards go from one to three columns, and the recipe image stays in view while you scroll the steps on desktop

## Design

The visual style matches my [portfolio](https://github.com/adelhokulic/cv-portfolio): the same blue accent (`#2f6fed`), neutral background, 12px corners and soft shadows, applied by overriding Bootstrap's CSS variables in one small `globals.css`. Everything else is built from React Bootstrap components and Bootstrap utility classes.

Motion is done in pure CSS: cards fade in one after another, lift on hover and slightly zoom their image. All animations are turned off for visitors who prefer reduced motion.

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, React Bootstrap 2, Bootstrap 5 |
| Images | `next/image` with a remote pattern for `cdn.dummyjson.com` |
| Styling | Bootstrap CSS variables and utilities, a few custom classes, CSS animations |
| Data | DummyJSON Recipes API |
| Deployment | Vercel |

## Routes

| Route | Description | Data source |
|---|---|---|
| `/` | 9 featured recipes | `GET /recipes?limit=9` |
| `/recipes?page=n` | All recipes, 9 per page | `GET /recipes?limit=9&skip=…` |
| `/recipes/[id]` | Recipe details | `GET /recipes/{id}` |
| `/tags/[tag]` | Recipes with a given tag | `GET /recipes/tag/{tag}` |
| `/cuisine/[name]` | Recipes from a given cuisine | `GET /recipes?limit=0`, filtered on the server |
| `/meal-type/[type]` | Breakfast, lunch, dinner… | `GET /recipes/meal-type/{type}` |

## Technical Highlights

### Server Components first

All pages are `async` Server Components that `await` their data directly. There are no `useEffect` fetches and no loading spinners on first render. Only two components are marked `"use client"`, because they need state:

- `ToggleIngredients`: receives the server-rendered ingredient list as `children` and only decides whether to show it.
- `CalorieCalculator`: stores the chosen number of servings in state. The total is a derived value (`servings × caloriesPerServing`), not a second piece of state.

### Separate data layer

All API calls live in [`src/services/recipeService.js`](src/services/recipeService.js). The base URL comes from a server-only environment variable (no `NEXT_PUBLIC_` prefix), so it never reaches the browser bundle. Responses are cached with `next: { revalidate: 3600 }`, so most requests are served from the cache instead of the API.

### Route parameter validation

- **Recipe ID:** non-numeric IDs such as `abc` show the "not found" message without calling the API. Numeric IDs that don't exist (`9999`) are detected from the API's 404 response.
- **Page number:** `?page=` is converted to a whole number and clamped to at least 1. Values like `abc`, `0`, `-3` or `2.5` fall back to a valid page, and pages past the last one show a "page not found" message.
- **Tags, cuisines and meal types** are URL-decoded, so values with spaces such as `Main course` work in both the request and the page title.

### Cuisine filtering on the server

The API has no cuisine endpoint. Using the tag endpoint instead gave wrong results: 8 of the 21 cuisines did not match. For example, the `Asian` tag returns 12 recipes, but only 3 recipes actually have `cuisine: "Asian"`. The cuisine page therefore loads all recipes (`limit=0`) and filters them in the Server Component, ignoring letter case.

### Top cuisines and the browse sidebar

`getTopCuisines()` counts recipes per cuisine with `reduce`, sorts the names by that count and returns the most popular ones. The sidebar and the footer both use it, and because the request is cached they don't call the API on every page view.

The sidebar is a Server Component too. Each page tells it which link is active through an `active` prop (for example `/cuisine/Italian`), so highlighting the current section needs no client-side JavaScript.

## Project Structure

```
src/
├── app/
│   ├── layout.js                 # Shared layout: Navbar, <main>, Footer
│   ├── page.js                   # /
│   ├── globals.css               # Theme variables, custom classes and animations
│   ├── recipes/
│   │   ├── page.js               # /recipes (pagination)
│   │   └── [id]/page.js          # /recipes/[id]
│   ├── tags/[tag]/page.js
│   ├── cuisine/[name]/page.js
│   └── meal-type/[type]/page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js                 # Server Component that fetches its own data
│   ├── BrowseLayout.js           # Sidebar + content grid for list pages
│   ├── BrowseSidebar.js          # Meal types, top cuisines and tags, with the active link
│   ├── PageHeader.js
│   ├── RecipeCard.js
│   ├── RecipesPagination.js
│   ├── NotFound.js               # Reusable, configured through title and message props
│   ├── ToggleIngredients.js      # "use client"
│   └── CalorieCalculator.js      # "use client"
└── services/
    └── recipeService.js          # All API calls and the top cuisines helper
```

## Getting Started

**Requirements:** Node.js 20.9 or newer.

```bash
git clone https://github.com/adelhokulic/recipe-hub.git
cd recipe-hub
npm install
```

Create a `.env` file in the project root:

```env
RECIPE_API_URL=https://dummyjson.com/
```

Then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |

## Deployment

The app is deployed on **Vercel**. The only configuration needed is the `RECIPE_API_URL` environment variable, set under *Project Settings → Environment Variables*.

## What I Learned

- When to use **Server** vs **Client Components**, and how to pass server-rendered JSX into a Client Component as `children`
- **File-based routing** with nested and dynamic segments, and reading `params` and `searchParams`, which are Promises in Next.js 16
- **Caching** fetch requests with `revalidate`
- **Validating route parameters** before using them in API calls
- Using **React Bootstrap in Server Components**. Compound components like `Card.Body` arrive as `undefined` there, so they must be imported by name (`CardBody`, `ListGroupItem`, `NavbarToggle`).
- **Checking API data** instead of assuming it is correct, which is how the tag/cuisine mismatch was found

## Possible Improvements

- Return a real HTTP 404 status for missing resources with Next.js `notFound()` and a `not-found.js` page
- Add `loading.js` and `error.js` route files for streaming and error boundaries
- Add page-specific metadata with `generateMetadata` (for example, the recipe name as the page title)
- Add search by recipe name
- Migrate to TypeScript and add tests

## Author

**Adel Hokulić** · [GitHub](https://github.com/adelhokulic)

Recipe data and images are provided by [DummyJSON](https://dummyjson.com).
