import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { CardIO } from 'nativescript-cardio';
import { Image } from 'tns-core-modules/ui/image';
let page;
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
}

export function scan() {
  const cardio = new CardIO();
  cardio.show(card => {
    const imageView = page.getViewById('image') as Image;
    imageView.imageSource = card.image;
  });
}
