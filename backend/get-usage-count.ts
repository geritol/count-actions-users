import { Octokit } from "@octokit/core";

const getAccessToken = () => {
  // Github API rate limits searches at 30 per minute
  // we use multiple access tokens and always use a random one
  const accessTokens = JSON.parse(process.env.ACCESS_TOKENS);
  return accessTokens[Math.floor(Math.random() * accessTokens.length)];
};

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
    auth: getAccessToken(),
  });
  const result = await octokit
    .request("GET /search/code", {
      q: `${owner}/${repo} language:YAML`,
      per_page: 1,
    })
    .catch((error) => error);

  if (result instanceof Error) {
    console.log(result);
    return `N/A`;
  }

  return formatCount(result.data.total_count);
};
