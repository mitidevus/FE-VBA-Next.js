export interface LeagueSeason {
    id: number;
    VBAId: number;
    leagueId: number;
    seasonId: number;
}

export interface LeagueSeasonParams {
    id?: boolean;
    leagueId?: boolean;
    seasonId?: boolean;
}
