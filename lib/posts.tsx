import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  description: string;
}

const postsDirectory = path.join(process.cwd(), "blogposts");

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      slug: matterResult.data.slug,
      date: matterResult.data.date,
      author: matterResult.data.author,
      image: matterResult.data.image,
      description: matterResult.data.description,
    };

    return blogPost;
  });

  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    slug: matterResult.data.slug,
    author: matterResult.data.author,
    description: matterResult.data.description,
    image: matterResult.data.image,
    contentHtml,
  };

  return blogPostWithHtml;
};
