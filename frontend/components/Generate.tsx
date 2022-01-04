import { useState } from "react";

const siteUrl = "https://actions.geritol.tech";

const getActionUrl = (user: string, repo: string) => {
  return `${siteUrl}/${user}/${repo}`;
};
const getShieldUrl = (user: string, repo: string) => {
  const apiUrl = `${siteUrl}/api/${user}/${repo}?format=shields.io`;
  return `https://img.shields.io/endpoint?url=${encodeURIComponent(apiUrl)}`;
};

function Generate() {
  const [value, setValue] = useState("actions/checkout");
  const [isValid, setIsValid] = useState(true);
  const handleChange = (e) => {
    const value = e.target.value.trim();
    setValue(value);
    const isValid = value.split("/").length == 2;
    setIsValid(isValid);
  };

  const [user, repo] = value.split("/");

  return (
    <div>
      <h2>Generate badge</h2>
      <input value={value} onChange={handleChange}></input>
      {!isValid && (
        <div>Please provide Github Action in `owner/repo` format</div>
      )}
      {isValid && (
        <div>
          <a href={getActionUrl(user, repo)}>
            <img alt={`${value} user count`} src={getShieldUrl(user, repo)} />
          </a>

          <h3>Markdown</h3>
          <pre>
            <code>
              [![{value} user count]({getShieldUrl(user, repo)})](
              {getActionUrl(user, repo)})
            </code>
          </pre>

          <h3>HTML</h3>
          <pre>
            <code>
              {`<a href="${getActionUrl(user, repo)}">
  <img
    alt="${value} user count"
    src="${getShieldUrl(user, repo)}"
    />
</a>`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default Generate;
