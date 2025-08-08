type multiPolygons = number[][][];
export type Position = [number, number];

export interface Data {
  type: string;
  features: Array<{
    geometry: {
      type: string;
      centerCoordinates: Position;
      coordinates: multiPolygons;
    };
    type: string;
    properties: {
      source: string;
      id: string;
      name: string;
      description: string;
      population: string;
    };
    id: number;
  }>;
}
