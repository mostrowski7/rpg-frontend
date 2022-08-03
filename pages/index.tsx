const Home = () => {
  return (
    <div className="flex  justify-center items-center w-full h-full bg-canvasBackground">
      <div className="flex justify-center items-center w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 h-2/3 lg:h-1/3 xl:h-1/3 bg-white rounded-2xl shadow-2xl">
        <div className="w-3/4 h-3/4 flex-col">
          <div className="h-2/3">
            <div className="font-bold text-5xl lg:text-5xl"> Lorem </div>
            <div className="text-yellow-400 font-bold text-5xl lg:text-5xl">
              Neque porro quisquam
            </div>
          </div>
          <div className="flex justify-start flex-col lg:flex-row items-center w-full h-1/2 lg:h-1/3">
            <div className="flex rounded-2xl justify-center items-center w-full lg:w-1/3 h-3/4 bg-yellow-400 hover:bg-yellow-300">
              <a
                className="flex justify-center items-center w-full h-full text-black font-bold text-lg"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
            <div className="flex rounded-2xl justify-center items-center  w-full lg:w-1/3 h-3/4 bg-yellow-400 m-5 hover:bg-yellow-300">
              <a
                className="flex justify-center items-center w-full h-full text-black font-bold text-lg"
                href="sign-up"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
