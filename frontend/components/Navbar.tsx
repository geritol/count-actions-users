import Link from "next/link";

function Navbar() {
  return (
    <header className="pt-3">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-lg">
          <Link href="/">
            <a className="text-stone-800 font-semibold">GHA users badges</a>
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Navbar;
