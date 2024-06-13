import "boxicons";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <a href="mailto:tjurisalvador@gmail.com">
        <box-icon type="logo" name="gmail" color="#ffffff"></box-icon>
      </a>
      <a href="https://github.com/tJuri-sub" target="_blank">
        <box-icon type="logo" name="github" color="#ffffff"></box-icon>
      </a>
      <a href="https://www.instagram.com/justjurii/" target="_blank">
        <box-icon name="instagram-alt" type="logo" color="#ffffff"></box-icon>
      </a>
      <a href="https://www.facebook.com/tjurisalvador/" target="_blank">
        <box-icon name="facebook-circle" type="logo" color="#ffffff"></box-icon>
      </a>
    </div>
  );
};

export default SocialLinks;
