import Link from "next/link";
import Image from "next/image";

const AppItem = ({ link_url, logo_path, title, description }) => {
    return (
        <>
            <div className="border-solid border-[1px] border-[#f6f6f6] bg-[#ECECEC]/[.15] p-4 font-bold text-center w-96">
                <div className="text-2xl text-[#9B1313] pb-4">{title}</div>
                <div className="text-xl text-[#C5C5C5]">{description}</div>
            </div>
        </>
    )
}

export default AppItem;