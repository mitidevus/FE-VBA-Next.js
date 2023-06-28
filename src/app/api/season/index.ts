import { SeasonParams } from "@/models/season";
import { requestData } from "..";

export const getAllSeasons = async (params?: SeasonParams) => {
    const filter = encodeURIComponent(JSON.stringify({ fields: params }));
    const url = `/seasons?filter=${filter}`;
    return requestData(url);
};
