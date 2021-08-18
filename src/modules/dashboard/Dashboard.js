import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/dashboardheader/DashboardHeader";
import WorkspaceCard from "../../components/workspacecard/WorkspaceCard";
import WorkspaceHeader from "../../components/workspaceheader/WorkspaceHeader";
import "./Dashboard.css";
import workspaceServ from "../../service/workspace";
import Loader from "../../components/loader";
import { Alert, Col, Input, Drawer, Button, Row } from "antd";
import { useSelector } from "react-redux";
import MiniChat from "../../components/minichat/MiniChat";
import ChatWindow from "../../components/chatbox/ChatWindow";
import MessangerDrawer from "../../components/messangerdrawer/MessangerDrawer";

const Dashboard = () => {
  const [workspace, setWorkspace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.userStore);
  const [show, setShow] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchAllWorkSpace = async () => {
    try {
      const res = await workspaceServ.getAllWorkSpace();
      console.log("workkkkk", res.workspaces);
      setWorkspace(res.workspaces);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllWorkSpace();
  }, []);

  const handleClose = (id)=>{
    console.log('ioioiooi',id)
   const newww = users.filter((item)=>item.key !== id)
   console.log('ookokokkok',newww)
   setUsers([...users,newww])
  }

  const showMessenger = (user) => {
    console.log("zafar", user);

    if (users.length < 2) {
      setUsers([...users, <ChatWindow key={user.id} user={user} handleClose={handleClose} />]);
    } else {
      window.alert("only two messenger allowed");
    }
  };

  console.log(users);

  return (
    <div className="dashboard">
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="workspace container">
          <WorkspaceHeader fetchAllWorkSpace={fetchAllWorkSpace} />

          {workspace?.length === 0 ? (
            <div className="work-message">
              <Alert
                message={
                  user.role === "teacher"
                    ? "No workspace available!"
                    : "No workspace available! Please contact your teacher."
                }
                type="warning"
              />
            </div>
          ) : (
            <div className="workspce-card ">
              {workspace.map((work) => (
                <WorkspaceCard
                  key={work?.workspace?.id}
                  count={work.count}
                  workspace={work.workspace}
                  fetchAllWorkSpace={fetchAllWorkSpace}
                />
              ))}
            </div>
          )}
          <div className="message-icon">
            <MessangerDrawer showMessenger={showMessenger} />
          </div>
          <div className="msg-box">{users}</div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
