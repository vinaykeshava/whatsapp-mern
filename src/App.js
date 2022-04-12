import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import './App.css';


function App() {
  return (
    <>
      <div className="app">
        <div className="app-body">
          <Sidebar></Sidebar>
          <Chat></Chat>
        </div>
      </div>
    </>
  );
}

export default App;
