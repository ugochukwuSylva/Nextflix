import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex  dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg gap-6 justify-center">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
