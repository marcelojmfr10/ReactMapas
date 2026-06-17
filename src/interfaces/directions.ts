export interface DirectionResponse {
  code: string;
  waypoints: Waypoint[];
  routes: Route[];
  uuid: string;
}

export interface Route {
  geometry: Geometry;
  distance: number;
  duration: number;
  weight: number;
  weight_name: string;
  legs: Leg[];
}

export interface Geometry {
  type: "LineString";
  coordinates: Array<number[]>;
}

export interface Leg {
  steps: Step[];
  summary: string;
  distance: number;
  duration: number;
  weight: number;
  admins: Admin[];
  via_waypoints: any[];
  notifications?: Notification[];
}

export interface Admin {
  iso_3166_1: string;
  iso_3166_1_alpha3: string;
}

export interface Notification {
  geometry_index_start: number;
  geometry_index_end: number;
  type: string;
  subtype: Subtype;
  refresh_type: string;
  details: Details;
}

export interface Details {
  message: string;
}

export type Subtype = "motorway" | "toll" | "tunnel";

export interface Step {
  geometry: Geometry;
  mode: Mode;
  driving_side: DrivingSide;
  distance: number;
  duration: number;
  weight: number;
  name: string;
  ref?: string;
  maneuver: Maneuver;
  destinations?: string;
  intersections: Intersection[];
  exits?: string;
}

export type DrivingSide =
  | "left"
  | "right"
  | "slight left"
  | "slight right"
  | "straight";

export interface Intersection {
  location: number[];
  geometry_index: number;
  admin_index: number;
  is_urban?: boolean;
  duration?: number;
  weight?: number;
  out?: number;
  entry: boolean[];
  bearings: number[];
  mapbox_streets_v8?: MapboxStreetsV8;
  in?: number;
  lanes?: Lane[];
  turn_weight?: number;
  classes?: Subtype[];
  toll_collection?: TollCollection;
  traffic_signal?: boolean;
}

export interface Lane {
  active: boolean;
  valid: boolean;
  valid_indication?: DrivingSide;
  indications: DrivingSide[];
}

export interface MapboxStreetsV8 {
  class: Class;
}

export type Class =
  | "motorway"
  | "primary"
  | "primary_link"
  | "secondary"
  | "secondary_link"
  | "tertiary"
  | "tertiary_link"
  | "trunk"
  | "trunk_link";

export interface TollCollection {
  type: string;
  name: string;
}

export interface Maneuver {
  location: number[];
  bearing_before: number;
  bearing_after: number;
  instruction: string;
  type: string;
  modifier?: DrivingSide;
}

export type Mode = "driving";

export interface Waypoint {
  location: number[];
  name: string;
  distance: number;
}
