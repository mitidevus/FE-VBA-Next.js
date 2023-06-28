import axios from "axios";

const apiConfig = {
    baseURL: "http://localhost:4000",
    headers: { "Content-Type": "application/json" },
};

export const requestData = async (url: string, options = {}) => {
    try {
        const response = await fetch(apiConfig.baseURL + url, {
            ...options,
            headers: { ...apiConfig.headers },
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
