import Name from "./Landing/Name.jsx";
import Profile from "./Landing/Profile.jsx";
import Resume from "./Landing/Resume.jsx";

const Land = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Profile />
      <Name />
      <Resume />
    </div>
  );
};

export default Land;
