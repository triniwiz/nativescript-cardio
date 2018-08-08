import { ImageSource } from 'tns-core-modules/image-source';
export abstract class CardIOBase {
  public abstract show(): void;
  protected getCardType(type): CardType {
    return CardType.Unrecognized;
  }
}

export enum CardType {
  Unrecognized,
  Ambiguous,
  Amex,
  JCB,
  Visa,
  Mastercard,
  Discover,
  Dinersclub,
  Insufficient_digits,
  Maestro
}

export interface Card {
  number: string;
  expMonth: number;
  expYear: number;
  cvv: string;
  image: ImageSource;
  type: CardType;
  name: string;
  postalCode?: string;
  android: any;
  ios: any;
}
