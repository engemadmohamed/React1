
A modern, responsive, and luxury dark-themed **Cinema Dashboard Application** built with **React 19**, **Vite**, **Bootstrap 5**, and **Styled Components**.

---

## ✨ Features

- 🍿 **Movie Library Management**: Add, view, edit, and delete movie reviews seamlessly.
- 🖼️ **Poster Image Support**: Display high-quality movie artwork with automatic genre backdrop fallbacks.
- ℹ️ **Movie Details & Edit Modal**: Click on any movie card or the details button to view comprehensive details or edit information in real time.
- 🔍 **Real-time Search & Filtering**: Instant title/genre search, status filtering (All, Watched, Watchlist), and sorting (Highest Rating, Newest Release, Title A-Z).
- 📊 **Dynamic Analytics Dashboard**: Calculates Total Movies, Watched Count, Watchlist, Top Rated Movie, Favorite Genre, Average Rating, and Watch Progress Bar.
- 💾 **Persistent Storage**: Custom `useLocalStorage` hook preserves library data across browser reloads.
- 📱 **100% Fully Responsive**: Built with Bootstrap Grid system for mobile, tablet, and desktop viewports.

---

## 🛠️ Technology Stack

- **Core**: React 19 (JSX) & Vite
- **UI & Layout**: Bootstrap 5 (Grid, Forms, Modals) & Glassmorphism Vanilla CSS
- **Styling**:
  - Inline Styling (`style={{ ... }}`)
  - CSS Stylesheets (`App.css`, `index.css`, `MovieCard.css`)
  - CSS Modules (`MovieFilter.module.css`)
  - Styled Components (`styled-components`)
- **State & Logic**: Custom React Hooks (`useLocalStorage`, `useMovieForm`, `useFilterState`, `useSortState`, `useSearchState`, `useFormVisibility`)

---

## 📋 Assignment Requirements Checklist

### ReactJS Assignment 2 Checklist:
- [x] **React Hooks**: Used `useState`, `useEffect`, and `useMemo`.
- [x] **Multiple Hooks**: Used `useState` for state management and `useEffect` for browser synchronization.
- [x] **Custom Hooks**: Implemented `useLocalStorage` and state debugging hooks in `src/hooks/`.
- [x] **4 Styling Approaches**:
  - [x] **Inline Styling**: Dynamic rating badges, progress bar width, star colors.
  - [x] **CSS Stylesheets**: `App.css`, `index.css`, `MovieCard.css`, `MovieList.css`.
  - [x] **CSS Modules**: `MovieFilter.module.css`.
  - [x] **Styled Components**: `StyledComponents.js` (`HeroBanner`, `StyledActionButton`, `StyledGenreChip`).
- [x] **Bootstrap Integration**: Installed `bootstrap` and imported CSS in `main.jsx`.
- [x] **Bootstrap Grid & Components**: Utilized `container`, `row g-4`, `col-12 col-md-6 col-lg-4`, and form controls.
- [x] **Code Architecture**: Properly structured in `src/components/`, `src/hooks/`, and `src/assets/`.
- [x] **Clean UI & Performance**: 100% functional, zero lint errors, verified build.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` package manager

### Installation & Setup

1. **Clone or Open Project Directory**:
   ```bash
   cd React1
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

