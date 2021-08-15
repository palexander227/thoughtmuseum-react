import React from "react";
import "./MyclassHeader.css";
import { images } from "../../assets/images";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../loader";

const MyclassHeader = ({ workSpace, workspaceLoading }) => {
  const studentNamesss = new URLSearchParams(useLocation().search).get("user");
  const { user } = useSelector((state) => state.userStore);

  return (
    <>
      {workspaceLoading ? (
        <Loader />
      ) : (
        <div className="myclass-haeding">
          <div>
            <p className="desc">{workSpace?.description}</p>
            <p>
              <span className="name">{user.firstName}</span> with{" "}
              <span className="name">{studentNamesss}</span>
            </p>
          </div>
          <div className="haeding-img">
            <img src={images.homework} alt="homework" />
          </div>
        </div>
      )}
    </>
  );
};

export default MyclassHeader;
