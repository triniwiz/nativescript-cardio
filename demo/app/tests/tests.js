var Cardio = require("nativescript-cardio").Cardio;
var cardio = new Cardio();

describe("greet function", function() {
    it("exists", function() {
        expect(cardio.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(cardio.greet()).toEqual("Hello, NS");
    });
});