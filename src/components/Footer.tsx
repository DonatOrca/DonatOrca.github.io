/* A footer placed at the very bottom of every page */
import { Link } from "react-router-dom";

import logo from "../assets/images/donat_logo.svg";
import License from "./License";

/* Represents an anchor element's properties */
interface Hyperlink {
  text: string;
  url?: string;
  call?(): any;
  target?: string;
}

/* Represents a collumn of links in the footer's body */
interface CollumnProps {
  header: string;
  links: Hyperlink[];
}

/* Props required by the Footer */
interface FooterProps {
  setModal(items: object): any;
  setModalVisible(state: boolean): any;
}

const Footer = ({ setModal, setModalVisible }: FooterProps) => {
  const CONTACTS: Hyperlink[] = [
    { text: "Facebook Page", url: "https://www.facebook.com/OrCaDONAT" },
    {
      text: "Email",
      url: "mailto:donat.stiorca@gmail.com",
    },
    { text: "Dashboard", url: "/Donat/", target: "_self" },
  ];
  const COPYRIGHT: Hyperlink[] = [
    {
      text: "Website's License",
      call: () => {
        setModal({
          header: "GNU GENERAL PUBLIC LICENSE",
          children: <License />,
        });
        setModalVisible(true);
      },
      target: "_self",
    },
  ];

  return (
    <footer className="mt-10 overflow-hidden">
      <div className="bg-txc transition-all duration-300">
        <h1 className="m-0 px-12 py-3 font-bebasNueue text-3xl tracking-widestest text-bgc  md:text-4xl">
          DONAT
        </h1>
      </div>
      <div className="flex flex-row bg-[url('src/assets/images/footer_img.svg')] bg-cover px-3 py-6 font-arial text-4xl text-white no-underline md:pl-24">
        <FooterCollumn header="Contacts" links={CONTACTS} />
        <FooterCollumn header="Copyright" links={COPYRIGHT} />
        <Logo />
      </div>
    </footer>
  );
};

const FooterCollumn = ({ header, links }: CollumnProps) => {
  return (
    <div className="mx-3 basis-2/5">
      <h1 className="pb-4 font-bold">{header}</h1>
      <ul className="p-0 text-xl !leading-10 md:text-2xl">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              className="relative before:absolute
                       before:bottom-[-2px] before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-out before:content-[''] hover:before:w-full
                       "
              to={link.url || "#"}
              onClick={link.call || function () {}}
              target={link.target || "_blank"}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="relative basis-1/5">
      <img src={logo} className="absolute bottom-0 right-0 w-32 min-w-24" />
    </div>
  );
};

export default Footer;
