import { SeasonParams } from "@/models/season";
import { axiosPrivate } from "..";

export const getAllSeasons = async (params?: SeasonParams) => {
    try {
        const filter = encodeURIComponent(JSON.stringify({ fields: params }));
        const url = `/seasons?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
