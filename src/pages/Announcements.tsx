import { Link } from "react-router-dom";

function Announcements() {
  return (
    <>
      <h1 className="text-center font-lovelo text-3xl">Announcements</h1>
      <br />
      <p className="text-center">
        This page is currently a work-in-progress, please refer to our{" "}
        <Link
          to="https://www.facebook.com/OrCaDONAT"
          target="_blank"
          className="underline"
        >
          facebook page
        </Link>{" "}
        instead. Thank you! 🍩
      </p>
    </>
  );
}
export default Announcements;
