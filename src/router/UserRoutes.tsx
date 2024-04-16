import { Routes, Route } from "react-router-dom";
import Signup from "../pages/user/Signup";
import Login from "../pages/user/Login";
import OtpVerify from "../pages/user/OtpVerify";
import Home from "../pages/user/Home";
import UserDetails from "../pages/user/UserDetails";
import Profile from "../pages/user/Profile";
import EditProfile from "../pages/user/EditProfile";
import WritePost from "../pages/user/WritePost";
import Post from "../pages/user/Post";
import EditPost from "../pages/user/EditPost";
import ThirdProfile from "../pages/user/ThirdProfile";
import CommunityProfile from "../pages/community/CommunityProfile";
import Message from "../pages/user/Messages";
import CommunitySettings from "../pages/community/CommunitySettings";
import Error from "../pages/common/Error";
import ProtectedRoutes from "../components/common/ProtectedRoutes";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp-verify" element={<OtpVerify />} />
      
      <Route element={<ProtectedRoutes />}>
        <Route path="/*" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user-details/:userId" element={<UserDetails />} />
        <Route path="/edit-profile/*" element={<EditProfile />} />
        <Route path="/write-post/*" element={<WritePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route path="/user/:userId" element={<ThirdProfile />} />
        <Route
          path="/community-profile/:communityId/*"
          element={<CommunityProfile />}
        />
        <Route
          path="/community/write-post/:communityId"
          element={<WritePost />}
        />
        <Route
          path="/community/settings/:communityId/*"
          element={<CommunitySettings />}
        />
        <Route path="/messages" element={<Message />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default UserRoutes;
