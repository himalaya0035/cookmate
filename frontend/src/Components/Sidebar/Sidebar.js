import React , {useEffect,useState} from "react";
import Brandname from "../Brandname/Brandname";
import Menu from "../Menu/Menu";
import Sitelinks from "../Sitelinks/Sitelinks";
import "./Sidebar.css";
import axios from 'axios'

function Sidebar() {
  const [firstName, setFirstName] = useState('')
  useEffect(() => {
    
    const fetchUser = async () => {
      const userData = JSON.parse(window.localStorage.getItem('userData'))
      let authenticationToken;
      if (userData.hasOwnProperty('token')){
        authenticationToken = userData.token
      }else{
        authenticationToken = userData.access
      }
      const config = {
        headers: { Authorization: `Bearer ${authenticationToken}` }
      };
      const {data} = await axios.get('http://127.0.0.1:8000/api/users/profile/',config)
      console.log(data,data.first_name.split(' ')[0])
      setFirstName(data.first_name.split(' ')[0]) // was not able to set custom claims on jwt token, I don't know what was the error
                                                  // so making an api call to get the user to get the desired user information
    }
    fetchUser();
    return () => {
     
    }
  }, [])

 const userData = JSON.parse(window.localStorage.getItem("userData"));
  return (
    <div className="sidebarWrapper">
      <Brandname />
      <h4
        style={{ marginTop: "40px", color: "#6250a6", letterSpacing: "0.5px" }}
      >
        Hi <span style={{color:"#fb9300"}}> {userData ? firstName : 'Guest '} !</span>
      </h4>
      <Menu />
      <Sitelinks />
    </div>
  );
}

export default Sidebar;
