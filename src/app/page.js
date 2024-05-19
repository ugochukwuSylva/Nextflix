import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// The length of time it should wait before reloading the page for any update
const RELOAD_TIME = 10000;

export default async function Home({ searchParams }) {
  const query = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      query === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: RELOAD_TIME } }
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  const results = data.results;

  return <div>{<Results results={results} />}</div>;
}
