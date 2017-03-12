import { Item } from './Item';
import { ImportLocation } from "./ImportLocation";

export class ImportSuggestion {
  item: Item;
  numLost: number;
  totalIskLost: number;
  itemsLostInDestination: number;
  minPriceInDestination: number;
  volRemainingInDestination: number;
  distinctMarketOrdersInDestination: number;
  numberSoldInDestinationPerDay: number;
  minPriceInSource: number;
  importSource: ImportLocation;
  importDestination: ImportLocation

  // calculateProfitPerItem() : number {
  //   return this.minPriceInDestination - this.minPriceInSource;
  // }
}
