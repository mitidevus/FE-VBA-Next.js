export interface Club {
    id: string;
    VBAId: number;
    name: string;
    logo: string;
    image: string;
    address: string;
    website: string;
    email: string;
    phone: string;
    history: string;
}

export interface ClubParams {
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
