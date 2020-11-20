import React from "react";
import { Row, Button } from "react-bootstrap";
import RenderBlogPost from "../RenderBlogPost";
import { useTranslation } from "react-i18next";
import "./index.css";
import postBackground from "./profile.jpg";

const PersonalBlogPosts = () => {
  const { t } = useTranslation();
  const recentPosts = [
    { id: "aa", image: postBackground, title: "Title", date: "11/11/11" },
    { id: "bb", image: postBackground, title: "Title", date: "11/11/11" },
    { id: "ba", image: postBackground, title: "Title", date: "11/11/11" },
  ];

  return (
    <div className="m-5 p-5">
      <Row>
        <Button className="personalBlogPostsBtn shadow-none mb-1">
          {t("profile.writePost")}
        </Button>
      </Row>
      <Row>
        <h5>{t("profile.recentPost")}</h5>
      </Row>
      <Row className="justify-content-between">
        {recentPosts.map((post) => (
          <RenderBlogPost key={post.id} postInfo={post} />
        ))}
      </Row>
    </div>
  );
};

export default PersonalBlogPosts;
