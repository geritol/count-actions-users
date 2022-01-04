import { useRouter } from "next/router";
import Navbar from "../../frontend/components/Navbar";
import Shield from "../../frontend/components/Shield";
import { getRepoUrl } from "../../frontend/urls";

function ActionStats() {
  const router = useRouter();
  const { user, repo } = router.query;
  return (
    <div>
      <Navbar />
      <main>
        <h2>
          <a href={getRepoUrl(user, repo)}>
            {user}/{repo}
          </a>
        </h2>
        <Shield user={user} repo={repo} />
      </main>
    </div>
  );
}

export default ActionStats;
