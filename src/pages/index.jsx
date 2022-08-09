import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const Index = ({posts}) => {
  return (
    <div className={"mt-5"}>
      {
        posts?.map((post) => {
          return <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
            <div className="card mb-3 pointer-event" style={{maxWidth:'540px'}}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {post.frontMatter.title}
                    </h5>
                    <p className="card-text">
                      {post.frontMatter.description}
                    </p>
                    <p className="card-text"><small className="text-muted">
                      {post.frontMatter.date}
                    </small></p>
                  </div>
                </div>
                <div className="col-md-4 m-auto">
                  <Image src={post.frontMatter.thumbnailUrl} className={"img-fluid mt-1" + "rounded-start"} width={500} height={400} objectFit={"cover"} alt={"thumbnail"}/>
                </div>
              </div>
            </div>
          </Link>
        })
      }
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'), 'utf-8');

  const posts = files.map(fileName => {
    const slug = fileName.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', fileName));
    const {data: frontMatter} = matter(markdownWithMeta);

    return {
      frontMatter,
      slug
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Index;