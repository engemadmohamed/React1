# CinemaDB - ReactJS State Management & Routing Application

A comprehensive, production-ready React 19 application fulfilling all requirements across **ReactJS Assignments 1, 2, 3, and 4**.

---

## 🎯 Architecture & Assignment Compliance

### 1. Component Architecture (Assignment 1)
- **Reusable Components**: `MovieList`, `MovieCard`, `MovieFilter`, `StarRating`, `MovieModal`, `CartModal`, `Navbar`.
- **Props Passing**: Seamless unidirectional data flow from containers to child components.
- **Conditional Rendering**: Utilizes Ternary operators (`? :`) and short-circuit evaluation (`&&`).
- **Array Rendering**: Dynamic `.map()` rendering for movies, star ratings, genres, and watchlist items.

### 2. React Hooks & 4 Styling Approaches (Assignment 2)
- **React Hooks**: `useState`, `useEffect`, `useMemo`, `useContext`, `useDebugValue`.
- **Custom Hooks**: `useLocalStorage` (with defensive JSON parsing & corruption guards), `useMovieAppHooks` (`useMovieForm`, `useFilterState`, `useSortState`, `useSearchState`, `useFormVisibility`).
- **Four React Styling Approaches**:
  1. **Inline Styling**: Direct React styles (`style={{ ... }}`).
  2. **CSS Stylesheets**: Standard stylesheets (`index.css`, `App.css`, `MovieCard.css`, `MovieList.css`, `StarRating.css`).
  3. **CSS Modules**: Scoped module classes (`MovieFilter.module.css`).
  4. **Styled Components**: Dynamic CSS-in-JS components (`StyledComponents.js`).
- **Bootstrap 5**: Responsive layout grids, forms, modals, and helper utilities.

### 3. Multi-Page SPA & Form Handling (Assignment 3)
- **React Router DOM 7**: `BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`.
- **Routes Configured**:
  - `/` -> Library / Home Page
  - `/about` -> Application & Architecture Documentation
  - `/contact` -> Controlled Contact / Registration Form with 5 validated fields
  - `*` -> Custom 404 Page Not Found Route
- **Form Handling**: Controlled form state, real-time validation for Name, Email, Phone, and Message, inline error feedback, and success alert banner.

### 4. Context API & Redux Toolkit (Assignment 4)
- **Context API (`src/context/`)**:
  - `ThemeContextObject.js`: React Context definition.
  - `ThemeContext.jsx`: `ThemeProvider` managing application theme (`dark` / `light`).
  - `useTheme.js`: Custom hook consuming `ThemeContext`.
- **Redux Toolkit (`src/redux/`)**:
  - `slices/cartSlice.js`: Manages global watchlist cart state (`items`, `isOpen`) with reducers (`addToCart`, `removeFromCart`, `clearCart`, `toggleCartModal`).
  - `store.js`: Configured Redux store with `configureStore`.
  - `useSelector` & `useDispatch`: Applied in `Navbar.jsx`, `MovieCard.jsx`, and `CartModal.jsx`.

---

## 📁 Directory Structure

```text
src/
├── assets/
├── components/
│   ├── CartModal.jsx
│   ├── MovieCard.css
│   ├── MovieCard.jsx
│   ├── MovieFilter.css
│   ├── MovieFilter.jsx
│   ├── MovieFilter.module.css
│   ├── MovieList.css
│   ├── MovieList.jsx
│   ├── MovieModal.jsx
│   ├── Navbar.jsx
│   ├── StarRating.css
│   ├── StarRating.jsx
│   └── StyledComponents.js
├── context/
│   ├── ThemeContext.jsx
│   ├── ThemeContextObject.js
│   └── useTheme.js
├── hooks/
│   ├── useLocalStorage.js
│   └── useMovieAppHooks.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
├── redux/
│   ├── slices/
│   │   └── cartSlice.js
│   └── store.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```
