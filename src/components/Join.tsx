const Join = () => {
  return (
    <div className="min-h-screen w-full bg-lime-400 mt-6 rounded-2xl flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
        <h1 className="text-black font-bold text-[60px] sm:text-[100px] md:text-[150px] lg:text-[400px] leading-none">
          Join Us
        </h1>
        <p className="text-black text-lg sm:text-xl">
          For product support or questions, please join our Discord and ask <br />
          questions in our #support chatrooms.
        </p>
        <div className="text-black text-lg sm:text-xl space-y-4">
          <p>
            <strong>For Billing Support:</strong> <br />
            billing@midjourney.com
          </p>
          <p>
            <strong>For Journalist Support:</strong> <br />
            journalist@midjourney.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
