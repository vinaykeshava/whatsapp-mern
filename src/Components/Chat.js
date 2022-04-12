import { Avatar } from '@mui/material';
import React from 'react'
import './Chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerinfo">
          <h3>Room Name</h3>
          <p>Last seen...</p>
        </div>

        <div className="chat_headerright">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className='chat_message'>
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}</span>
        </p>
        
        <p className='chat_message chat_reciever'>
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}</span>
        </p>

        <p className='chat_message'>
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}</span>
        </p>
      </div>


    <div className="chat_footer">
      <InsertEmoticonIcon />
      <form >
        <input placeholder='Type a message' type="text" />
        <button type="submit">Send a message</button>
      </form>
      <MicIcon />

    </div>

    </div>
  )
}

export default Chat;