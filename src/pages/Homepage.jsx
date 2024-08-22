import { Link } from "react-router-dom";
import img1 from "../assets/siteimg/1.png";

const Homepage = () => {
  return (
    <>
      <div className="h-screen w-full mx-auto py-5 md:py-3 flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center space-y-8 md:space-y-3">
          <div className="flex items-center justify-around">
            <img src={img1} alt="ninjaslice" className="h-60" />
            <h1 className="font-semibold text-2xl sm:text-4xl md:text-6xl leading-tight">
              Shorten and Share Links <br />
              <span className="text-steal">Easily and Effectively</span>
            </h1>
          </div>

          <p className="text-primary text-wrap">
            Transform long URLs into short, manageable links with just a few
            clicks. Track analytics, create custom slugs, and make your links
            more shareable and engaging.
          </p>
          <div className="relative flex flex-col items-center space-y-3">
            <button className="bg-steal text-white text-2xl rounded-full px-12 py-3 font-bold hover:bg-green-900">
              <Link to={"/signup"}>Get Started</Link>
            </button>
            <button className="text-blue-500 text-sm font-medium">
              <Link to="/aboutus">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
