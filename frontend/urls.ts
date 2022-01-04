const siteUrl = "https://actions.geritol.tech";

export const getActionUrl = (user: string, repo: string) => {
  return `${siteUrl}/${user}/${repo}`;
};
export const getShieldUrl = (user: string, repo: string) => {
  const apiUrl = `${siteUrl}/api/${user}/${repo}?format=shields.io`;
  return `https://img.shields.io/endpoint?url=${encodeURIComponent(
    apiUrl
  )}&cacheSeconds=3600`;
};
