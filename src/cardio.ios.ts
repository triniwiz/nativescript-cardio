import { CardIOBase, Card, CardType } from './cardio.common';
import { ios } from 'tns-core-modules/utils/utils';
import { fromNativeSource } from 'tns-core-modules/image-source';
export class CardIO extends CardIOBase {
  constructor() {
    super();
  }

  public static init() {
    CardIOUtilities.preloadCardIO();
  }
  public show(callback?: Function): void {
    const controller = CardIOPaymentViewController.alloc().initWithPaymentDelegate(
      CardIOPaymentViewControllerDelegateImpl.initWithCallBack(
        callback ? callback : null
      )
    );
    const application = ios.getter(
      UIApplication,
      UIApplication.sharedApplication
    );
    const window = application.keyWindow;
    if (window) {
      window.rootViewController.presentViewControllerAnimatedCompletion(
        controller,
        true,
        null
      );
    }
  }
}

class CardIOPaymentViewControllerDelegateImpl extends NSObject
  implements CardIOPaymentViewControllerDelegate {
  private _callback;
  public static ObjCProtocols = [CardIOPaymentViewControllerDelegate];

  public static initWithCallBack(
    callback?: Function
  ): CardIOPaymentViewControllerDelegateImpl {
    const delegate = new CardIOPaymentViewControllerDelegateImpl();
    delegate._callback = callback;
    return delegate;
  }

  userDidCancelPaymentViewController(
    paymentViewController: CardIOPaymentViewController
  ): void {
    paymentViewController.dismissViewControllerAnimatedCompletion(true, null);
  }

  userDidProvideCreditCardInfoInPaymentViewController(
    cardInfo: CardIOCreditCardInfo,
    paymentViewController: CardIOPaymentViewController
  ): void {
    if (this._callback) {
      this._callback(<Card>{
        number: cardInfo.cardNumber,
        expMonth: cardInfo.expiryMonth,
        expYear: cardInfo.expiryYear,
        cvv: cardInfo.cvv,
        image: fromNativeSource(cardInfo.cardImage),
        type: this.getCardType(cardInfo.cardType),
        ios: cardInfo,
        android: null,
        name: cardInfo.cardholderName,
        postalCode: cardInfo.postalCode
      });
    }
    paymentViewController.dismissViewControllerAnimatedCompletion(true, null);
  }

  private getCardType(type): CardType {
    switch (type) {
      case CardIOCreditCardType.Ambiguous:
        return CardType.Ambiguous;
      case CardIOCreditCardType.Amex:
        return CardType.Amex;
      case CardIOCreditCardType.Discover:
        return CardType.Discover;
      case CardIOCreditCardType.JCB:
        return CardType.JCB;
      case CardIOCreditCardType.Mastercard:
        return CardType.Mastercard;
      case CardIOCreditCardType.Visa:
        return CardType.Visa;
      default:
        return CardType.Unrecognized;
    }
  }
}
