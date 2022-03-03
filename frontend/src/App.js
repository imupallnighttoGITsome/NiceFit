import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import HomePage from "./components/pages/Home/HomePage";
import NewProfile from "./components/pages/NewProfile/NewProfile";
import ProfileHome from "./components/pages/ProfileHome/ProfileHome";
import OutfitDetail from "./components/pages/OutfitDetail/OutfitDetail";
import NewPost from "./components/pages/NewPost/NewPost";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/nicefit/newprofile" element={<NewProfile />} />
          <Route exact path="/nicefit" element={<HomePage />} />
          <Route path="/nicefit/:id" element={<OutfitDetail />} />
          <Route path="/nicefit/profile" element={<ProfileHome />} />
          <Route path="/nicefit/newpost" element={<NewPost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
