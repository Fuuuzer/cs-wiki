import React from "react";

const Header = () => {
  return (
    <>
      <header className=" text-black bg-amber-500">
        <nav className="flex place-content-between items-center max-w-[1200px] m-auto max-md:flex-col px-6 py-4">
          <div>
            <img
              className="block w-56 cursor-pointer"
              src="/Counter-Strike_2_logo.svg"
              alt=""
            />
          </div>
          <ul className="flex gap-5 font-semibold">
            <li>
              <a
                className="text-lg rounded py-2 px-4 block hover:bg-amber-500 hover:text-white transition"
                href=""
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-lg py-2 px-4 block rounded hover:bg-amber-500 hover:text-white transition"
                href=""
              >
                Armas
              </a>
            </li>
            <li>
              <a
                className=" text-lg py-2 px-4  block rounded hover:bg-amber-500 transition hover:text-white "
                href=""
              >
                Granadas
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
