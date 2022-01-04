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

  const { user, repo } = req.query;

  if (typeof user !== "string") {
    res.status(400).json({ error: "Github user must be provided" });
    return;
  }

  if (typeof repo !== "string") {
    res.status(400).json({ error: "Repository must be provided" });
    return;
  }

  const usageCount = await getUsageCount(user, repo);

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
