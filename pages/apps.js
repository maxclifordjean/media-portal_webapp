import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HomeItem from "../components/HomeItem";
import AppItem from "../components/App/AppItem";
import AppItem2 from "../components/App/AppItem2";
import AppItem3 from "../components/App/AppItem3";
import AppItem4 from "../components/App/AppItem4";

const sideScroll = (
    element,
    speed,
    distance,
    step,
) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
};


export default function Apps() {
    const contentWrapper = React.useRef(null);

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
                <div className="bg-white absolute w-[97%] right-0 h-full p-8">
                    <h1 className="text-4xl uppercase">Apps suites & offers</h1>
                    <div className="flex flex-wrap h-auto content-between justify-between mt-8 w-full mb-16">
                        <AppItem title={"CampaignManager"} description={"Gestion complète de campagnes"} logo_path={""} link_url={""} />
                        <AppItem title={"SmartVideo"} description={"Gestion de vidéos intélligentes"} logo_path={""} link_url={""} />
                        <AppItem title={"Networks&YOU"} description={"Réseau d’affaires en publicité et programmes vidéos"} logo_path={""} link_url={""} />
                    </div>
                    <hr />
                    <div className="flex flex-wrap h-auto content-between justify-between mt-8 w-full mt-16 mb-16">
                        <AppItem2 title={"MediaManager"} description={"Media Assets Management"} logo_path={"/MediaMANAGER-logo.png"} link_url={""} />
                        <AppItem2 title={"AdTrade"} description={"Audience planning & acquisition"} logo_path={"/AdTRADE-logo.png"} link_url={""} />
                        <AppItem2 title={"VSync"} description={"2nd screen social video app"} logo_path={"/VSync-logo.png"} link_url={""} />
                        <AppItem3 title={"ScienceLab"} description={"Custom services IT"} logo_path={"/ScienceLAB-logo.png"} link_url={""} />
                    </div>
                    <div className="flex flex-wrap h-auto content-between justify-between mt-8 w-full mb-16">
                        <AppItem4 title={"SmartData"} description={"xxxxxxxxxxxxxxxx"} logo_path={""} link_url={""} />
                        <AppItem4 title={"ShopLive"} description={"aaaaaaaaaaaaaaaaa"} logo_path={""} link_url={""} />
                        <AppItem4 title={"EventController"} description={"dfdsfsdfds"} logo_path={""} link_url={""} />
                        <AppItem4 title={"LowCode CMS"} description={"tretretretrtet"} logo_path={""} link_url={""} />
                    </div>
                    <div className="flex flex-col w-full h-auto">
                        <div className="w-40">
                            <div className="uppercase font-bold">Latest news</div>
                            <hr className="border-solid border-t-[1px] border-gray-500" />
                        </div>
                        <div className="flex grow w-full">
                            <div className="py-12">
                                <Image
                                    width="50"
                                    height="60"
                                    src="/arrow_left.png"
                                    alt="logo"
                                    onClick={() => {
                                        sideScroll(contentWrapper.current, 25, 230, -10);
                                    }}
                                />
                            </div>
                            <div ref={contentWrapper} className="flex overflow-auto overflow-x-scroll">
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                                <div className="flex items-center py-2">
                                    <button
                                        className="flex-shrink-0 bg-white hover:bg-white border-black hover:border-black text-sm border-2 text-black py-1 px-2 uppercase font-bold w-48 h-24 mx-2"
                                        type="submit"
                                    >
                                        ITEM
                                    </button>
                                </div>
                            </div>
                            <div className="py-12"><Image
                                width="50"
                                height="60"
                                src="/arrow_right.png"
                                alt="logo"
                                onClick={() => {
                                    sideScroll(contentWrapper.current, 25, 230, 10);
                                }}
                            /></div>
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
