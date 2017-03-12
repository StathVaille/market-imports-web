import { Serializable } from "./ImportSuggestion";

export class ImportLocation  implements Serializable<ImportLocation> {
  stationId: number;
  stationName : string;
  systemId: number;
  systemName : string;
  regionId: number;
  regionName : string;

  deserialize(input) {
   this.stationId = input.stationId;
   this.stationName = input.stationName;
   this.systemId = input.systemId;
   this.systemName = input.systemName;
   this.regionId = input.regionId;
   this.regionName = input.regionName;

   return this;
  }

}
