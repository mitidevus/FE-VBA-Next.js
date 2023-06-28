import { MatchParams } from "@/models/match";
import { axiosPrivate } from "..";

export const getMatchByLeagueSeasonId = async (leagueSeasonId: number, params?: MatchParams) => {
    try {
        const filter = encodeURIComponent(
            JSON.stringify({ fields: params?.field, include: params?.include, order: params?.order })
        );
        const url = `/matches/${leagueSeasonId}/leagueSeason?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
