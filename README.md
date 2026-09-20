# Artist's Archive

**Artist's Archive** is a digital space for artists to document, organize, and share creative work — including both finished pieces and works in progress.

Rather than treating a portfolio as a collection of polished final products, Artist's Archive emphasizes the **creative process**: sketches, studies, iterations, continuations, and the relationships between works.

Built with **React + Vite**.

---

## Features

* Browse finished works and works in progress
* Filter and explore artwork
* View detailed artwork pages with notes, files, tags, and project needs
* Save and share artwork
* Upload new work or continue an existing project
* Explore relationships between works through a remix tree
* View artist profiles and their contributions
* Shape-based visual language for distinguishing content types
* Subtle hover interactions and motion
* Responsive gallery-style interface

---

## Design System

Artist's Archive uses a warm, muted visual system inspired by physical archives, sketchbooks, and gallery spaces.

### Color Palette

| Role           | Value     |
| -------------- | --------- |
| Background     | `#F7F2E8` |
| Surface / Card | `#DED6C7` |
| Text           | `#292620` |
| Muted Text     | `#746D61` |
| Border         | `#BDB3A3` |
| Accent         | `#7A563C` |

The terracotta accent is used sparingly for meaningful interactions such as selected filters, active navigation, primary actions, saved artwork, and selected tree nodes.

Secondary actions remain outlined to preserve the quiet visual hierarchy.

### Shape Language

Shapes communicate the type or state of content throughout the interface.

| Shape      | Meaning           |
| ---------- | ----------------- |
| **Arch**   | Finished work     |
| **Square** | Work in progress  |
| **Circle** | Artist / profile  |
| **Grid**   | Collection or set |

The shape system is defined centrally through `shape()` in `src/theme.js`.

---

## Project Structure

```text
src/
├── main.jsx
├── App.jsx
├── theme.js
├── data.js
│
├── components/
│   ├── Logo.jsx
│   ├── Nav.jsx
│   ├── Chip.jsx
│   ├── ShapeKey.jsx
│   └── ProjectCard.jsx
│
└── screens/
    ├── Home.jsx
    ├── Project.jsx
    ├── Tree.jsx
    ├── Upload.jsx
    └── Profile.jsx
```

### Core Files

* **`App.jsx`** — handles screen state and shared navigation
* **`theme.js`** — contains design tokens, typography, colors, and the shape system
* **`data.js`** — contains mock project, continuation, and remix-tree data

### Screens

* **Home** — browse artwork, filters, the shape key, and archive grid
* **Project** — view an artwork's story, notes, files, tags, needs, and actions
* **Tree** — explore how works are connected, continued, or remixed
* **Upload** — add new work or continue an existing piece
* **Profile** — view an artist's work and their started/continued projects

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abbyh1/artists-archive.git
cd artists-archive
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## Tech Stack

* **React**
* **Vite**
* **JavaScript / JSX**
* **CSS**

---

## Current Status

Artist's Archive is currently a **frontend prototype**.

Project data and navigation state are stored locally. The next phase of development will turn the prototype into a functional MVP with persistent data, authentication, file storage, and routing.

### Planned MVP

* [ ] User authentication
* [ ] Artist accounts and editable profiles
* [ ] Persistent artwork data
* [ ] Image and file uploads
* [ ] Save / bookmark system
* [ ] Artwork downloads
* [ ] Shareable artwork URLs
* [ ] Project continuation and remix relationships
* [ ] Search and filtering
* [ ] Collections
* [ ] React Router navigation
* [ ] Backend database integration

---

## Product Direction

Artist's Archive explores a different approach to creative portfolios:

> **Creative work doesn't have to be finished to be worth preserving.**

The goal is to create an archive where artists can preserve what they made and explore **how ideas developed, changed, and connected over time**.

