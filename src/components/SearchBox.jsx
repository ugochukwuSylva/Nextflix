"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form
      className="flex justify-between max-w-6xl mx-auto px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 placeholder-gray-500 rounded-md outline-none flex-1 bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
