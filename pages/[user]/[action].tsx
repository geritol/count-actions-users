import { useRouter } from "next/router";

function ActionStats() {
  const router = useRouter();
  const { user, action } = router.query;
  return (
    <div>
      Action stats for {user}/{action}
    </div>
  );
}

export default ActionStats;
