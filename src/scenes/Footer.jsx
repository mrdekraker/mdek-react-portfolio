import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-52 bg-fourth py-4">
      <div className="w-10/12 mx-auto">
        <div
          // center everything
          className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair text-md text-white">
            &#169;2022 MDeKraker. All Rights Reserved
            <SocialMediaIcons />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
