import React from 'react';
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Highlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'), 'utf-8');

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.mdx', '')
    }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.mdx`), 'utf-8');

  const {data: frontMatter, content} = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const SyntaxHighlighter = props => (<Highlighter style={hybrid} language={"javascript"} {...props} />)

const components = {SyntaxHighlighter}

const PostBySlug = ({frontMatter, mdxSource}) => {
  return (
    <div className={"mt-4"}>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default PostBySlug;