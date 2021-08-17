import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/dashboardheader/DashboardHeader";
import WorkspaceCard from "../../components/workspacecard/WorkspaceCard";
import WorkspaceHeader from "../../components/workspaceheader/WorkspaceHeader";
import "./Dashboard.css";
import workspaceServ from "../../service/workspace";
import Loader from "../../components/loader";
import { Alert, Form, Button, Collapse, Col, Input, Avatar, Row } from "antd";
import { useSelector } from "react-redux";
import MiniChat from "./minichat/MiniChat";
import { SendOutlined, TagsOutlined } from "@ant-design/icons";
import { images } from "../../assets/images";

const { Panel } = Collapse;

const Dashboard = () => {
  const [workspace, setWorkspace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.userStore);

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
    <div className="dashboard">
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs={2} sm={4} md={6} lg={20} xl={18} className="workspace">
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
          </Col>
          <Col xs={2} sm={4} md={6} lg={6} xl={6} className="chatBox">
            <div className="search-box">
              <Input placeholder="Search..." />
            </div>
            {data.map((item) => (
              <Collapse ghost={true} collapsible="header">
                <Panel
                  header={<MiniChat item={item} />}
                  key={item.id}
                  showArrow={false}
                >
                  <div className="taecher">Hello how are you doing?</div>
                  <div className="student-bx">
                    <div className="student">I am doing great! Thanks.?</div>
                  </div>
                  <div className="send-msg">
                    <Form
                      preserve={false}
                      className="msg-input"
                      // form={form}
                      name="normal_modal"
                      autoFocus={true}
                      // onFinish={(value) =>
                      //   handleCreateComment({ ...value, postId: item.id })
                      // }
                    >
                      <Form.Item
                        name="message"
                        rules={[
                          { required: true, message: "Message is required!" },
                        ]}
                      >
                        <Input placeholder="Tpye here.." />
                      </Form.Item>

                      <Form.Item className="send-btn">
                        <Button
                          className="dfdfdf"
                          size="small"
                          shape="circle"
                          type="primary"
                          htmlType="submit"
                          icon={<SendOutlined />}
                        />
                      </Form.Item>
                      <div className="attach-icon">
                        <TagsOutlined />
                      </div>
                    </Form>
                  </div>
                </Panel>
              </Collapse>
            ))}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Dashboard;
