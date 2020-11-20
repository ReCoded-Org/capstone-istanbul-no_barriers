import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./index.css";

const RenderBlogPost = ({ postInfo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={hover ? "profileBlogPostHover" : "pt-2 profileBlogPost"}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <Image
        src={postInfo.image}
        alt="postInfo"
        fluid
        className={hover ? "imageHover" : "profileBlogPostImage"}
      />
      <div
        className={
          hover
            ? "blogPostInfoHover px-2 pt-2"
            : "profileBlogPostInfo px-2 pt-2"
        }
      >
        <h5>{postInfo.title}</h5>
        <p className="pb-2">{postInfo.date}</p>
      </div>
    </div>
  );
};

export default RenderBlogPost;
