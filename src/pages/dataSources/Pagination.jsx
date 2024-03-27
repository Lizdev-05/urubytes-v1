import React from "react";

export default function DefaultPagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        {/* <li>
          <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
            Previous
          </a>
        </li> */}
        <li aria-current="page">
          <a
            className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 bg-black-color mr-1 text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600 dark:hover:text-white"
            href="#!"
          >
            1
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </a>
        </li>
        <li aria-current="">
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-black dark:hover:bg-neutral-700 mr-1 dark:hover:text-white border border-gray-300"
            href="#!"
          >
            2
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 mr-1 dark:hover:text-white border border-gray-300"
            href="#!"
          >
            3
          </a>
        </li>
        {/* <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white  "
            href="#!"
          >
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
