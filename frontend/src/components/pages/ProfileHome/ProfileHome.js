import NewProfile from "../NewProfile/NewProfile";
import Dashboard from "../../layout/Dashboard/Dashboard";

const ProfileHome = () => {
  const saveProfileHandler = (userInfo) => {
    const user = {
      ...userInfo,
    };
  };
  return (
    <div>
      <Dashboard />
      <h1>PROFILE</h1>
    </div>
  );
};

export default ProfileHome;
