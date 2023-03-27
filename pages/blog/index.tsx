import { TPost } from "../../types/TPost";

type BlogProps = {
  posts: TPost[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <div>
      <h1>BLOG</h1>

      <ul>
        {posts?.map((item, index) => (
          <li key={index}>
            {" "}
            <a href={`/blog/${item?.id}`}>{item?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: TPost[] = await res.json();
  
    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
  };
