import NavbarItem from "./NavbarItem";
import { Suspense } from "react";

function Navbar() {
  // Note that the Suspense fragment was used as a wrapper for the NavBarItem because, in production, there was an error on the terminal and a recommended solution was to use Suspense as a wrapper.
  // The below comment is from Nextjs documentation with regards the error on the terminal;

  // Reading search parameters through useSearchParams() without a Suspense boundary will opt the entire page into client-side rendering. This could cause your page to be blank until the client-side JavaScript has loaded.

  return (
    <Suspense>
      <div className="flex  dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg gap-6 justify-center">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}

export default Navbar;
