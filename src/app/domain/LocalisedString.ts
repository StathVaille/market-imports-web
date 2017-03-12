import { Serializable } from "./ImportSuggestion";

export class LocalisedString  implements Serializable<LocalisedString> {
  en: string;

  deserialize(input) {
   this.en = input.en;
   return this;
  }
}
