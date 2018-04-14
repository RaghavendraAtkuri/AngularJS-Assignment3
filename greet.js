var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.message = msg;
    }
    Greeter.prototype.greet = function () {
        console.log('Message is:', this.message);
    };
    return Greeter;
}());
var msg1 = new Greeter('Wishing you a very merry Christmas! May it bring you joy, happiness and everything else you deserve.');
msg1.greet();
