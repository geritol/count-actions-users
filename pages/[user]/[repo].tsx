import { useRouter } from "next/router";
import Navbar from "../../frontend/components/Navbar";
import Shield from "../../frontend/components/Shield";
import { getRepoUrl } from "../../frontend/urls";
import Custom404 from "../404";

function ActionStats() {
  const router = useRouter();
  const { user, repo } = router.query;

  if (typeof user !== "string" || typeof repo !== "string") {
    return <Custom404 />;
  }

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
