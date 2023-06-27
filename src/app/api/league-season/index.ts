import { axiosPrivate } from "..";

interface LeagueSeasonParams {
    id?: boolean;
    leagueId?: boolean;
    seasonId?: boolean;
}

export const getLeagueSeasonByLeagueIdSeasonId = async (
    leagueId: number,
    seasonId: number,
    params?: LeagueSeasonParams
) => {
    try {
        const filter = encodeURIComponent(JSON.stringify({ fields: params }));
        const url = `/league-seasons/${leagueId}/league/${seasonId}/season?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
