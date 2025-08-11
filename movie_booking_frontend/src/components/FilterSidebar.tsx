"use client";
import { useState } from "react";

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Thriller",
  "Animation",
  "Romance",
  "Biography",
];
const languages = ["English", "Spanish", "French", "German", "Mandarin"];

type FilterSidebarProps = {
  onChange?: (filters: {
    location: string;
    genre: string;
    language: string;
    date: string;
  }) => void;
};

/**
 * PUBLIC_INTERFACE
 * FilterSidebar displays filter controls for Location, Genre, Language, and Date.
 * Modern, light style, primary/accent/secondary palette. Responsive for mobile/desktop.
 */
export default function FilterSidebar({ onChange }: FilterSidebarProps) {
  const [location, setLocation] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [date, setDate] = useState("");

  function handleChange(
    field: "location" | "genre" | "language" | "date",
    value: string,
  ) {
    if (field === "location") setLocation(value);
    else if (field === "genre") setGenre(value);
    else if (field === "language") setLanguage(value);
    else if (field === "date") setDate(value);

    if (onChange) {
      onChange({
        location: field === "location" ? value : location,
        genre: field === "genre" ? value : genre,
        language: field === "language" ? value : language,
        date: field === "date" ? value : date,
      });
    }
  }

  return (
    <aside
      className="
        w-full
        md:w-64
        bg-white
        border-r
        border-gray-200
        p-5
        flex-shrink-0
        min-h-[70vh]
        max-h-screen
        transition
        fixed
        md:static
        z-20
        top-[var(--header-height)]
      "
      style={{ background: "var(--color-background)", minWidth: "200px" }}
    >
      <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">
        Filters
      </h3>
      <form className="flex flex-col gap-5">
        {/* Location */}
        <div>
          <label className="block mb-1 text-sm font-medium text-[var(--color-primary)]">
            Location
          </label>
          <select
            className="w-full p-2 rounded border border-gray-100 bg-white focus:ring-2 focus:ring-[var(--color-accent)]"
            value={location}
            onChange={e => handleChange("location", e.target.value)}
          >
            <option value="">Any Location</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        {/* Genre */}
        <div>
          <label className="block mb-1 text-sm font-medium text-[var(--color-primary)]">
            Genre
          </label>
          <select
            className="w-full p-2 rounded border border-gray-100 bg-white focus:ring-2 focus:ring-[var(--color-secondary)]"
            value={genre}
            onChange={e => handleChange("genre", e.target.value)}
          >
            <option value="">Any Genre</option>
            {genres.map(g => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        {/* Language */}
        <div>
          <label className="block mb-1 text-sm font-medium text-[var(--color-primary)]">
            Language
          </label>
          <select
            className="w-full p-2 rounded border border-gray-100 bg-white focus:ring-2 focus:ring-[var(--color-accent)]"
            value={language}
            onChange={e => handleChange("language", e.target.value)}
          >
            <option value="">Any Language</option>
            {languages.map(l => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        {/* Date Picker */}
        <div>
          <label className="block mb-1 text-sm font-medium text-[var(--color-primary)]">
            Date
          </label>
          <input
            type="date"
            className="w-full p-2 rounded border border-gray-100 bg-white focus:ring-2 focus:ring-[var(--color-secondary)]"
            value={date}
            onChange={e => handleChange("date", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </form>
    </aside>
  );
}
