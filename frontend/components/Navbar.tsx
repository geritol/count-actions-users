import Link from "next/link";

function Navbar() {
  return (
    <header className="pt-4">
      <div className="max-w-5xl mx-auto flex justify-between content-center">
        <h1 className="text-lg">
          <Link href="/">
            <a className="text-stone-800 font-semibold">GHA users badges</a>
          </Link>
        </h1>

        <div>
          Contribute on{" "}
          <a href="https://github.com/geritol/count-actions-users">Github</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
