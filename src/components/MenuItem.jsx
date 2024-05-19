import Link from "next/link";

function MenuItem({ title, address, Icon, activeLink, handleActiveLink }) {
  return (
    <Link
      href={address}
      className={`hover:text-amber-500 ${
        activeLink === title
          ? "underline underline-offset-8 decoration-amber-500 decoration-4 rounded-lg"
          : ""
      }`}
      onClick={(e) => handleActiveLink(e.target.innerHTML)}
    >
      <Icon className="text-2xl sm:hidden " />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}

export default MenuItem;
