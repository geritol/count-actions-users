import Example from "../frontend/components/Example";
import Generate from "../frontend/components/Generate";

function HomePage() {
  return (
    <div>
      <h1>User count badges for your Github Actions</h1>
      <p>Display the user count of your Github Actions with a simple badge</p>
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
    </div>
  );
}

export default HomePage;
