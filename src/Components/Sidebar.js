import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import { DonutLarge } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOffOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar scr="https://gravatar.com/avatar/f2587f265298a310a6ace185955cace7?s=400&d=robohash&r=pg"></Avatar>
                <div className="sidebar_headerright">
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>

                </div>
                </div>
                <div className="sidebar_search">
                    <div className="sidebar_searchContainer">
                        <SearchOffOutlined>
                        </SearchOffOutlined> 
                        <input type="text"  placeholder='Search or start new chat '/>
                    </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar