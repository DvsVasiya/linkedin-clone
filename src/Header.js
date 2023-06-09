import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
// import HomeIcon from "@material-ui/icons/Home";
// import SuperVisiorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
// import ChatIcon from "@material-ui/icons/Chat";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input placeholder="search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />

        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
