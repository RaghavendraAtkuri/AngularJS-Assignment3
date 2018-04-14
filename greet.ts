class Greeter {
	message: string;

	constructor(msg: string) {
		this.message = msg;
	}

	greet() {
		console.log('Message is:', this.message);
	}

}

let msg1: Greeter = new Greeter('Wishing you a very merry Christmas! May it bring you joy, happiness and everything else you deserve.');
msg1.greet();