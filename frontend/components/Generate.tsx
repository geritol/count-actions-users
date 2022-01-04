import { useState } from "react";
import { getActionUrl, getShieldUrl } from "../urls";

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
  const actionUrl = getActionUrl(user, repo);
  const shieldUrl = getShieldUrl(user, repo);

  return (
    <div>
      <h2>Generate badge</h2>
      <input value={value} onChange={handleChange}></input>
      {!isValid && (
        <div>Please provide Github Action in `owner/repo` format</div>
      )}
      {isValid && (
        <div>
          <a href={actionUrl}>
            <img alt={`${value} user count`} src={shieldUrl} />
          </a>

          <h3>Markdown</h3>
          <pre>
            <code>
              [![{value} user count]({shieldUrl})](
              {actionUrl})
            </code>
          </pre>

          <h3>HTML</h3>
          <pre>
            <code>
              {`<a href="${actionUrl}">
  <img
    alt="${value} user count"
    src="${shieldUrl}"
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
