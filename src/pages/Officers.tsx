import { ReactNode, useState } from "react";

import officersText from "../assets/images/officers_text.png";
import data from "../data/officers.json";

interface Person {
  name: string;
  picture: string;
  position: string;
  quote?: string;
}

interface HeaderProps {
  title?: string;
  description?: string;
}

interface BodyProps {
  people: Person[];
}

interface AccoItemProps {
  header: string;
  children: ReactNode;
}

const Officers = () => {
  let officers = data;

  return (
    <div className="py-5">
      {/* Current officers */}
      <Header title="CURRENT" description="SCHOOL YEAR 2023-2024" />
      <Body people={officers.current} />

      {/* Add some space in between */}
      <div className="py-6"></div>

      {/* Archived Officers */}
      <Header title="ARCHIVED" />

      <AccoItem header="2022-2023">
        <Body people={officers["2022"]} />
      </AccoItem>

      <AccoItem header="2021-2022">
        <Body people={officers["2021"]} />
      </AccoItem>

      <AccoItem header="2020-2021">
        <Body people={officers["2020"]} />
      </AccoItem>

      <AccoItem header="2016-2019">
        <div className="py-5 text-center font-lovelo text-2xl">
          <strong className="text-3xl">404</strong> <br />
          Not Found Yet...
        </div>
      </AccoItem>
    </div>
  );
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="w-full text-center font-lovelo">
      {title && (
        <div className="text-neon mx-auto max-w-5xl text-5xl tracking-widester">
          {title}
        </div>
      )}
      <div className="my-4 bg-[#1D1432] p-5">
        <img src={officersText} className="mx-auto w-[1000px]" />
      </div>
      {description && (
        <div className="mx-auto max-w-5xl text-3xl tracking-widester">
          {description}
        </div>
      )}
    </div>
  );
};

const Body = ({ people }: BodyProps) => {
  let is_dev_environment: boolean =
    window.location.origin.includes("localhost");
  return (
    <div className="mx-auto max-w-[1000px] text-center">
      {people.map((person) => {
        let picture_url: string = is_dev_environment
          ? person.picture
          : person.picture.replace("officers/", "");
        return (
          <Card
            name={person.name}
            picture={picture_url}
            position={person.position}
            quote={person.quote}
          />
        );
      })}
    </div>
  );
};

const Card = ({ name, picture, position, quote }: Person) => {
  return (
    <div className="m-4 inline-block w-full max-w-[300px] overflow-hidden align-top">
      <div className="rounded bg-ter px-2 py-5">
        <img className="w-full rounded border-4 border-black" src={picture} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bebas mb-2 text-2xl font-bold tracking-widester">
          {name}
        </div>
        <div className="font-bebas mb-2 text-xl tracking-widester">
          {position}
        </div>
        {quote && (
          <p className="text-left font-kollektif text-lg font-bold">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
};

const AccoItem = ({ header, children }: AccoItemProps) => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="my-6">
      <div
        onClick={toggle}
        className="text-neon text-center font-lovelo text-3xl tracking-widester
                   hover:cursor-pointer"
      >
        <span className="hover:border-b-4 hover:border-txc">✦ {header}</span>
      </div>
      <div className={`${!open && "hidden"} overflow-hidden`}>{children}</div>
    </div>
  );
};

export default Officers;
