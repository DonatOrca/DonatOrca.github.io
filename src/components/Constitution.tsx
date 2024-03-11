import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Constitution = () => {
  return (
    <div
      className="bg-[url('src/assets/images/bylaws_bg.png')] bg-contain bg-right-top bg-repeat
                    p-3
                    font-kollektif text-sm md:text-xl"
    >
      <H1>CONSTITUTION AND BY-LAWS</H1>

      <H2>PREAMBLE</H2>
      <div>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nihil neque, molestiae eius eveniet possimus ex nulla, maiores aliquid
          numquam quaerat culpa? Asperiores, beatae qui! Sequi repellendus
          asperiores laboriosam corporis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo impedit consequatur ratione
          minus ea sequi ipsum aspernatur ex ipsam. Fugiat voluptatum distinctio
          veniam temporibus nisi culpa enim numquam place
        </P>
      </div>

      <H2>ARTICLE I: GENERAL PROVISIONS</H2>
      <div>
        <P>
          <strong>Section 1.</strong> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Praesentium, deleniti illo aspernatur nulla
          exercitationem assumenda nemo sit facere, vero voluptate natus placeat
          at qui excepturi libero quis iusto non! Dignissimos.
        </P>
      </div>

      <H2>ARTICLE II: OFFICIAL NAME AND LOGO </H2>
      <P>
        <strong>Section 1.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>
      <P>
        <strong>Section 2.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>
      <P>
        <strong>Section 3.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>
      <P>
        <strong>Section 4.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>

      <H2>ARTICLE III: DECLARATION OF PRINCIPLES AND OBJECTIVES </H2>
      <P>
        <strong>Section 1.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>
      <P>
        <strong>Section 2.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>

      <H2>ARTICLE IV: MEMBERSHIP</H2>
      <P>
        <strong>Section 1.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium, deleniti illo aspernatur nulla
        exercitationem assumenda nemo sit facere, vero voluptate natus placeat
        at qui excepturi libero quis iusto non! Dignissimos.
      </P>
      <P>
        <strong>Section 2.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Praesentium.
      </P>
      <PList>
        <li>
          <strong>2.1.</strong> lorem ipsum bla batender bak baka shine.
        </li>
        <li>
          <strong>2.2.</strong> lorem ipsum bla batender bak baka shine.
        </li>
        <li>
          <strong>2.3.</strong> lorem ipsum bla batender bak baka shine.
        </li>
      </PList>

      <H2>ARTICLE V: BILL OF RIGHTS</H2>
      <P>
        <strong>Section 1.</strong> Mondaishuu de kitaa Shinkansen gokkou
        Suttokoton suttokoton Suttoko ton ton toon Nyan! Nyanpasu!! (Hai)
      </P>
      <P>
        <strong>Section 2.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
      <P>
        <strong>Section 3.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
      <P>
        <strong>Section 4.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
      <P>
        <strong>Section 5.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
      <P>
        <strong>Section 6.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
      <P>
        <strong>Section 7.</strong> Yabure kabure no yabuisha ga Takeyabu no
        naka e sutta kora sa.
      </P>
    </div>
  );
};

const H1 = ({ children }: Props) => {
  return <h1 className="font-bebas py-5 text-3xl font-medium">{children}</h1>;
};

const H2 = ({ children }: Props) => {
  return <h2 className="font-bebas py-5 text-2xl font-medium">{children}</h2>;
};

const P = ({ children }: Props) => {
  return <p className="max-w-[600px] pl-4">{children}</p>;
};

const PList = ({ children }: Props) => {
  return <ul className="pl-12">{children}</ul>;
};

export default Constitution;
