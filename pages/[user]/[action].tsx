import { useRouter } from "next/router";
import Navbar from "../../frontend/components/Navbar";

function ActionStats() {
  const router = useRouter();
  const { user, action } = router.query;
  return (
    <div>
      <Navbar />
      <main>
        Action stats for {user}/{action}
      </main>
    </div>
  );
}

export default ActionStats;
