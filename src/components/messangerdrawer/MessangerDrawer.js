import React, { useState } from "react";
import "./MessangerDrawer.css";
import { Drawer, Button, Input } from "antd";
import MiniChat from "../minichat/MiniChat";
import { images } from "../../assets/images";

const MessangerDrawer = ({ showMessenger }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const data = [
    {
      id: 1,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 2,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 3,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 4,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 5,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 6,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 7,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 8,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 9,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
    {
      id: 10,
      name: "Britt Brooke",
      lastmsg: "Thanks for helping me",
    },
  ];

  return (
    <div>
      <div className="hghghg">
        <img src={images.msgicon} alt="msgicon" onClick={showDrawer} />
      </div>

      <Drawer
        width={350}
        mask={false}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        closable={true}
      >
        <div className="search-box">
          <Input placeholder="Search..." />
        </div>
        {data.map((item) => (
          <MiniChat showMessenger={showMessenger} item={item} />
        ))}
      </Drawer>
    </div>
  );
};

export default MessangerDrawer;
