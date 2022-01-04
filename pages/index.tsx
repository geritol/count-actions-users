import Example from "../frontend/components/Example";
import Generate from "../frontend/components/Generate";
import Navbar from "../frontend/components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>User count badges for your Github Actions</h1>
        <p className="text-lg">
          Display the user count of your Github Actions with a simple badge
        </p>
        <h2>Examples</h2>
        <ul>
          <li>
            <Example user="geritol" repo="match-tag-to-package-version" />
          </li>
          <li>
            <Example user="actions" repo="checkout" />
          </li>
        </ul>

        <Generate />
      </main>
    </div>
  );
}

export default HomePage;
