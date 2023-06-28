import { LeagueParams } from "@/models/league";
import { requestData } from "..";

export const getAllLeagues = async (params?: LeagueParams) => {
    const filter = encodeURIComponent(JSON.stringify({ fields: params }));
    const url = `/leagues?filter=${filter}`;
    return requestData(url);
};
