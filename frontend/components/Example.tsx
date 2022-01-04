import Link from "next/link";
import { getRepoUrl } from "../urls";
import Shield from "./Shield";

function Example(props: { user: string; repo: string }) {
  const repoPath = `${props.user}/${props.repo}`;
  return (
    <>
      <a href={getRepoUrl(props.user, props.repo)}>{repoPath}</a>{" "}
      <Link href={`/${repoPath}`}>
        <a>
          <Shield {...props} />
        </a>
      </Link>
    </>
  );
}

export default Example;
