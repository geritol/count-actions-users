import { useCallback, useState } from "react";
import { getActionUrl, getShieldUrl } from "../urls";
import debounce from "lodash.debounce";

function Generate() {
  const [value, setValue] = useState("actions/checkout");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const validate = useCallback(
    debounce((value) => {
      const isValid = value.split("/").length == 2;
      setIsValid(isValid);
      setIsLoading(false);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setIsLoading(true);
    setValue(value);
    validate(value);
  };

  const [user, repo] = value.split("/");
  const actionUrl = getActionUrl(user, repo);
  const shieldUrl = getShieldUrl(user, repo);

  return (
    <div>
      <h2>Generate badge</h2>
      <input value={value} onChange={handleChange}></input>
      {!isValid && !isLoading && (
        <div>Please provide Github Action in `owner/repo` format</div>
      )}
      {isLoading && <div>Loading...</div>}
      {isValid && !isLoading && (
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
