import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneRoundedIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineRoundedIcon} text="Messages"></SidebarOption>
            <SidebarOption Icon={BookmarkBorderRoundedIcon} text="Bookmarks"></SidebarOption>
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists"></SidebarOption>
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile"></SidebarOption>
            <SidebarOption Icon={MoreHorizRoundedIcon} text="More"></SidebarOption>

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
