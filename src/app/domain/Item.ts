import { LocalisedString } from './LocalisedString';

export class Item {
  typeId: number;
  graphicID: number;
  groupID: number;
  description: LocalisedString;
  name: LocalisedString;
  volume: number;
}
