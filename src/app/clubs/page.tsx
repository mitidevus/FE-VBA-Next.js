import Image from "next/image";
import Link from "next/link";
import { getAllClubs } from "../api/club";

interface Club {
    id: string;
    VBAId: number;
    image: string;
}

async function Clubs() {
    const clubs: Club[] = await getAllClubs({
        id: true,
        VBAId: true,
        image: true,
    });

    return (
        <div className="w-full h-full">
            <div className="bg-[#fbfbfc] border-b-2 border-gray-100">
                <div className="pt-[30px] pb-[35px] w-full h-full max-w-[1400px] mx-auto">
                    <p className="text-3xl font-semibold">DANH SÁCH CÂU LẠC BỘ</p>
                </div>
            </div>
            <div className="py-[50px] w-full h-full max-w-[1400px] mx-auto flex flex-col justify-center">
                <div className="w-full flex flex-wrap justify-center items-center">
                    {clubs &&
                        clubs.length > 0 &&
                        clubs.map((club) => (
                            <div key={club.id} className="p-8">
                                <Link href={`/clubs/${club.id}`}>
                                    <Image
                                        className="w-full h-full rounded-full mx-auto hover:scale-110 duration-300 hover:shadow-lg hover:shadow-[#040c16]"
                                        src={club.image}
                                        width={350}
                                        height={300}
                                        alt="Club"
                                    />
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Clubs;
