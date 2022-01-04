import Link from "next/link";

function Navbar() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>GHA users badges</a>
        </Link>
      </h1>
    </header>
  );
}

export default Navbar;
