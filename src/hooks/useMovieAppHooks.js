import { useState, useDebugValue } from "react";

export function useMovieForm(initialState) {
  const [newMovie, setNewMovie] = useState(initialState);
  useDebugValue(newMovie);
  return [newMovie, setNewMovie];
}

export function useFormVisibility(initialState = false) {
  const [showForm, setShowForm] = useState(initialState);
  useDebugValue(showForm);
  return [showForm, setShowForm];
}

export function useFilterState(initialState = "All") {
  const [filter, setFilter] = useState(initialState);
  useDebugValue(filter);
  return [filter, setFilter];
}

export function useSortState(initialState = "rating") {
  const [sortBy, setSortBy] = useState(initialState);
  useDebugValue(sortBy);
  return [sortBy, setSortBy];
}

export function useSearchState(initialState = "") {
  const [searchTerm, setSearchTerm] = useState(initialState);
  useDebugValue(searchTerm);
  return [searchTerm, setSearchTerm];
}
