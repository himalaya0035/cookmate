import React from "react";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom'

function HeaderWithBackButton({textHeading,}) {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
        <div className="flex flex-ac">
            <Button
            onClickFunction={backPage}
            text={"Back"}
            icon={"fa fa-arrow-left"}
            />
            <h3>{textHeading}</h3>
        </div>
    </div>
  );
}

export default HeaderWithBackButton;
