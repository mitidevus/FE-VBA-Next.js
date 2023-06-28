import { MatchParams } from "@/models/match";
import { requestData } from "..";

export const getMatchByLeagueSeasonId = async (leagueSeasonId: number, params?: MatchParams) => {
    const filter = encodeURIComponent(
        JSON.stringify({ fields: params?.field, include: params?.include, order: params?.order })
    );
    const url = `/matches/${leagueSeasonId}/leagueSeason?filter=${filter}`;
    return requestData(url);
};
