"use client";

import { getClubById } from "@/app/api/club";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Club } from "@/models/club";

function ClubInfo({ params }: { params: { id: string } }) {
    const [club, setClub] = useState<Club>({} as Club);

    useEffect(() => {
        const fetchClub = async () => {
            const response: Club = await getClubById(params.id);
            setClub(response);
        };
        fetchClub();
    }, [params.id]);

    return (
        <div className="w-full h-full">
            {club && club.id !== "" ? (
                <>
                    <div className="bg-[#fbfbfc] border-b-2 border-gray-100">
                        <div className="pt-[30px] pb-[35px] w-full h-full max-w-[1400px] mx-auto">
                            <p className="text-3xl font-semibold">{`THÔNG TIN CÂU LẠC BỘ ${club.name}`}</p>
                        </div>
                    </div>
                    <div className="py-[50px] w-full h-full max-w-[1400px] mx-auto">
                        <div className="flex">
                            <div className="w-4/12 p-4">
                                <div className="flex justify-center pb-4">
                                    <Image src={club.image} width={250} height={250} alt="Club" />
                                </div>
                                <div className="flex items-center py-1">
                                    <IoLocationOutline size={"20px"} />
                                    <span className="ml-2 text-md font-medium">{club.address}</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <FaGlobeAsia size={"16px"} />
                                    <a className="ml-2 text-md font-medium" href={club.website}>
                                        {club.website}
                                    </a>
                                </div>
                                <div className="flex items-center py-1">
                                    <MdOutlineAlternateEmail size={"16px"} />
                                    <a className="ml-2 text-md font-medium" href={`mailto:${club.email}`}>
                                        {club.email}
                                    </a>
                                </div>
                                <div className="flex items-center py-1">
                                    <BsFillTelephoneFill size={"16px"} />
                                    <a className="ml-2 text-md font-medium" href={`tel:${club.phone}`}>
                                        {club.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="w-8/12 p-4">
                                <h3 className="text-3xl font-bold pt-4 pb-10">LỊCH SỬ</h3>
                                <p className="text-base font-medium">{club.history}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full h-screen flex justify-center items-center">
                    <p className="text-3xl font-semibold">Không tìm thấy câu lạc bộ</p>
                </div>
            )}
        </div>
    );
}

export default ClubInfo;
