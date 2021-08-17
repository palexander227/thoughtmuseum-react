import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./MiniChat.css";

const MiniChat = ({ item }) => {
  const [check, setCheck] = useState("");
  return (
    <a activeClassName="dssdsdsd">
      <div className="mini-chat" key={item.id} tabIndex={item.id}>
        <div className="dot"></div>
        <Avatar size={45} icon={<UserOutlined />} />
        <div className="content">
          <p className="name">{item.name}</p>
          <p className="last-msg">You: {item.lastmsg}</p>
        </div>
      </div>
    </a>
  );
};

export default MiniChat;
