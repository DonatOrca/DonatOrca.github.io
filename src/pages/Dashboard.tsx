import { useOutletContext } from "react-router-dom";
import dashboard_img from "../assets/images/dashboard_img.svg";
import Constitution from "../components/Constitution";

function Dashboard() {
  //@ts-ignore
  const [setModal, setModalVisible] = useOutletContext();

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <h1 className="font-lovelo text-6xl text-[#AD4DD1] md:text-8xl lg:text-9xl">
                DONAT
              </h1>
              <span className="text-md font-bebasNueue tracking-widester md:text-2xl">
                DEVELOPERS OF NEXT ADVANCED TECHNOLOGY
              </span>
            </div>
            <br />
            <span className="mx-4 text-justify indent-5 font-kollektif md:mx-2 md:text-xl lg:mx-auto lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              molestias ut aliquid quod quis voluptas quo qui, quasi ab dolorum
              veniam hic placeat, eveniet iste assumenda. Totam quo quas vitae.
            </span>
            <br />
            <div className="flex cursor-pointer justify-center">
              <span
                className="rounded-2xl bg-txc px-5 py-3 font-bebasNueue text-2xl tracking-[.05em] text-bgc md:px-10 md:py-5 md:text-3xl lg:text-4xl"
                onClick={() => {
                  setModal({
                    header: "CONSTITUTION AND BY-LAWS",
                    children: <Constitution />,
                  });
                  setModalVisible(true);
                }}
              >
                CONSTITUTION AND BY-LAWS
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <img src={dashboard_img} id="dashboard-img" alt="dashboard-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
