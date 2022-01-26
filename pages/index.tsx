import type { NextPage } from "next";

const Home: NextPage = () => {
  const onSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white  flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-bold text-2xl">Selet Item</span>
        <div className="flex justify-between my-2 odd:bg-slate-100 even:bg-sky-100">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span>$970</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-sky-500 opacity-50 text-white text-center p-2 rounded-xl w-1/2 mx-auto hover:bg-red-400 hover:opacity-100 active:bg-orange-600">
            Check Out
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-44 landscape:bg-teal-500 portrait:bg-cyan-200">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 justify-between items-end">
            <div className=" flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:scale-110 transition-transform" />
            <div className=" flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span> 🔙 </span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="p-2 rounded-md shadow-2xl">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 shadow-2xl rounded-lg" />
        <div className="flex flex-col">
          <span className="font-medium mb-1 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-sky-800 focus:ring-2 ring-offset-2 ring-sky-800 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-300 focus:ring-2 ring-offset-2 ring-teal-300 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-white rounded-lg py-2 px-8 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-2 bg-sky-900 p-5 focus-within:bg-slate-700 transition-colors">
        <input
          type="text"
          placeholder="Username"
          minLength={6}
          required
          className="p-1 peer invalid:border-2 border-red-700"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          Username is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Username is Valid
        </span>
        <input
          type="password"
          placeholder="Password"
          required
          className="p-1 required:border-2 border-red-700 valid:border-0"
        />
        <input type="submit" value="Submit" className="p-1 bg-white" />
      </form>
      <details className="select-none open:text-white open:bg-indigo-300">
        <summary className="cursor-pointer">What is my favorite food?</summary>
        <span>닭갈비</span>
      </details>
      <input
        type="file"
        className="file:cursor-wait file:hover:bg-white file:hover:text-purple-400 file:hover:border-purple-400 file:hover:border transition-colors file:border-0 file:rounded-lg file:bg-indigo-300 file:text-white file:px-3"
      />
    </div>
  );
};

export default Home;
