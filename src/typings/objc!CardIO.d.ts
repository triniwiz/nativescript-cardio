
declare class CardIOCreditCardInfo extends NSObject implements NSCopying {

	static alloc(): CardIOCreditCardInfo; // inherited from NSObject

	static displayStringForCardTypeUsingLanguageOrLocale(cardType: CardIOCreditCardType, languageOrLocale: string): string;

	static logoForCardType(cardType: CardIOCreditCardType): UIImage;

	static new(): CardIOCreditCardInfo; // inherited from NSObject

	cardImage: UIImage;

	cardNumber: string;

	readonly cardType: CardIOCreditCardType;

	cardholderName: string;

	cvv: string;

	expiryMonth: number;

	expiryYear: number;

	postalCode: string;

	readonly redactedCardNumber: string;

	scanned: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum CardIOCreditCardType {

	Unrecognized = 0,

	Ambiguous = 1,

	Amex = 51,

	JCB = 74,

	Visa = 52,

	Mastercard = 53,

	Discover = 54
}

declare var CardIOCurrentScanningOrientation: string;

declare var CardIOCurrentScanningOrientationVar: string;

declare const enum CardIODetectionMode {

	CardImageAndNumber = 0,

	CardImageOnly = 1,

	Automatic = 2
}

declare class CardIOPaymentViewController extends UINavigationController {

	static alloc(): CardIOPaymentViewController; // inherited from NSObject

	static new(): CardIOPaymentViewController; // inherited from NSObject

	allowFreelyRotatingCardGuide: boolean;

	collectCVV: boolean;

	collectCardholderName: boolean;

	collectExpiry: boolean;

	collectPostalCode: boolean;

	detectionMode: CardIODetectionMode;

	disableBlurWhenBackgrounding: boolean;

	disableManualEntryButtons: boolean;

	guideColor: UIColor;

	hideCardIOLogo: boolean;

	keepStatusBarStyle: boolean;

	keepStatusBarStyleForCardIO: boolean;

	languageOrLocale: string;

	maskManualEntryDigits: boolean;

	navigationBarStyle: UIBarStyle;

	navigationBarStyleForCardIO: UIBarStyle;

	navigationBarTintColor: UIColor;

	navigationBarTintColorForCardIO: UIColor;

	paymentDelegate: CardIOPaymentViewControllerDelegate;

	restrictPostalCodeToNumericOnly: boolean;

	scanExpiry: boolean;

	scanInstructions: string;

	scanOverlayView: UIView;

	scannedImageDuration: number;

	suppressScanConfirmation: boolean;

	suppressScannedCardImage: boolean;

	useCardIOLogo: boolean;

	constructor(o: { paymentDelegate: CardIOPaymentViewControllerDelegate; });

	constructor(o: { paymentDelegate: CardIOPaymentViewControllerDelegate; scanningEnabled: boolean; });

	initWithPaymentDelegate(aDelegate: CardIOPaymentViewControllerDelegate): this;

	initWithPaymentDelegateScanningEnabled(aDelegate: CardIOPaymentViewControllerDelegate, scanningEnabled: boolean): this;
}

interface CardIOPaymentViewControllerDelegate extends NSObjectProtocol {

	userDidCancelPaymentViewController(paymentViewController: CardIOPaymentViewController): void;

	userDidProvideCreditCardInfoInPaymentViewController(cardInfo: CardIOCreditCardInfo, paymentViewController: CardIOPaymentViewController): void;
}
declare var CardIOPaymentViewControllerDelegate: {

	prototype: CardIOPaymentViewControllerDelegate;
};

declare var CardIOScanningOrientationAnimationDuration: string;

declare var CardIOScanningOrientationAnimationDurationVar: string;

declare var CardIOScanningOrientationDidChangeNotification: string;

declare var CardIOScanningOrientationDidChangeNotificationVar: string;

declare class CardIOUtilities extends NSObject {

	static alloc(): CardIOUtilities; // inherited from NSObject

	static blurredScreenImageView(): UIImageView;

	static canReadCardWithCamera(): boolean;

	static cardIOLibraryVersion(): string;

	static libraryVersion(): string;

	static new(): CardIOUtilities; // inherited from NSObject

	static preload(): void;

	static preloadCardIO(): void;
}

declare class CardIOView extends UIView {

	static alloc(): CardIOView; // inherited from NSObject

	static appearance(): CardIOView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CardIOView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CardIOView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CardIOView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CardIOView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CardIOView; // inherited from UIAppearance

	static new(): CardIOView; // inherited from NSObject

	allowFreelyRotatingCardGuide: boolean;

	readonly cameraPreviewFrame: CGRect;

	delegate: CardIOViewDelegate;

	detectionMode: CardIODetectionMode;

	guideColor: UIColor;

	hideCardIOLogo: boolean;

	languageOrLocale: string;

	scanExpiry: boolean;

	scanInstructions: string;

	scanOverlayView: UIView;

	scannedImageDuration: number;

	useCardIOLogo: boolean;
}

interface CardIOViewDelegate extends NSObjectProtocol {

	cardIOViewDidScanCard(cardIOView: CardIOView, cardInfo: CardIOCreditCardInfo): void;
}
declare var CardIOViewDelegate: {

	prototype: CardIOViewDelegate;
};
