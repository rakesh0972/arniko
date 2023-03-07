import React from "react";
import { Button, Grid } from "@mantine/core";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between px-3">
        <img
          className="h-[84px] w-[244px]"
          src="/assets/arnikowhite 1.png"
          alt=""
        />

        <div className="nav__buttons flex justify-around items-center ">
          <Button
            variant="outline"
            radius="xl"
            size="md"
            className="mr-2 font-semibold text-base text-white border-white hidden lg:inline-block"
          >
            My arniko
          </Button>
          <Button
            variant="outline"
            radius="xl"
            size="md"
            className="mr-2 font-pop font-semibold text-base text-white border-white hidden lg:inline-block "
          >
            Search
          </Button>
          <Button
            variant="outline"
            radius="xl"
            size="md"
            className="font-pop font-semibold text-base text-white border-white  "
          >
            Menu
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
