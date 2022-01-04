import { useRouter } from "next/router";
import Navbar from "../../frontend/components/Navbar";
import Shield from "../../frontend/components/Shield";
import { getActionUrl } from "../../frontend/urls";

function ActionStats() {
  const router = useRouter();
  const { user, repo } = router.query;
  return (
    <div>
      <Navbar />
      <main>
        <h2>
          <a href={getActionUrl(user, repo)}>
            {user}/{repo}
          </a>
        </h2>{" "}
        is <Shield user={user} repo={repo} /> users
      </main>
    </div>
  );
}

export default ActionStats;
