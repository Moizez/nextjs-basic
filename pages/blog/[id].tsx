import { ParsedUrlQuery } from "querystring";
import { TPost } from "../../types/TPost";
import { GetServerSideProps } from "next";

type BlogItemProps = {
  post: TPost;
};

const BlogItem = ({ post }: BlogItemProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default BlogItem;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await res.json();

  const paths = posts?.map((item) => ({
    params: {
      id: String(item.id),
    },
  }));

  return { paths, fallback: 'blocking' };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await req.json();
  return {
    props: {
      post,
    },
  };
};
