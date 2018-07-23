export interface ITrack {
    id: number;
    name: string;
    duration: number;
    artist: string;
    playcount: number;
}

export interface IAppState {
    sorting: {
        field: string;
        direction: string;
    },
    showPerPage: number;
    currentPage: number;
    filters: {
        artist: string;
        name: string;
    },
    results: {
        content: ITrack[];
        total: number;
    },
}
