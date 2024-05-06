const Banner = ({ buttontext, handler }) => {
  return (
    <div className="">
      <h1 className="text-3xl flex flex-col justify-start items-start md:flex-row">
        <span className="text-white font-bold">Coffee</span>
        <span className="text-blue-600 font-bold md:ml-1">Connoisseur</span>
      </h1>
      <p className="text-white font-normal text-left">
        Discover your local coffee shops
      </p>
      <button
        className="border border-blue-600 mt-3 p-2 text-white bg-blue-600"
        onClick={handler}
      >
        {buttontext}
      </button>
    </div>
  );
};

export default Banner;
