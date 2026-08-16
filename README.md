# 🎬 Movie Reviewer Pro (ReactJS Assignment 1, 2 & 3)

A multi-page Cinema Dashboard Application built with **React 19**, **React Router DOM 7**, **Vite**, **Bootstrap 5**, and **Styled Components**.

---

## ✨ Features & Pages

- 🏠 **Home Page (`/`)**: Movie library management (CRUD), search, status filters, sorting, movie details/editing modal, and real-time cinema metrics.
- ℹ️ **About Page (`/about`)**: Application overview, technical architecture, assignment requirements compliance, and technology stack.
- 📩 **Contact & Register Page (`/contact`)**: Form with 5 validated fields (Full Name, Email, Phone, Subject, Message), controlled inputs, inline error validation, and success notification banner.
- 🚫 **404 Not Found Page (`*`)**: Custom error page with quick redirect back to Home.
- 🧭 **Navigation Bar**: Responsive glassmorphic navbar with active route highlighting.

---

## 🛠️ Technology Stack

- **Core**: React 19 & Vite
- **Routing**: React Router DOM (`BrowserRouter`, `Routes`, `Route`, `NavLink`)
- **UI & Layout**: Bootstrap 5 (Grid, Forms, Modals, Navbar) & Glassmorphism CSS
- **Styling**:
  - Inline Styling (`style={{ ... }}`)
  - CSS Stylesheets (`App.css`, `index.css`, `MovieCard.css`)
  - CSS Modules (`MovieFilter.module.css`)
  - Styled Components (`styled-components`)
- **State & Logic**: Custom React Hooks (`useLocalStorage`, `useMovieForm`, `useFilterState`, `useSortState`, `useSearchState`, `useFormVisibility`)

---

## 📋 Assignment Requirements Checklist

### ReactJS Assignment 3 Checklist:
- [x] **Multiple Pages**: Created SPA with multiple routes (`/`, `/about`, `/contact`, `*`).
- [x] **React Router DOM**: Installed and configured `react-router-dom`.
- [x] **Navigation Bar**: Interactive Navbar with `NavLink` for page switching.
- [x] **Contact/Registration Form**: 5 controlled input fields (Name, Email, Phone, Subject, Message).
- [x] **Form State & Validation**: Managed inputs with React state, added email & phone regex validation.
- [x] **Success Alert**: Displays confirmation box upon valid form submission without page refresh.
- [x] **404 Route**: Handles unknown URLs with a custom Not Found page.
- [x] **Organization**: Clear separation into `src/pages/` and `src/components/`.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build
```


