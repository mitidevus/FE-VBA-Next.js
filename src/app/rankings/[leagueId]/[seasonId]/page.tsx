"use client";

import { League } from "@/models/league";
import { Ranking } from "@/models/ranking";
import { Season } from "@/models/season";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllLeagues } from "../../../api/league";
import { getLeagueSeasonByLeagueIdSeasonId } from "../../../api/league-season";
import { getRankingByLeagueSeasonId } from "../../../api/ranking";
import { getAllSeasons } from "../../../api/season";
import Loading from "@/app/loading";

function Rankings({ params }: { params: { leagueId: number; seasonId: number } }) {
    const [leagues, setLeagues] = useState<League[]>([]);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [rankings, setRankings] = useState<Ranking[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const [leaguesResponse, seasonsResponse] = await Promise.all([getAllLeagues(), getAllSeasons()]);
                setLeagues(leaguesResponse);
                setSeasons(seasonsResponse);

                if (leaguesResponse.length > 0 && seasonsResponse.length > 0) {
                    const leagueSeasonResponse = await getLeagueSeasonByLeagueIdSeasonId(
                        params.leagueId,
                        params.seasonId
                    );

                    if (leagueSeasonResponse && leagueSeasonResponse.id) {
                        const rankingsResponse = await getRankingByLeagueSeasonId(leagueSeasonResponse.id, {
                            include: [
                                {
                                    relation: "club",
                                    scope: {
                                        fields: ["id", "name", "logo"],
                                    },
                                },
                            ],
                            order: "position ASC",
                        });
                        setRankings(rankingsResponse);
                    } else {
                        setRankings([]);
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [params.leagueId, params.seasonId]);

    return (
        <div className="w-full h-full">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="bg-[#fbfbfc] border-b-2 border-gray-100">
                        <div className="pt-[30px] pb-[35px] w-full h-full max-w-[1400px] mx-auto">
                            <div className="flex justify-between items-center">
                                <p className="text-3xl font-semibold">BẢNG XẾP HẠNG</p>

                                <div className="flex items-center">
                                    <select
                                        className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
                                        onChange={(e) => router.push(`/rankings/${e.target.value}/${params.seasonId}`)}
                                        value={params.leagueId}
                                    >
                                        {leagues.map((league) => (
                                            <option key={league.id} value={league.id}>
                                                {league.name}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        className="w-[200px] h-[40px] border border-gray-300 rounded-md px-[10px] ml-[10px]"
                                        onChange={(e) => router.push(`/rankings/${params.leagueId}/${e.target.value}`)}
                                        value={params.seasonId}
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
                        {rankings && rankings.length ? (
                            <>
                                <div className="flex justify-center border-x-2 border-t-2 py-3 bg-[#eaeaea]">
                                    <span className="text-lg font-bold">RANKINGS</span>
                                </div>
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-100">
                                            <th className="text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white"></th>
                                            <th className="text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                TEAM
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                GP
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                W
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                L
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                %WON
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                FOR
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                AGST
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-x-white">
                                                GD
                                            </th>
                                            <th className="w-1/12 text-sm font-semibold bg-[#eaeaea] border-[1px] border-t-white border-l-white">
                                                STR
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rankings &&
                                            rankings.length > 0 &&
                                            rankings.map((ranking, index) => (
                                                <tr key={ranking.id} className={index % 2 !== 0 ? "bg-[#fafafa]" : ""}>
                                                    <td className="text-sm border-2">
                                                        <div className="flex justify-center">
                                                            <Link href={`/clubs/${ranking.club?.id}`}>
                                                                <Image
                                                                    src={ranking.club.logo}
                                                                    alt="Club logo"
                                                                    width={80}
                                                                    height={80}
                                                                />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-center border-2">
                                                        <Link href={`/clubs/${ranking.club?.id}`}>
                                                            <span className="font-semibold hover:underline">
                                                                {ranking.club?.name}
                                                            </span>
                                                        </Link>
                                                    </td>
                                                    <td className="text-sm text-center border-2">
                                                        {ranking.gamesPlayed}
                                                    </td>
                                                    <td className="text-sm text-center border-2">{ranking.won}</td>
                                                    <td className="text-sm text-center border-2">{ranking.lost}</td>
                                                    <td className="text-sm text-center border-2">
                                                        {ranking.percentageWon}
                                                    </td>
                                                    <td className="text-sm text-center border-2">
                                                        {ranking.scoredFor}
                                                    </td>
                                                    <td className="text-sm text-center border-2">
                                                        {ranking.scoredAgainst}
                                                    </td>
                                                    <td className="text-sm text-center border-2">
                                                        {ranking.pointsDiff}
                                                    </td>
                                                    <td className="text-sm text-center border-2">{ranking.streak}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </>
                        ) : (
                            <div className="w-full h-screen flex justify-center items-center">
                                <p className="text-3xl font-semibold">Chưa có thông tin</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Rankings;
