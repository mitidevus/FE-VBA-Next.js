export interface League {
    id: number;
    name: string;
    type: string;
}

export interface LeagueParams {
    id?: boolean;
    name?: boolean;
    type?: boolean;
}
