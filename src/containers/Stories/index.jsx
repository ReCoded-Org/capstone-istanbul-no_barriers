import React from "react";
import { Container } from "react-bootstrap";
import SingleStoryCard from "../../components/SingleStoryCard";
import LoadingPage from "../../components/LoadingPage";
import i18next from "i18next";

const Stories = () => {
  const ENGLISH_LANGUAGE = "10221";
  const AR_LANGUAGE = "38299";
  const TR_LANGUAGE = "64053";
  const [langRef, setLangRef] = React.useState(ENGLISH_LANGUAGE);
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

  i18next.on("languageChanged", (lng) => {
    let ref = i18next.translator.language;
    if (ref === "en") {
      setLangRef(ENGLISH_LANGUAGE);
    } else if (ref === "ar") {
      setLangRef(AR_LANGUAGE);
    } else if (ref === "tr") {
      setLangRef(TR_LANGUAGE);
    }
  });

  if (!posts) {
    return <LoadingPage />;
  } else {
    return (
      <Container>
        {posts
          .filter((post) => post.tags.toString() === langRef)
          .map((post, index) => {
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
