import useAuth from "../hooks/useAuthHook";
import img1 from "../assets/siteimg/4.png";
const Dashboard = () => {
  const { data } = useAuth();
  return (
    <>
      <div className="text-center w-full h-screen">
        <h1 className="text-4xl font-bold text-white">{`Welcome to Dashboard4: ${data.user.username.toUpperCase()}`}</h1>
        <div className=" text-white flex flex-col">
          <p className="font-bold text-white text-3xl text-nowrap"></p>
          <p className="fold-bold text-2xl  text-primary">{` Email: ${data.user.email}`}</p>
          <div className="flex justify-center">
            <img src={img1} alt="" className="h-[20rem] w-[20rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
