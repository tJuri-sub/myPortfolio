import SocialL from "./Header/SocialLinks.jsx";

const Title = () => {
  return (
    <a href="#">
      <h1 className="text-portfolio-secondary text-2xl tracking-wider">
        Juri Turiano
      </h1>
    </a>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Title />
      <SocialL />
    </div>
  );
};

export default Header;
