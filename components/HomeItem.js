import Link from "next/link";
import Image from "next/image";

const HomeItem = ({ link_url, icon_path, title }) => {
    return (
        <>
            <div className="relative w-full h-full">
                <div className="absolute top-[40%] left-[27%]">
                    <div className="">
                        <Link href={link_url} className="basis-1/4">
                            <a>
                                <Image
                                    width="70"
                                    height="70"
                                    src={icon_path}
                                    alt="profile"
                                    className="" />
                            </a>
                        </Link>
                    </div>
                    <div className="uppercase text-[#9B1214] lg:text-4xl font-bold">{title}</div>
                </div>
            </div>
        </>
    )
}

export default HomeItem;