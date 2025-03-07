/** @format */

import githubData from "./github.json";

export function getGithubData() {
  return githubData;
}

export default function handler(req, res) {
  res.status(200).json(githubData);
}
