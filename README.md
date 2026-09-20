# Artist's Archive

React + Vite export of the v2 design — terracotta accent, arch logo mark, shape system,
hover motion, reworked artwork detail page.

    npm install
    npm run dev

## Design tokens (`src/theme.js`)

| Role            | Value     |
| --------------- | --------- |
| Background      | `#F7F2E8` |
| Surface / card  | `#DED6C7` |
| Text            | `#292620` |
| Muted text      | `#746D61` |
| Border          | `#BDB3A3` |
| Accent          | `#7A563C` |

The accent is reserved for selected and active states: the chosen filter chip, the active
nav item, the audio scrubber, the primary action pill, a saved artwork, the selected tree
node. Secondary actions stay outlined.

## Shape system

Shape carries meaning rather than decoration — `shape()` in `theme.js` is the single source:

- **arch** — finished work
- **square** — work in progress
- **circle** — artist (avatars)
- **grid** — a collection or set

## Structure

    src/
      main.jsx            entry
      App.jsx             screen state + shared nav
      theme.js            tokens, fonts, shape system
      data.js             projects, continuations, remix tree
      components/
        Logo.jsx          arch a·a mark + wordmark
        Nav.jsx           sticky top bar
        Chip.jsx          filter / tab pill
        ShapeKey.jsx      homepage shape legend
        ProjectCard.jsx   card, shape-aware, hover lift + metadata slide-up
      screens/
        Home.jsx          hero, filters, shape key, grid
        Project.jsx       artwork detail — notes, save/share, needs, files, tags
        Tree.jsx          remix tree
        Upload.jsx        upload / continue form
        Profile.jsx       profile + started/continued tabs

State is local `useState`. Swap in a router and a data layer when you wire up a backend.
