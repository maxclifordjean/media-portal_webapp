import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HomeItem from "../components/HomeItem";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cliff-Technologies</title>
        <meta
          name="description"
          content="We offer Custom development, Media IT integrations, Intelligent Videos, digital advertising solutions to the global industry including Media & Entertainment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background h-screen relative">
        <div className="bg-white absolute w-[97%] right-0 h-full">
          <div class="flex items-center text-center h-1/2">
            <div className="bg-[#FBE382] w-full border-2 border-white h-full">
              <HomeItem link_url={"http://localhost:3000"} icon_path={"/add_icon.png"} title={"new project"} />
            </div>
            <div className="bg-[#ECECEC]/.70 w-full border-2 border-white h-full">
              <HomeItem link_url={"http://localhost:3000"} icon_path={"/list_icon.png"} title={"my projects (5)"} />
            </div>
          </div>
          <div class="flex items-center text-center h-1/2">
            <div className="bg-[#ECECEC] w-full border-2 border-white h-full border-solid bg-gradient-to-b from-[#CECECE] to-white">
              <HomeItem link_url={"http://localhost:3000"} icon_path={"/mail_icon.png"} title={"my messages"} />
            </div>
            <div className="bg-[#FBE382] w-full border-2 border-white h-full border-solid bg-gradient-to-b from-[#F9E698] to-white">
              <HomeItem link_url={"http://localhost:3000"} icon_path={"/apps_icon.png"} title={"apps suites & offers"} />
            </div>
            <div className="bg-[#FBE382] w-full border-2 border-white h-full border-solid bg-gradient-to-b from-[#F9E698] to-white">
              <HomeItem link_url={"http://localhost:3000"} icon_path={"/group_icon.png"} title={"networks&you"} />
            </div>
          </div>
        </div>
        <div className="absolute w-[3%] h-full">
          <Navbar />
        </div>
      </div>
    </div>

  );
}
