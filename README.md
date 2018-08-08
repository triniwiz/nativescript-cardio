[![npm](https://img.shields.io/npm/v/nativescript-cardio.svg)](https://www.npmjs.com/package/nativescript-cardio)
[![npm](https://img.shields.io/npm/dt/nativescript-cardio.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-cardio)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-cardio.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-cardio)

# Installation

- `tns plugin add nativescript-cardio`

## Usage

```ts
import { CardIO } from 'nativescript-cardio';

const cardIO = new CardIO();
cardIO.show((card: Card) => {
  /*
    Card {
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
    */
});
```
