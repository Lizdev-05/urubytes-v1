import React from "react";

export default function Paginate() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li aria-current="page">
          <a
            className="relative block rounded bg-primary-100 px-2 py-0.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100  dark:text-gray-400 dark:hover:bg-neutral-700 mr-1 dark:hover:text-white border border-gray-300"
            href="#!"
          >
            1
          </a>
        </li>
        <li aria-current="">
          <a
            className="relative block rounded bg-transparent px-2 py-0.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-gray-400 dark:hover:bg-neutral-700 mr-1 dark:hover:text-white border border-gray-300"
            href="#!"
          >
            2
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-2 py-0.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-400 dark:hover:bg-neutral-700 mr-1 dark:hover:text-white border border-gray-300"
            href="#!"
          >
            3
          </a>
        </li>
      </ul>
    </nav>
  );
}
