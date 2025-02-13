import React from "react";
import styles from "@/styles/components/BlogList.module.css";

const BlogsSection: React.FC = () => {
  return (
    <div className={styles.blogList}>
      <h2>My Blog Posts</h2>
      <ul>
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
      </ul>
    </div>
  );
};

const BlogListItem: React.FC = () => {
  return (
    <li className={styles.blogListItem}>
      <div>
        <p>Title of the Post</p>
        <p>date, tag</p>
      </div>
    </li>
  );
};

export default BlogsSection;
