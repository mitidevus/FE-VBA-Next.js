import { RankingParams } from "@/models/ranking";
import { axiosPrivate } from "..";

export const getRankingByLeagueSeasonId = async (leagueSeasonId: number, params?: RankingParams) => {
    try {
        const filter = encodeURIComponent(
            JSON.stringify({ fields: params?.field, include: params?.include, order: params?.order })
        );
        const url = `/rankings/${leagueSeasonId}/leagueSeason?filter=${filter}`;
        console.log(url);
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
