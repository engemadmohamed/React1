# 🎬 Movie Reviewer - ReactJS Assignment

## Project Overview

This is a complete ReactJS project demonstrating all required concepts: **Reusable Components**, **Props**, **Ternary Operator**, **&& Operator**, and **Mapping using .map()**.

The application is a Movie Review system where users can:

- View a collection of movies
- Filter movies by watch status (All, Watched, Unwatched)
- Sort movies by rating or year
- Toggle watch status
- Delete movies from the collection
- View statistics about their movie collection

---

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx          # Reusable movie card component
│   ├── MovieCard.css
│   ├── MovieList.jsx          # List component using .map()
│   ├── MovieList.css
│   ├── MovieFilter.jsx        # Filter & stats component
│   ├── MovieFilter.css
│   ├── StarRating.jsx         # Reusable star rating component
│   └── StarRating.css
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── index.css                  # Global styles
└── main.jsx                   # Entry point
```

---

## 🚀 React Concepts Implemented

### 1. **Reusable Components**

The project is divided into multiple reusable components:

#### **MovieCard Component** (`src/components/MovieCard.jsx`)

- A standalone component that displays individual movie information
- Accepts props and renders a complete card with movie details
- Can be used anywhere in the app to display movie information

#### **MovieList Component** (`src/components/MovieList.jsx`)

- Renders a collection of MovieCard components
- Displays movies in a responsive grid layout

#### **MovieFilter Component** (`src/components/MovieFilter.jsx`)

- Provides filtering and sorting controls
- Shows collection statistics

#### **StarRating Component** (`src/components/StarRating.jsx`)

- Displays a 5-star rating visualization
- Reusable across the application

---

### 2. **Props**

Props are used extensively throughout the application to pass data between components:

#### **MovieCard Component**:

```javascript
function MovieCard({ movie, onToggleWatched, onDeleteMovie }) {
  // Props: movie (object), onToggleWatched (function), onDeleteMovie (function)
  // Used to display movie data and handle user actions
}
```

#### **MovieList Component**:

```javascript
function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  // Props: movies (array), callbacks for user actions
  // Passes props to MovieCard components
}
```

#### **MovieFilter Component**:

```javascript
function MovieFilter({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  totalMovies,
  watchedCount,
}) {
  // Props: state values and setter functions
  // Props: statistics to display
}
```

#### **StarRating Component**:

```javascript
function StarRating({ rating }) {
  // Props: rating (number)
}
```

---

### 3. **Ternary Operator**

The ternary operator is used for conditional rendering throughout the application:

#### **In MovieCard Component - Rating Color**:

```javascript
const getRatingColor = (rating) => {
  return rating >= 9
    ? "excellent"
    : rating >= 8
      ? "great"
      : rating >= 7
        ? "good"
        : "average";
};
```

#### **For Button Text**:

```javascript
{
  movie.watched ? "🔄 Mark Unwatched" : "✓ Mark Watched";
}
```

#### **For Status Display**:

```javascript
<p className={movie.watched ? "status-watched" : "status-unwatched"}>
  Status: {movie.watched ? "📺 Already Watched" : "🎬 Not Yet Watched"}
</p>
```

---

### 4. **&& Operator**

The && operator is used for conditional rendering without else clauses:

#### **In MovieCard Component - Watched Badge**:

```javascript
{
  movie.watched && <div className="watched-badge">✓ Watched</div>;
}
```

_Only displays the "Watched" badge if the movie has been watched_

#### **In MovieList Component - List Check**:

```javascript
{movies && movies.length > 0 ? (...) : (...)}
```

#### **In MovieFilter Component - Filter Info**:

```javascript
{
  totalMovies > 0 && (
    <span className="filter-info">
      {filter === "All" && `Total: ${totalMovies}`}
    </span>
  );
}
```

---

### 5. **Mapping using .map()**

The .map() method is used to dynamically render lists of components:

#### **In MovieList Component - Render Movie Cards**:

```javascript
{
  movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      onToggleWatched={onToggleWatched}
      onDeleteMovie={onDeleteMovie}
    />
  ));
}
```

_Dynamically renders a MovieCard for each movie in the array_

#### **In StarRating Component - Render Stars**:

```javascript
{
  [...Array(5)].map((_, index) => (
    <span
      key={index}
      className={
        index < fullStars
          ? "star full"
          : index === fullStars && hasHalfStar
            ? "star half"
            : "star empty"
      }
    >
      ★
    </span>
  ));
}
```

_Dynamically renders 5 stars based on the rating value_

---

## 🎨 User Interface

The application features:

- **Header**: Title and tagline with gradient background
- **Filter Section**: Controls for filtering and sorting with real-time statistics
- **Movie Grid**: Responsive grid layout of movie cards
- **Movie Cards**: Display movie info, ratings, watch status, and action buttons
- **Star Rating**: Visual 5-star rating display
- **Statistics Cards**: Show total movies, watched count, unwatched count, and completion percentage
- **Dark Theme**: Modern dark mode with purple gradient accents

### Responsive Design

- Desktop: Multi-column grid
- Tablet: Adjusted grid layout
- Mobile: Single column layout

---

## 🛠 Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5174/`

---

## 📊 Data Structure

**Movie Object:**

```javascript
{
  id: 1,
  title: 'The Shawshank Redemption',
  rating: 9.3,
  genre: 'Drama',
  year: 1994,
  watched: true
}
```

---

## 🎯 Key Features

✅ **Filter by Status**: View all, watched, or unwatched movies
✅ **Sort Options**: By rating or release year
✅ **Watch Toggle**: Mark movies as watched/unwatched
✅ **Delete Function**: Remove movies from collection
✅ **Live Statistics**: Real-time stats of collection
✅ **Responsive Design**: Works on all device sizes
✅ **Beautiful UI**: Modern dark theme with gradient accents

---

## ✅ All Requirements Met

- ✅ Complete ReactJS project with chosen topic (Movie Review)
- ✅ Divided into separate and reusable components
- ✅ Props used extensively for data passing
- ✅ Ternary operators for conditional rendering
- ✅ && operators for conditional element display
- ✅ .map() used to dynamically render lists
- ✅ Proper file and component organization
- ✅ Simple and clean UI with modern design

---

## 📝 Component Summary

| Component           | Purpose                        | Demonstrates                |
| ------------------- | ------------------------------ | --------------------------- |
| **App.jsx**         | Main application state & logic | Props, useState, filtering  |
| **MovieList.jsx**   | Render movie collection        | .map(), && operator         |
| **MovieCard.jsx**   | Individual movie display       | Props, ternary, && operator |
| **MovieFilter.jsx** | Filtering & stats              | Props, ternary, && operator |
| **StarRating.jsx**  | Star rating visualization      | Props, .map(), ternary      |

---

Created with ❤️ using React & Vite
