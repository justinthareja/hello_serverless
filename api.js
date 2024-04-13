const GITHUB_BASE_URL = "https://api.github.com";
// TODO: get token for all owners of repos
const GITHUB_DEFAULT_TOKEN = process.env.GITHUB_API_TOKEN

module.exports.queryGithub = async (config = {}) => {
  const query = config.query || "{ viewer { login }}";
  const token = config.token || GITHUB_DEFAULT_TOKEN
  
  const url = GITHUB_BASE_URL + "/graphql";
  let res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    throw new Error("This is bad");
  }
  res = await res.json();
  return res
};
