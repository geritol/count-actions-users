import { getShieldUrl } from "../urls";

function Shield(props: { user: string; repo: string }) {
  const repoPath = `${props.user}/${props.repo}`;
  return (
    <img
      alt={`${repoPath} user count`}
      src={getShieldUrl(props.user, props.repo)}
    />
  );
}

export default Shield;
