import { LeagueParams } from "@/models/league";
import { axiosPrivate } from "..";

export const getAllLeagues = async (params?: LeagueParams) => {
    try {
        const filter = encodeURIComponent(JSON.stringify({ fields: params }));
        const url = `/leagues?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
