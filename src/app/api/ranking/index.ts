import { RankingParams } from "@/models/ranking";
import { requestData } from "..";

export const getRankingByLeagueSeasonId = async (leagueSeasonId: number, params?: RankingParams) => {
    const filter = encodeURIComponent(
        JSON.stringify({ fields: params?.field, include: params?.include, order: params?.order })
    );
    const url = `/rankings/${leagueSeasonId}/leagueSeason?filter=${filter}`;
    return requestData(url);
};
