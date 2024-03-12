/* A footer placed at the very bottom of every page */
import { Link } from "react-router-dom";

import logo from "../assets/images/donat_logo.svg";
import License from "./License";
import { ReactNode } from "react";

/* Represents an anchor element's properties */
interface Hyperlink {
  key: string;
  text: string | ReactNode;
  url?: string;
  call?(): any;
  target?: string;
}

/* Represents a collumn of links in the footer's body */
interface CollumnProps {
  header?: string;
  links: Hyperlink[];
}

/* Props required by the Footer */
interface FooterProps {
  setModal(items: object): any;
  setModalVisible(state: boolean): any;
}

/* Propes required by Emoji */
interface EmojiProps {
  src: string;
}

const Footer = ({ setModal, setModalVisible }: FooterProps) => {
  const LINKS: Hyperlink[] = [
    {
      key: "facebook",
      text: <Emoji src="/src/assets/images/facebook.png" />,
      url: "https://www.facebook.com/OrCaDONAT",
    },
    {
      key: "email",
      text: <Emoji src="/src/assets/images/mail.png" />,
      url: "mailto:donat.stiorca@gmail.com",
    },
    {
      key: "license",
      text: <Emoji src="/src/assets/images/copyright.png" />,
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
      <div className="grid grid-flow-col grid-rows-1 justify-items-stretch bg-[url('/src/assets/images/footer_bg.png')] bg-cover px-3 py-6 font-arial text-4xl text-white no-underline md:pl-24">
        {/* Icons:
         * https://www.iconsdb.com/white-icons/mail-icon.html
         * https://www.iconsdb.com/white-icons/facebook-3-icon.html
         * https://www.iconsdb.com/white-icons/copyright-icon.html
         */}
        <FooterRow links={LINKS} />
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
          <li key={link.key}>
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

const FooterRow = ({ header, links }: CollumnProps) => {
  return (
    <div className="col-span-1 mx-3 basis-2/5">
      {header && <h1 className="pb-4 font-bold">{header}</h1>}
      <div className="p-0 text-xl !leading-10 md:text-2xl">
        {links.map((link) => (
          <Link
            className="relative before:absolute hover:opacity-60 hover:transition-all hover:duration-300"
            to={link.url || "#"}
            onClick={link.call || function () {}}
            target={link.target || "_blank"}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="col-span-1 justify-self-end">
      <img src={logo} className="w-32 min-w-24" />
    </div>
  );
};

const Emoji = ({ src }: EmojiProps) => {
  return <img src={src} className="mr-6 inline w-12" />;
};

export default Footer;
