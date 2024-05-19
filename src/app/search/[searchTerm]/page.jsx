import Results from "@/components/Results";

async function searchPage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_adult=false&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("Movie not found ☹");
  const data = await res.json();

  const results = data.results;

  if (results && results.length === 0)
    return <h1 className="text-center pt-6">No result found ☹</h1>;

  return <div>{results && <Results results={results} />}</div>;
}

export default searchPage;
