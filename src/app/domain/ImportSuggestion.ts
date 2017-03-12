import { Item } from './Item';
import { ImportLocation } from "./ImportLocation";

export interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ImportSuggestion implements Serializable<ImportSuggestion> {
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

  calculateProfitPerItem() : number {
    return this.minPriceInDestination - this.minPriceInSource;
  }

  deserialize(input) {
   this.item = new Item().deserialize(input.item);
   this.numLost = input.numLost;
   this.totalIskLost = input.totalIskLost;
   this.itemsLostInDestination = input.itemsLostInDestination;
   this.minPriceInDestination = input.minPriceInDestination;
   this.volRemainingInDestination = input.volRemainingInDestination;
   this.distinctMarketOrdersInDestination = input.distinctMarketOrdersInDestination;
   this.numberSoldInDestinationPerDay = input.numberSoldInDestinationPerDay;
   this.minPriceInSource = input.minPriceInSource;
   this.importSource = new ImportLocation().deserialize(input.importSource);
   this.importDestination = new ImportLocation().deserialize(input.importDestination);

   return this;
 }
}
