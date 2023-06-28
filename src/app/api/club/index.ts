import { ClubParams } from "@/models/club";
import { requestData } from "..";

export const getAllClubs = async (params?: ClubParams) => {
    const filter = encodeURIComponent(JSON.stringify({ fields: params }));
    const url = `/clubs?filter=${filter}`;
    return requestData(url);
};

export const getClubById = async (id: string, params?: ClubParams) => {
    const filter = encodeURIComponent(JSON.stringify({ fields: params }));
    const url = `/clubs/${id}?filter=${filter}`;
    return requestData(url);
};
