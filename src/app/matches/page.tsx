"use client";

import { League } from "@/models/league";
import { Match } from "@/models/match";
import { Season } from "@/models/season";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllLeagues } from "../api/league";
import { getLeagueSeasonByLeagueIdSeasonId } from "../api/league-season";
import { getMatchByLeagueSeasonId } from "../api/match";
import { getAllSeasons } from "../api/season";

// function Matches() {
//     const [leagues, setLeagues] = useState<League[]>([]);
//     const [seasons, setSeasons] = useState<Season[]>([]);
//     const [matches, setMatches] = useState<Match[]>([]);
//     const [selectedLeague, setSelectedLeague] = useState<number>(0);
//     const [selectedSeason, setSelectedSeason] = useState<number>(0);

//     const router = useRouter();

//     useEffect(() => {
//         const fetchData = async () => {
//             const [leaguesResponse, seasonsResponse] = await Promise.all([getAllLeagues(), getAllSeasons()]);
//             setLeagues(leaguesResponse);
//             setSeasons(seasonsResponse);

//             if (leaguesResponse.length > 0 && seasonsResponse.length > 0) {
//                 setSelectedLeague(leaguesResponse[0].id);
//                 setSelectedSeason(seasonsResponse[0].id);

//                 const leagueSeasonResponse = await getLeagueSeasonByLeagueIdSeasonId(
//                     leaguesResponse[0].id,
//                     seasonsResponse[0].id
//                 );

//                 if (leagueSeasonResponse && leagueSeasonResponse.id) {
//                     const matchesResponse = await getMatchByLeagueSeasonId(leagueSeasonResponse.id, {
//                         include: [
//                             {
//                                 relation: "homeClub",
//                             },
//                             {
//                                 relation: "awayClub",
//                             },
//                             {
//                                 relation: "stadium",
//                             },
//                         ],
//                         order: "date DESC",
//                     });
//                     console.log(matchesResponse);
//                     setMatches(matchesResponse);
//                 } else {
//                     setMatches([]);
//                 }
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="w-full h-full">
//             {leagues && seasons && (
//                 <>
//                     <div className="bg-[#fbfbfc] border-b-2 border-gray-100">
//                         <div className="pt-[30px] pb-[35px] w-full h-full max-w-[1400px] mx-auto">
//                             <div className="flex justify-between items-center">
//                                 <p className="text-3xl font-semibold">GIẢI ĐẤU</p>

//                                 <div className="flex items-center">
//                                     <select
//                                         className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
//                                         onChange={(e) => router.push(`/matches/${e.target.value}/${selectedSeason}`)}
//                                         value={selectedLeague}
//                                     >
//                                         {leagues.map((league) => (
//                                             <option key={league.id} value={league.id}>
//                                                 {league.name}
//                                             </option>
//                                         ))}
//                                     </select>

//                                     <select
//                                         className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
//                                         onChange={(e) => router.push(`/matches/${selectedLeague}/${e.target.value}`)}
//                                         value={selectedSeason}
//                                     >
//                                         {seasons.map((season) => (
//                                             <option key={season.id} value={season.id}>
//                                                 {season.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="py-[50px] w-full h-full max-w-[1200px] mx-auto flex flex-col justify-center">
//                         {matches && matches.length > 0 ? (
//                             matches.map((match) => (
//                                 <div key={match.id} className="border-2 mb-[10px]">
//                                     <div className="border-b-2">
//                                         <div className="flex justify-center text-[10px] py-1 text-[#777]">
//                                             <div className="flex items-center mx-2">
//                                                 <h6 className="font-semibold px-1">Date / Time:</h6>
//                                                 <span>{match.date}</span>
//                                             </div>

//                                             <div className="flex items-center mx-2">
//                                                 <h6 className="font-semibold px-1">Venue:</h6>
//                                                 <span>{match.stadium?.name}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-between px-4">
//                                         <div className="w-5/12 flex items-center justify-between">
//                                             <div className="flex items-center justify-start">
//                                                 <div className="px-2 border-x-2">
//                                                     <Link href={`/clubs/${match.homeClub?.id}`}>
//                                                         <Image
//                                                             src={match.homeClub?.logo}
//                                                             width={80}
//                                                             height={80}
//                                                             alt="Club logo"
//                                                         />
//                                                     </Link>
//                                                 </div>

//                                                 <div className="px-6 py-2 text-xl font-bold">
//                                                     {match.homeClub?.name}
//                                                 </div>
//                                             </div>
//                                             <div className="px-4 py-2 text-4xl font-bold">{match.homeScore}</div>
//                                         </div>
//                                         <div className="w-2/12 flex items-center  justify-center">
//                                             <span>
//                                                 {match.status === "COMPLETE" ? (
//                                                     <span className="text-lg font-semibold text-green-500">
//                                                         FULL TIME
//                                                     </span>
//                                                 ) : (
//                                                     <span className="text-sm font-semibold text-yellow-500">
//                                                         {match.date}
//                                                     </span>
//                                                 )}
//                                             </span>
//                                         </div>
//                                         <div className="w-5/12 flex items-center justify-between">
//                                             <div className="px-4 py-2 text-4xl font-bold">{match.awayScore}</div>

//                                             <div className="flex items-center justify-end">
//                                                 <div className="px-6 py-2 text-xl font-bold">
//                                                     {match.awayClub?.name}
//                                                 </div>

//                                                 <div className="px-2 border-x-2">
//                                                     <Link href={`/clubs/${match.awayClub?.id}`}>
//                                                         <Image
//                                                             src={match.awayClub?.logo}
//                                                             width={80}
//                                                             height={80}
//                                                             alt="Club logo"
//                                                         />
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border-t-2 flex justify-center">
//                                         <Link href={`/matches/${match.id}`}>
//                                             <button className="bg-[#ddd] px-[34px] py-[8px]">
//                                                 {match.status === "COMPLETE" ? (
//                                                     <span className="text-sm font-bold">DETAILED STATISTICS</span>
//                                                 ) : (
//                                                     <span className="text-sm font-bold">PREVIEW</span>
//                                                 )}
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div className="w-full h-screen flex justify-center items-center">
//                                 <p className="text-3xl font-semibold">Không có trận đấu nào</p>
//                             </div>
//                         )}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

function Matches() {
    const [leagues, setLeagues] = useState<League[]>([]);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const [selectedLeague, setSelectedLeague] = useState<number>(0);
    const [selectedSeason, setSelectedSeason] = useState<number>(0);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const [leaguesResponse, seasonsResponse] = await Promise.all([getAllLeagues(), getAllSeasons()]);
            setLeagues(leaguesResponse);
            setSeasons(seasonsResponse);

            if (leaguesResponse.length > 0 && seasonsResponse.length > 0) {
                setSelectedLeague(leaguesResponse[0].id);
                setSelectedSeason(seasonsResponse[0].id);

                const leagueSeasonResponse = await getLeagueSeasonByLeagueIdSeasonId(
                    leaguesResponse[0].id,
                    seasonsResponse[0].id
                );

                if (leagueSeasonResponse && leagueSeasonResponse.id) {
                    const matchesResponse = await getMatchByLeagueSeasonId(leagueSeasonResponse.id, {
                        include: [
                            {
                                relation: "homeClub",
                            },
                            {
                                relation: "awayClub",
                            },
                            {
                                relation: "stadium",
                            },
                        ],
                        order: "date DESC",
                    });
                    setMatches(matchesResponse);
                } else {
                    setMatches([]);
                }
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            {leagues && seasons && (
                <>
                    <div className="bg-[#fbfbfc] border-b-2 border-gray-100">
                        <div className="pt-[30px] pb-[35px] w-full h-full max-w-[1400px] mx-auto">
                            <div className="flex justify-between items-center">
                                <p className="text-3xl font-semibold">GIẢI ĐẤU</p>

                                <div className="flex items-center">
                                    <select
                                        className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
                                        onChange={(e) => router.push(`/matches/${e.target.value}/${selectedSeason}`)}
                                        value={selectedLeague}
                                    >
                                        {leagues.map((league) => (
                                            <option key={league.id} value={league.id}>
                                                {league.name}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
                                        onChange={(e) => router.push(`/matches/${selectedLeague}/${e.target.value}`)}
                                        value={selectedSeason}
                                    >
                                        {seasons.map((season) => (
                                            <option key={season.id} value={season.id}>
                                                {season.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[50px] w-full h-full max-w-[1200px] mx-auto flex flex-col justify-center">
                        {matches && matches.length > 0 ? (
                            matches.map((match) => (
                                <div key={match.id} className="border-2 mb-[10px]">
                                    <div className="border-b-2">
                                        <div className="flex justify-center text-[10px] py-1 text-[#777]">
                                            <div className="flex items-center mx-2">
                                                <h6 className="font-semibold px-1">Date / Time:</h6>
                                                <span>{match.date}</span>
                                            </div>

                                            <div className="flex items-center mx-2">
                                                <h6 className="font-semibold px-1">Venue:</h6>
                                                <span>{match.stadium?.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-4">
                                        <div className="w-5/12 flex items-center justify-between">
                                            <div className="flex items-center justify-start">
                                                <div className="px-2 border-x-2">
                                                    <Link href={`/clubs/${match.homeClub?.id}`}>
                                                        <Image
                                                            src={match.homeClub?.logo}
                                                            width={80}
                                                            height={80}
                                                            alt="Club logo"
                                                        />
                                                    </Link>
                                                </div>

                                                <div className="px-6 py-2 text-xl font-bold">
                                                    {match.homeClub?.name}
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 text-4xl font-bold">{match.homeScore}</div>
                                        </div>
                                        <div className="w-2/12 flex items-center  justify-center">
                                            <span>
                                                {match.status === "COMPLETE" ? (
                                                    <span className="text-lg font-semibold text-green-500">
                                                        FULL TIME
                                                    </span>
                                                ) : (
                                                    <span className="text-sm font-semibold text-yellow-500">
                                                        {match.date}
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                        <div className="w-5/12 flex items-center justify-between">
                                            <div className="px-4 py-2 text-4xl font-bold">{match.awayScore}</div>

                                            <div className="flex items-center justify-end">
                                                <div className="px-6 py-2 text-xl font-bold">
                                                    {match.awayClub?.name}
                                                </div>

                                                <div className="px-2 border-x-2">
                                                    <Link href={`/clubs/${match.awayClub?.id}`}>
                                                        <Image
                                                            src={match.awayClub?.logo}
                                                            width={80}
                                                            height={80}
                                                            alt="Club logo"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t-2 flex justify-center">
                                        <Link href={`/matches/${match.id}`}>
                                            <button className="bg-[#ddd] px-[34px] py-[8px]">
                                                {match.status === "COMPLETE" ? (
                                                    <span className="text-sm font-bold">DETAILED STATISTICS</span>
                                                ) : (
                                                    <span className="text-sm font-bold">PREVIEW</span>
                                                )}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full h-screen flex justify-center items-center">
                                <p className="text-3xl font-semibold">Không có trận đấu nào</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Matches;
