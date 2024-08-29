import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

interface ChildrenProps {
  children: ReactNode;
}

interface ImageProps {
  src: string;
}

/**
 * Use this variable as values for header texts
 * I initially tried to automate this better but I hate React
 * and I don't have time to learn hooks contexts and shit
 */
const HEADERS: string[] = [
  "The History of DONAT",
  "Sir Bes",
  "DONAT-Bytes (2016-2017)",
];

function History() {
  return (
    <div className="overflow-auto">
      <Sidebar />
      <Contents />
    </div>
  );
}

/* Document format of the main content */
function Contents() {
  return (
    <div
      className="
      h-screen overflow-scroll overflow-x-hidden rounded
      p-6 no-scrollbar md:p-12
    "
    >
      <H>{HEADERS[0]}</H>
      <H>from Sir Leandro's Eyes</H>
      <P>
        DONAT was formed during 2016-2017 when we were grade 11 students. As far
        as I know, it was formed in order to help the MAWD students (Formerly
        MAWP) with their researches and their overall holistic development and
        academics. The very first adviser of DONAT was sir Aries Jayvee Ganzon,
        who now works as the lead data analyst of Johnson and Johnson.
      </P>

      <P>
        Along with the other ICT Faculty teachers during that time, they were
        providing us with multiple different activities that will help guide and
        serve as a way to form and create an organization that will develop
        students into future student leaders as well as proper industry
        professionals.
      </P>

      <P>
        The very first president of DONAT came from my section when we were
        students, his name was John Nelzon Chan, He now works for STI's head
        office as one of the people who creates the pubmats for the whole STI
        network to see. The VP during that time was Era Mae Rutaquio, also one
        of my classmates and the girlfriend of the President. She also now works
        alongside Nelzon for STI's Head office.
      </P>

      <P>
        The first auditor was my classmate as well, Leomhel Atienza. The
        Secretary, Blessy Sibalon also used to be my classmate. Most, if not,
        all of the officers of DONAT during the first year came from my section.
        We were regarded as the top performing section during our time as most
        of the student leaders as well as top performing students came from our
        section as well.
      </P>

      <H>{HEADERS[1]}</H>
      <P>
        During the conception of DONAT, there came a time where grade 12
        students were introduced to the subject entitled Triple I and Practical
        Research. As the pioneers of K-12, the grade 12 students of our time
        were the first to experience a "new curriculum", therefore, most of the
        contents of the research-type subjects were very new and used to be
        templated from the college curriculum.
      </P>

      <P>
        Sir AJ Ganzon, always wanted his students to become the BEST, and due to
        the fact that sir AJ always claimed that he wanted the students to
        always do their best and perform to the best of their abilities, he was
        given the nickname "SIR BES". He was a very approachable teacher, he
        often challenged us with coding practices as well as development
        practices that were expected for college students. He also often used
        words that would provoke us in a way that would affect us positively.
        During the time that we were actively performing our research subjects,
        he saw and noticed that most of the students were struggling with their
        research. He then introduced a new system wherein the very first
        collaboration of a Tertiary organization and a SHS organization was
        formed.
      </P>

      <H>{HEADERS[2]}</H>
      <P>
        The previous IT organization for tertiary students named "Bytes" had a
        collaboration with DONAT and were called the "DONAT-Bytes". This
        collaboration aims to provide the struggling Grade 12 students with
        "Mentors". These mentors came from the tertiary students who willingly
        and voluntarily chose to help the grade 12 students with their
        researches.
      </P>

      <P>
        Some of the notable mentors and members of DONAT-Bytes whom most of the
        students are familiar with would be Sir Earlson Pasco, a current
        Tertiary ICT Faculty and Ma'am Dianne Gongora, a previous DONAT Adviser.
      </P>

      <P>
        Speaking from my personal experience, Sir AJ always used to tell me
        things like "Is this the best you can do?". Even if I've poured all of
        the effort and time that I had into creating a certain project and/or
        system. He would always provoke me by saying those types of words. Yes,
        sometimes it did hurt and it would dishearten me, however, I used the
        frustration as a fuel to do better than what I currently am capable of.
        This lead to me and my group being nominated and winning the "Best
        lifestyle mobile application" of the very first SHS Expo.
      </P>

      <P>
        For reference, Here's the picture of the previous members of DONAT along
        with Sir Bes in the middle. This is the very last GA of sir AJ as an
        adviser as well as our very last GA as SHS students.
      </P>

      <Image src="history/donat_last_ga_2016.png" />

      <P>
        Here's another picture, some of the officers and members, from left to
        right:
        <List>
          <li>Blessy Sibalon - Secretary</li>
          <li>Nelzon Chan - President</li>
          <li>Era Rutaquio - VP </li>
          <li>Ako - wala lang trip lang</li>
          <li>Denver Garcia - Member Dean</li>
          <li>Chulvo - Member</li>
          <li>Christine Marcelo - Treasurer </li>
          <li>Norhaina Alon - Journalist/Socmed Manager</li>
        </List>
      </P>

      <Image src="history/donat_officers_2016.png" />
    </div>
  );
}

/* A list of headers on the side that are links to the header's locations in the page */
function Sidebar() {
  return (
    <aside
      className="p-5 font-kollektif
                 md:float-left md:h-screen"
    >
      <ul>
        {HEADERS.map((header: string) => {
          let id: string = simplify_header(header);
          return (
            <li key={id} className="my-6 text-lg">
              <a href={`#${id}`}>{header}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

/* A stylized h1 element */
function H({ children }: ChildrenProps) {
  var child_text: string = ReactDOMServer.renderToString(children);
  var id: string = simplify_header(child_text);

  return (
    <h1 id={id} className="py-3 font-lovelo text-3xl">
      {children}
    </h1>
  );
}

/* Converts a text into #id style */
function simplify_header(header: string): string {
  header = header.toLowerCase();
  header = header.replaceAll(" ", "-");
  return header;
}

/* A stylized paragraph element */
function P({ children }: ChildrenProps) {
  return <p className="py-3 indent-12 font-kollektif text-lg">{children}</p>;
}

function Image({ src }: ImageProps) {
  return <img className="rounded" src={src} />;
}

function List({ children }: ChildrenProps) {
  return <ul className="py-3 indent-16 font-kollektif text-lg">{children}</ul>;
}

export default History;
