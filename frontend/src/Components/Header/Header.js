import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";

function Header() {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };
  const userData = JSON.parse(window.localStorage.getItem("userData"));
  return (
    <div className="flex flex-sb flex-ac">
      <div className="flex">
        <Searchbar />
        <Link to="/recipe/create" style={{ textDecoration: "none" }}>
          <Button icon={"fa fa-plus"} text={"Add Recipe"} />
        </Link>
      </div>
      <div
        className="flex center"
        style={{
          width: "40px",
          height: "40px",
          background: "#fb9300",
          borderRadius: "10px",
        }}
      >
        {userData ? (
          <button
            style={{
              position: "fixed",
              top: "30px",
              right: "18px",
              padding: "10px 20px",
              color: "white",
              marginRight: "15px",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              borderRadius: "20px",
              border: "none",
              background: "#fb9300",
              boxShadow: "1px 2px 5px 0px rgba(0,0,0,0.15)",
            }}
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            style={{
              position: "fixed",
              top: "30px",
              right: "18px",
              padding: "10px 20px",
              color: "white",
              marginRight: "15px",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              borderRadius: "20px",
              border: "none",
              background: "#6250a6",
              boxShadow: "1px 2px 5px 0px rgba(0,0,0,0.15)",
            }}
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
