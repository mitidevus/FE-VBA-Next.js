import { Club } from "./club";
import { Stadium } from "./stadium";

export interface Match {
    id: string;
    VBAId: number;
    homeClubId: string;
    awayClubId: string;
    leagueSeasonId: number;
    stadiumId: string;
    homeScore: number;
    awayScore: number;
    date: string;
    status: string;
    homeClub: Club;
    awayClub: Club;
    stadium: Stadium;
}

export interface MatchParams {
    field?: {
        id?: boolean;
        VBAId?: boolean;
        homeClubId?: boolean;
        awayClubId?: boolean;
        leagueSeasonId?: boolean;
        stadiumId?: boolean;
        homeScore?: boolean;
        awayScore?: boolean;
        date?: boolean;
        status?: boolean;
    };
    include?: {
        relation: string;
    }[];
    order?: string;
}
