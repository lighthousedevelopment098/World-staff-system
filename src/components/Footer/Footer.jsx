import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  MdPhoneIphone,
  MdPhoneEnabled,
  MdMailOutline,
  MdPrint,
  MdLocationOn,
  MdCreate,
} from "react-icons/md";
import PropTypes from "prop-types";

// import Logo from '/Logo/logo.png';

const Footer = () => {
  const Year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#d7e7f7] text-gray-900">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col space-y-4">
            <div className="w-32">
              <Link to="/" onClick={scrollToTop}>
                <img src="/Logo/logo.png" alt="WSS Logo" />
              </Link>
            </div>
            <div className="flex space-x-4">
              <FooterSocialLink
                href="https://www.facebook.com/worldstaffsystem/"
                icon={<FaFacebookF className="text-[#0e87c4]" />}
              />
              <FooterSocialLink
                href="https://www.linkedin.com/in/world-staff-system-79613a301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                icon={<FaLinkedinIn />}
              />
              <FooterSocialLink
                href="https://www.instagram.com/world_staffsystem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                icon={<FaInstagram />}
              />
              <FooterSocialLink
                href="https://twitter.com/staff_system?s=08"
                icon={<FaTwitter className="text-[#0e87c4]" />}
              />
            </div>
          </div>
          <FooterSection
            title="Japan Office"
            items={[
              {
                icon: <MdPhoneIphone className="text-[#0e87c4]" />,
                text: "+81 - 480377009",
                link: "tel:+81480377009",
              },
              {
                icon: <MdPhoneIphone className="text-[#0e87c4]" />,
                text: " +81 - 9088427103",
                link: "tel:+819088427103",
              },
              {
                icon: <MdPhoneEnabled className="text-[#0e87c4]" />,
                text: "+92 - 321 - 7777103",
                link: "tel:+923217777103",
              },
              {
                icon: <MdMailOutline className="text-[#0e87c4]" />,
                text: "info@worldstaffsystem.com",
                link: "mailto:info@worldstaffsystem.com",
              },
              {
                icon: <MdPrint className="text-[#0e87c4]" />,
                text: "+81 - 480377099",
                link: "fax:+81480377099",
              },
              {
                icon: <MdLocationOn />,
                text: "547 - 1 Shimohayami, Kuki City, Saitama 346 - 0022",
                link: "https://www.google.com/maps/place/Shimohayami,+Kuki,+Saitama+346-0022,+Japan/",
              },
            ]}
          />
          <FooterSection
            title="Pakistan Office"
            items={[
              {
                icon: <MdPhoneIphone className="text-[#0e87c4]" />,
                text: "+92 - 312 - 7777103",
                link: "tel:+923127777103",
              },

              {
                icon: <MdPhoneEnabled className="text-[#0e87c4]" />,
                text: "048 - 3258091",
                link: "tel:0483258091",
              },
              {
                icon: <MdMailOutline className="text-[#0e87c4]" />,
                text: "info@worldstaffsystem.com",
                link: "mailto:info@worldstaffsystem.com",
              },
              {
                icon: <MdLocationOn className="text-[#0e87c4]" />,
                text: "186/2-A Satellite Town Sargodha  Near Fouji Fundation Hospital",
                link: "https://www.google.com/maps/place/Tayyab+Hospital/",
              },
            ]}
          />
          <FooterServices />
        </div>
      </div>
      <div className="mt-8 text-white bg-custom">
        <p className="text-center mb-2">
          &copy; {Year} All rights reserved by worldstaffsystem.com.
        </p>
        <p className="text-center">
          Made with Love by <a href="#">Light House Development</a>
        </p>
      </div>
    </footer>
  );
};

const FooterSocialLink = ({ href, icon }) => (
  <a
    className="icon_social text-[#0e87c4]"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);
FooterSocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired, // Assuming icon is a React element (e.g., <Icon />)
};

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col space-y-4">
    <div className="footerContent">
      <h4 className="text-xl text-[#0e87c4]">{title}</h4>
      <ul className="flex flex-col space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a href="" className="text-[#0e87c4]">
              {item.icon}
            </a>

            <a href={item.link} className="hover:underline ml-2">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FooterServices = () => (
  <div className="flex flex-col space-y-4">
    <div className="footer-pad ">
      <h3 className="text-[#0e87c4] text-xl">WSS Services</h3>
      <ul className="flex flex-col space-y-2">
        <li className="flex items-center">
          <MdCreate className="mr-2 text-[#0e87c4]" size={16} />
          <Link
            to="/JapanesLangCourse"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Japanese Language Course in Pakistan
          </Link>
        </li>
        <li className="flex items-center">
          <MdCreate className="mr-2 text-[#0e87c4]" size={16} />
          <Link
            to="/japaneseinjapan"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Study visa for Japan
          </Link>
        </li>
        <li className="flex items-center">
          <MdCreate className="mr-2 text-[#0e87c4]" size={16} />
          <Link
            to="/japaneseinjapan"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Business Manager visa for Japan
          </Link>
        </li>
        <li className="flex items-center">
          <MdCreate className="mr-2 text-[#0e87c4]" size={16} />
          <Link
            to="/titp"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Technical Intern Trainee Program
          </Link>
        </li>
        <li className="flex items-center">
          <MdCreate className="mr-2 text-[#0e87c4]" size={16} />
          <Link
            to="/titp"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Specified Skilled Workers Visa For Japan
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element, // Assuming icon is a React element (e.g., <Icon />)
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
