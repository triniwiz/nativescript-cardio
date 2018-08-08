import * as application from 'tns-core-modules/application';
import { CardIO } from 'nativescript-cardio';
CardIO.init();
application.start({ moduleName: 'main-page' });
