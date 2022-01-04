const siteUrl = "https://actions.geritol.tech";
const githubUrl = "https://github.com";

export const getRepoUrl = (user: string, repo: string) => {
  return `${githubUrl}/${user}/${repo}`;
};

export const getUsersSearchUrl = (user: string, repo: string) => {
  return `${githubUrl}/search?l=YAML&q=${user}%2F${repo}&type=Code`;
};

export const getActionUrl = (user: string, repo: string) => {
  return `${siteUrl}/${user}/${repo}`;
};

export const getShieldUrl = (user: string, repo: string) => {
  const apiUrl = `${siteUrl}/api/${user}/${repo}?format=shields.io`;
  return `https://img.shields.io/endpoint?url=${encodeURIComponent(
    apiUrl
  )}&cacheSeconds=3600`;
};
