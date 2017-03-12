import { LocalisedString } from './LocalisedString';
import { Serializable } from './ImportSuggestion';

export class Item implements Serializable<Item>  {
  typeId: number;
  graphicID: number;
  groupID: number;
  description: LocalisedString;
  name: LocalisedString;
  volume: number;

  deserialize(input) {
   this.typeId = input.typeId;
   this.graphicID = input.graphicID;
   this.groupID = input.groupID;
   this.description = new LocalisedString().deserialize(input.description);
   this.name = new LocalisedString().deserialize(input.name);
   this.volume = input.volume;

   return this;
  }
}
