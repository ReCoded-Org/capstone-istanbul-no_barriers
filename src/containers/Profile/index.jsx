import React from "react";
import PersonalInformation from "../../components/PersonalInformation";
import PersonalBlogPosts from "../../components/PersonalBlogPosts";
import "./index.css";

const Profile = () => {
  return (
    <div className="p-5 profile">
      <PersonalInformation />
      <PersonalBlogPosts />
    </div>
  );
};

export default Profile;
