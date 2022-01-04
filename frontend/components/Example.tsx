import Link from "next/link";
import { getShieldUrl } from "./Generate";

function Example(props: { user: string; repo: string }) {
  const repoPath = `${props.user}/${props.repo}`;
  return (
    <>
      <a href={`https://github.com/${repoPath}`}>{repoPath}</a>{" "}
      <Link href={`/${repoPath}`}>
        <a>
          <img
            alt={`${repoPath} user count`}
            src={getShieldUrl(props.user, props.repo)}
          />
        </a>
      </Link>
    </>
  );
}

export default Example;
