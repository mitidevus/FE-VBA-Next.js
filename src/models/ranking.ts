import { Club } from "./club";

export interface Ranking {
    id: string;
    clubId: string;
    leagueSeasonId: number;
    position: number;
    gamesPlayed: number;
    won: number;
    lost: number;
    percentageWon: number;
    scoredFor: number;
    scoredAgainst: number;
    pointsDiff: number;
    streak: number;
    club: Club;
}

export interface RankingParams {
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
        scope?: {
            fields?: string[];
        };
    }[];

    order?: string;
}
