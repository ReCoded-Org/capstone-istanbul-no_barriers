import React from "react";
import { Container } from "react-bootstrap";
import SingleStoryCard from "../../components/SingleStoryCard";
import LoadingPage from "../../components/LoadingPage";

const Stories = () => {
  const [posts, setPosts] = React.useState([]);
  const _URL =
    "https://public-api.wordpress.com/wp/v2/sites/nobarriers650349093.wordpress.com/posts";

  React.useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(_URL);
      const fetchedPosts = await data.json();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <LoadingPage />;
  } else {
    return (
      <Container>
        {posts.map((post, index) => {
          if (index % 2 === 0) {
            return <SingleStoryCard post={post} order="first" />;
          } else {
            return <SingleStoryCard post={post} order="last" />;
          }
        })}
      </Container>
    );
  }
};

export default Stories;
