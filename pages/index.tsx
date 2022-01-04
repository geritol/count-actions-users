import Link from "next/link";
import Generate from "../frontend/components/Generate";

function HomePage() {
  return (
    <div>
      <h1>User count badges for your Github Actions</h1>
      <p>Display the user count of your Github Actions with a simple badge</p>
      <h2>Examples</h2>
      <ul>
        <li>
          <a href="https://github.com/geritol/match-tag-to-package-version">
            geritol/match-tag-to-package-version
          </a>{" "}
          <Link href="/geritol/match-tag-to-package-version">
            <a>
              <img
                alt="/geritol/match-tag-to-package-version"
                src="https://img.shields.io/endpoint?url=https%3A%2F%2Factions.geritol.tech%2Fapi%2Fgeritol%2Fmatch-tag-to-package-version2%3Fformat%3Dshields.io"
              />
            </a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/actions/checkout">actions/checkout</a>{" "}
          <Link href="actions/checkout">
            <a>
              <img
                alt="actions/checkout user count"
                src="https://img.shields.io/endpoint?url=https%3A%2F%2Factions.geritol.tech%2Fapi%2Factions%2Fcheckout2%3Fformat%3Dshields.io"
              />
            </a>
          </Link>
        </li>
      </ul>

      <Generate />
    </div>
  );
}

export default HomePage;
