import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import Inputt from "../components/modules/dashboard/Input";
import DropImg from "../components/modules/dashboard/DropImg";
import MyRichTextEditor from "../components/modules/dashboard/TextEditor";
import Profile from "../components/modules/dashboard/Profile";

export default function Dashboard() {
  const gridcontent = [
    {
      title: "PRESCHOOL/KINDERGARTEN",
      link: "#",
    },
    {
      title: "PRIMARY SCHOOL",
      link: "#",
    },
    {
      title: "MIDDLE SCHOOL",
      link: "#",
    },
    {
      title: "DIPLOMA STUDIES",
      link: "#",
    },
  ];
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          className="bg-dblue"
        >
          {gridcontent.map((data, index) => (
            <a
              href={data.link}
              className="flex flex-col my-xs text-white text-lg font-medium"
            >
              {data.title}
            </a>
          ))}
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="flex justify-between w-full">
              <img
                className="h-[45px] w-[150px]"
                src="/assets/logo.png"
                alt=""
              />

              <Profile />
            </div>
          </div>
        </Header>
      }
    >
      <Inputt />
      <DropImg />
      <MyRichTextEditor />
    </AppShell>
  );
}
