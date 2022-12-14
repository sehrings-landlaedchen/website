import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import yaml from "js-yaml"

const pagesDirectory = join(process.cwd(), "content/pages");

export const pages = () => {
  const slugs = fs.readdirSync(pagesDirectory);
  const allPages = slugs
    .filter((page) => page.includes(".md"))
    .map((slug) => getPageBySlug(slug));

  return allPages;
};

export const getSettings = () => {
  const path = join(pagesDirectory, "settings/global.yml");
  const setting = fs.readFileSync(path, "utf8");
  return yaml.load(setting)
};

export const getPageBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  return { slug: realSlug, frontmatter, content };
};
