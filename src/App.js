import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import './App.css';
import { useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import React, { useState } from 'react';


function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data)
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('b10023d4dfdaddf533f9', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind("inserted",  (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)

  return (
    <>
      <div className="app">
        <div className="app-body">
          <Sidebar></Sidebar>
          <Chat messages={messages}></Chat>
        </div>
      </div>
    </>
  );
}

export default App;
