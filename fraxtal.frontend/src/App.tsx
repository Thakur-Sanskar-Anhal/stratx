import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import { useActiveWalletConnectionStatus } from 'thirdweb/react';
import Login from "./components/Login";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const connectionStatus = useActiveWalletConnectionStatus();

  return (
  <>
    <div className="bg-page min-h-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              connectionStatus == "connecting" ? <>loading...</> : <Login />
            }
          />
          <Route
            path="/home"
            element={
              connectionStatus == "connected" ? (
                <h1>main page</h1>
              ) : (
                <Navigate to="/" />
              )
            }
          />``
        </Routes>
      </Router>
    </div >
  </>
  )
}

export default App
