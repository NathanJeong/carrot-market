import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-5">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-slate-400 rounded-md">
          <p>Hi how much are you selling your MacBook?</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-slate-400 rounded-md">
          <p>I want ￦500,000</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-sky-800" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-slate-400 rounded-md">
          <p>r you fucking crazy?</p>
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-10 inset-x-0">
        <div className="flex relative items-center">
          <input
            type="text"
            className="shadow-md rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
          />
          <div className="absolute inset-y-0 flex py-2 pr-2 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 cursor-pointer text-sm text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
