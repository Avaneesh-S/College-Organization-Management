import React from "react";

function SearchBar() {
  return (
    <div className="w-full flex-col flex bg-slate-700 shadow-md">
      <div className="p-2 flex items-start relative justify-center">
        <div className="flex h-full items-center absolute left-4 top-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
          <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
          <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
          <svg
            width="24"
            height="24"
            fill="none"
            className="ml-4 sm:flex hidden flex-none text-slate-400 dark:text-slate-500"
          >
            <path
              d="m15 7-5 5 5 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            className="ml-2 sm:flex hidden flex-none text-slate-400 dark:text-slate-500"
          >
            <path
              d="m10 7 5 5-5 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="rounded-md transition-[width] duration-700 font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 sm:px-14 px-6 md:px-24 lg:w-2/3 dark:bg-slate-800 dark:text-slate-500">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          TheBlogPenn.com
        </div>
        <div className="flex justify-end absolute right-4 h-full top-0 items-center">
          <svg
            width="24"
            height="24"
            fill="none"
            className="text-slate-400 dark:text-slate-500"
          >
            <path
              d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
