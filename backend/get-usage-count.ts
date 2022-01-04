import { Octokit } from "@octokit/core";

const formatCount = (count: number) => {
  if (count < 10000) {
    return `${count}`;
  } else if (count < 1000000) {
    return `${Math.round(count / 100) / 10}K`;
  } else {
    return `${Math.round(count / 10000) / 100}M`;
  }
};

export const getUsageCount = async (owner: string, repo: string) => {
  const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
  });
  const result = await octokit
    .request("GET /search/code", {
      q: `${owner}/${repo} language:YAML path:.github/workflows`,
      per_page: 1,
    })
    .catch((error) => error);

  if (result instanceof Error) {
    console.log(result);
    return `N/A`;
  }

  return formatCount(result.data.total_count);
};
