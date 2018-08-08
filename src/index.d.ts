import { CardIOBase, CardType } from './cardio.common';
export declare class CardIO extends CardIOBase {
    static init(): void;
    show(callback?: Function): void;
    protected getCardType(type: any): CardType;
}
