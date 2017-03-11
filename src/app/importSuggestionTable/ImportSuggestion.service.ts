export class ImportSuggestionService {
  getImportSuggestions() : any[] {
      return [{
                  itemName: "test item",
                  itemVolume: 40,
                  minPriceInSource: 100.3,
                  minPriceInDestination: 234.2,
                  volRemainingInDestination: 7,
                  distinctMarketOrdersInDestination: 34,
                  numberSoldInDestinationPerDay: 3
              },
              {
                  itemName: "test item",
                  itemVolume: 40,
                  minPriceInSource: 100.3,
                  minPriceInDestination: 234.2,
                  volRemainingInDestination: 7,
                  distinctMarketOrdersInDestination: 34,
                  numberSoldInDestinationPerDay: 3
              }]
  }
}
