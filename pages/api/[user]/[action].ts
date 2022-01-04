import { NextApiHandler } from "next";
import { getUsageCount } from "../../../backend/get-usage-count";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }

  if (req.query.format !== "shields.io") {
    res.status(400).json({ error: "Unsupported format" });
    return;
  }

  const { user, action } = req.query;

  if (typeof user !== "string") {
    res.status(400).json({ error: "Github user must be provided" });
    return;
  }

  if (typeof action !== "string") {
    res.status(400).json({ error: "Github action must be provided" });
    return;
  }

  const usageCount = await getUsageCount(user, action);

  return res.json({
    schemaVersion: 1,
    label: "used by",
    message: usageCount,
    color: "blue",
    namedLogo: "githubactions",
    logoColor: "#fff",
  });
};

export default handler;
