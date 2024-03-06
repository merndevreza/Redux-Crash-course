import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading posts ...</p>;
  }
  if (!isLoading && isError) {
    return <p>{error}</p>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    return <p>No posts found!</p>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    return (
      <ul className="container mx-auto grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border-2 border-green-300 bg-green-50 rounded p-3 text-center space-y-3">
            <h4 className="text-xl text-red-500">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Posts;
