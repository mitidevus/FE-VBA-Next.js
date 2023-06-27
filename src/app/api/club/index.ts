import { axiosPrivate } from "..";

interface ClubParams {
    id?: boolean;
    VBAId?: boolean;
    name?: boolean;
    logo?: boolean;
    image?: boolean;
    address?: boolean;
    website?: boolean;
    email?: boolean;
    phone?: boolean;
    history?: boolean;
}

export const getAllClubs = async (params?: ClubParams) => {
    try {
        const filter = encodeURIComponent(JSON.stringify({ fields: params }));
        const url = `/clubs?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getClubById = async (id: string, params?: ClubParams) => {
    try {
        const filter = encodeURIComponent(JSON.stringify({ fields: params }));
        const url = `/clubs/${id}?filter=${filter}`;
        const response = await axiosPrivate.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
