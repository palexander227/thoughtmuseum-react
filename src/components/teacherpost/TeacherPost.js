import React from "react";
import "./TeacherPost.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const TeacherPost = ({ item, userName }) => {
  return (
    <div className="teacher-post">
      <div className="user-icon">
        <Avatar size={40} icon={<UserOutlined />} />
      </div>
      <div>
        <p>
          {userName.firstName} {userName.lastName}
        </p>
        <small>Aug 15</small>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default TeacherPost;
