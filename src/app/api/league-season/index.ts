import { LeagueSeasonParams } from "@/models/league-season";
import { requestData } from "..";

export const getLeagueSeasonByLeagueIdSeasonId = async (
    leagueId: number,
    seasonId: number,
    params?: LeagueSeasonParams
) => {
    const filter = encodeURIComponent(JSON.stringify({ fields: params }));
    const url = `/league-seasons/${leagueId}/league/${seasonId}/season?filter=${filter}`;
    return requestData(url);
};
