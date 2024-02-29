export interface AccessTokenResponse {
  readonly access_token: string;
  readonly token_type: string;
  readonly scope: string;
  readonly expires_in: number;
  readonly refresh_token?: string;
}

export interface SearchResponse {
  readonly albums: PagingObject<AlbumObject>;
  readonly artists: PagingObject<ArtistObject>;
  readonly tracks: PagingObject<TrackObject>;
  readonly playlists: PagingObject<PlaylistObject>;
}

export interface PagingObject<T> {
  readonly href: string;
  readonly items: T[];
  readonly limit: number;
  readonly next: string | null;
  readonly offset: number;
  readonly previous: string | null;
  readonly total: number;
}

export interface AlbumObject {
  readonly album_type: string;
  readonly artists: ArtistObject[];
  readonly available_markets: string[];
  readonly id: string;
  readonly name: string;
  readonly release_date: string;
  readonly total_tracks: number;
  readonly type: string;
  readonly uri: string;
}

export interface ArtistObject {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly uri: string;
}

export interface TrackObject {
  readonly album: AlbumObject;
  readonly artists: ArtistObject[];
  readonly available_markets: string[];
  readonly disc_number: number;
  readonly duration_ms: number;
  readonly explicit: boolean;
  readonly id: string;
  readonly name: string;
  readonly track_number: number;
  readonly type: string;
  readonly uri: string;
}

export interface PlaylistObject {
  readonly collaborative: boolean;
  readonly description: string;
  readonly id: string;
  readonly name: string;
  readonly owner: {
    readonly display_name: string;
    readonly id: string;
    readonly type: string;
    readonly uri: string;
  };
  readonly tracks: {
    readonly total: number;
  };
  readonly type: string;
  readonly uri: string;
}
