import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

interface ChildrenProps {
  children: ReactNode;
}

/**
 * Use this variable as values for header texts
 * I initially tried to automate this better but I hate React
 * and I don't have time to learn hooks contexts and shit
 */
const HEADERS: string[] = ["The History of DONAT", "Sparkle", "Stories"];

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
      <P>
        &gt; 🚧 Apologies, but this page is currently a work-in-progress. Now
        don't mind me just testing some long paragraphs and headers. 🚧 &lt;
      </P>
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </P>

      <P>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </P>

      <H>{HEADERS[1]}</H>
      <P>
        Skill: Increases the CRIT DMG of a single ally by 12%—26.4% of Sparkle's
        CRIT DMG plus 27%—48.6%, lasting for 1 turn(s). And at the same time,
        Advances Forward this ally's action by 50%. When Sparkle uses this
        ability on herself, the Action Advance effect will not trigger.
        Ultimate: Recovers 4 Skill Points for the team and grants all allies
        Cipher. When allies with Cipher trigger the DMG Boost effect provided by
        Sparkle's Talent, each stack additionally increases its effect by
        6%—10.8%, lasting for 2 turns. Talent: While Sparkle is on the
        battlefield, additionally increases the max number of Skill Points by 2.
        Whenever an ally consumes 1 Skill Point, all allies' DMG increases by
        3%—6.6%. This effect lasts for 2 turn(s) and can stack up to 3 time(s).
        Technique: Using the Technique grants all allies Misdirect for 20
        seconds. Characters with Misdirect will not be detected by enemies, and
        entering battle in the Misdirect state recovers 3 Skill Point(s) for the
        team. Almanac: When using Basic ATK, additionally regenerates 10 Energy.
        Artificial Flower: The CRIT DMG Boost effect provided by the Skill will
        extend to last until the start of the target's next turn. Nocturne :
        Increases all allies' ATK by 15%. When there are 1/2/3 Quantum allies in
        your team, increases Quantum-Type allies' ATK by 5%/15%/30%.
      </P>

      <P>
        Sparkle is a petite young woman who has black hair that is tied into two
        high pigtails with a red tie. Her hair reaches her hips and has pink
        tips, fringe middle bangs, and two locks in front, with the left lock
        reaching her collarbone and the right lock reaches her shoulder. She has
        fluorescent pink eyes with a light colored butterfly detail under her
        pupils, a small cherry blossom flower tattoo on her right collarbone,
        and tiny black dots under each of her eyes. Additionally, a
        white-and-red Kitsune mask is at an angle on the top of her head, which
        has a pink flower gem on its forehead. Below it, a bell is tied into her
        hair, with another bell hanging off a black neck piece.
      </P>
      <P>
        Sparkle wears a sleeveless and backless short red kimono with crossing
        black spaghetti straps. Cherry blossom flowers and a grey trim decorate
        the kimono along with a black obi belt overlaid with a small golden
        rope, which is tied into a bow. Attached to it is a white spherical
        ornament with a koi fish inside, with there being a golden tassel
        attached under it. On the back of her kimono is a large golden rope bow
        from the back, under which is a black large tied bow. She also wears
        detached short red sleeves with hanging fabric that reaches her knees,
        along with a cherry blossom flower ornament and a tassel hanging from
        it. Two light salmon colored fabrics hang from the back of her kimono,
        reaching her calves, resembling caudal tails. She has a black glove on
        her left hand, while her right hand is adorned with red ropes with a
        small bell attached to it. On her feet, she wears black sandals with
        thin red ankle straps, with small flowers embellishing each and a bell
        hanging off the straps of the left sandal. Additionally, red nail polish
        adorns her fingers and toes.
      </P>

      <H>{HEADERS[2]}</H>
      <P>
        The girl, an abandoned orphan, lived without knowledge of her origins or
        destination until she encountered a passing troupe. From a distance, she
        watched a black-haired lady with a double ponytail, gracefully moving
        across the stage like a fish. Despite donning various masks, they did
        not hinder her laughs and cries during her performance, captivating the
        audience even from afar. The fish leaped in front of her, then dove back
        down, creating ripples in the surface of the water.
      </P>
      <P>
        Gradually, she realized she was watching the performance from beneath
        the stage. Intrigued, she continued to watch the performances for
        countless days, but she remained an audience member, never stepping into
        the spotlight. After one of the shows ended, she went backstage, where
        the black-haired lady handed her a mask. "Can I perform, too?" "Why not?
        If others believe you are 'Sparkle,' then you are. Go, it's time for
        your show."
      </P>
      <P>
        As the curtain, serving as the fourth wall, was drawn, the stage
        remained dimly lit, revealing an unsettling black void. Though wearing a
        mask, she knew the audience could see and hear her. She kept recalling
        Sparkle's performance, imitating her movements, voice, and demeanor.
      </P>
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

export default History;
