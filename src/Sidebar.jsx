import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />

        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 information center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StoreFrontIcon} title="Market Place" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      </div>
    </>
  );
};

export default Sidebar;
