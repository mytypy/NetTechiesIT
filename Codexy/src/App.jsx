import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/registration/register.jsx";
import Profile from "./pages/profile/profile.jsx";
import { UserProvider } from './contexts/UserContext';
import IsAuth from "./contexts/isAuth.jsx";
import Friends from "./pages/friends/friends.jsx";


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="registration/" element={<Register />} />
        <Route path="/" element={
                      <IsAuth>
                        <Profile />
                      </IsAuth>
                        }/>
        <Route path='/friends' element={
                      <IsAuth>
                        <Friends />
                      </IsAuth>
                        }/>
      </Routes>
    </UserProvider>
  );
}

export default App;