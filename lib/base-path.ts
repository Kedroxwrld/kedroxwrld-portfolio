const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") ?? "";

export const basePath = repo ? `/${repo}` : "";
