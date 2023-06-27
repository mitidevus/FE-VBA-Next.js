import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../public/vba-logo.svg";

function Navbar() {
    return (
        <div className="w-full h-[92px] flex justify-between items-center px-24 bg-[#000232] text-white">
            <div className="flex items-center">
                <Link href="/">
                    <Image className="rounded" src={Logo} alt="Logo" style={{ width: "50px", cursor: "pointer" }} />
                </Link>
                <div className="ml-4">
                    <h1 className="text-white font-semibold text-lg">GIẢI BÓNG RỔ CHUYÊN NGHIỆP VIỆT NAM</h1>
                </div>
            </div>

            <ul className="flex items-center font-semibold">
                <li>
                    <Link href="/" className="px-4 py-2">
                        TRANG CHỦ
                    </Link>
                </li>
                <li>
                    <Link href="/clubs" className="px-4 py-2">
                        CÂU LẠC BỘ
                    </Link>
                </li>
                <li>
                    <Link href="/matches" className="px-4 py-2">
                        GIẢI ĐẤU
                    </Link>
                </li>
                <li>
                    <Link href="/rankings" className="px-4 py-2">
                        BẢNG XẾP HẠNG
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
