import { CardIOBase, Card, CardType } from './cardio.common';
import * as application from 'tns-core-modules/application';
import { fromNativeSource } from 'tns-core-modules/image-source';
declare const io;

const SCAN_REQUEST_CODE = 90210;
export class CardIO extends CardIOBase {
  public static init() {}
  public show(callback?: Function): void {
    const CardIOActivity = io.card.payment.CardIOActivity;
    const scanIntent = new android.content.Intent(
      application.android.context,
      CardIOActivity.class
    );

    scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_EXPIRY, true);
    scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_CVV, false);
    scanIntent.putExtra(CardIOActivity.EXTRA_RETURN_CARD_IMAGE, true);

    application.android.foregroundActivity.startActivityForResult(
      scanIntent,
      SCAN_REQUEST_CODE
    );

    application.android.off('activityResult');
    application.android.on('activityResult', (args: any) => {
      if (
        args.requestCode === SCAN_REQUEST_CODE &&
        args.resultCode === android.app.Activity.RESULT_OK
      ) {
        if (
          args.intent !== null &&
          args.intent.hasExtra(CardIOActivity.EXTRA_SCAN_RESULT)
        ) {
          const scanResult = args.intent.getParcelableExtra(
            CardIOActivity.EXTRA_SCAN_RESULT
          );

          if (callback) {
            const card = CardIOActivity.getCapturedCardImage(args.intent);
            callback(<Card>{
              name: scanResult.cardholderName,
              number: scanResult.cardNumber,
              cvv: scanResult.cvv,
              expMonth: scanResult.expiryMonth,
              expYear: scanResult.expiryYear,
              type: this.getCardType(scanResult.getCardType()),
              postalCode: scanResult.postalCode,
              android: scanResult,
              ios: null,
              image: fromNativeSource(card)
            });
          }
        }
      }
    });
  }

  protected getCardType(type): CardType {
    switch (type) {
      case io.card.payment.CardType.DINERSCLUB:
        return CardType.Dinersclub;
      case io.card.payment.CardType.AMEX:
        return CardType.Amex;
      case io.card.payment.CardType.DISCOVER:
        return CardType.Discover;
      case io.card.payment.CardType.JCB:
        return CardType.JCB;
      case io.card.payment.CardType.MASTERCARD:
        return CardType.Mastercard;
      case io.card.payment.CardType.VISA:
        return CardType.Visa;
      case io.card.payment.CardType.MAESTRO:
        return CardType.Maestro;
      case io.card.payment.CardType.INSUFFICIENT_DIGITS:
        return CardType.Insufficient_digits;
      default:
        return CardType.Unrecognized;
    }
  }
}
