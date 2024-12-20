var SIZE = 4;
var current;
var index = 0;
var items = [
	{
		name: "Nerds box Rainbow",
		price: 2.99,
		image: "http://candy.shop/Nerds-Rainbow.png",
		stock: 7,
		purchases: []
	},
	{
		name: "Alyan Dubai Schokolade",
		price: 9.99,
		image: "http://candy.shop/Dubai.png",
		stock: 12,
		purchases: []
	},
	{
		name: "Sour Patch Kids",
		price: 2.75,
		image: "http://candy.shop/Sour-Patch-Kids.png",
		stock: 23,
		purchases: []
	},
	{
		name: "Calypso – Island Wave",
		price: 3.50,
		image: "http://candy.shop/Island-Wave.png",
		stock: 4,
		purchases: []
	}
];

function setup() {
	for (var i = 0; i < SIZE; i++){
		pinMode(i, OUTPUT);
	}

	pinMode(4, OUTPUT);

	HTTPServer.route("/items", function (_, res) {
		res.setContentType("application/json");
		res.send(JSON.stringify(items));
	})

	HTTPServer.route("/items/*", function (url, res) {
		var split = url.split("/")

		var id = parseInt(split[2]);
		var type = split[3];

		if (type === "buy") {
			if (items[id].stock > 0) {
				items[id].stock--;
				items[id].purchases.push({
					status: 0,
					date: Date.now()
				})
				res.send("Ware gekauft");
			} else {
				res.send("Keine Ware mehr verfügbar");
			}
		} else if (type === "storage") {
			var purchase = parseInt(split[4]);

			for (var i = 0; i < items.length; i++) {
				for (var j = 0; j < items[i].purchases.length; j++) {
					var element = items[i].purchases[j];
					
					if (element.status === 1) {
						element.status = 2;
					} else if (id === i && purchase === j) {
						element.status = 1;
					}
				}
			}

			res.send("Ware markiert");
		}
	});

	HTTPServer.start(80);
}

function loop() {
	var hasPurchased = false
	var current;

	for (var i = 0; i < items.length; i++) {
		for (var j = 0; j < items[i].purchases.length; j++) {
			var element = items[i].purchases[j];
			
			if (element.status === 1) {
				current = i;
			}
		}
	}

	for (var i = 0; i < SIZE; i++) {
		digitalWrite(i, current === i ? index % 2 ? HIGH : LOW : LOW);
	}

	for (var i = 0; i < items.length; i++) {
		if (hasPurchased) {
			break;
		}

		for (var j = 0; j < items[i].purchases.length; j++) {
			var element = items[i].purchases[j];
			
			if (element.status <= 1) {
				hasPurchased = true;
				break;
			}
		}
	}

	digitalWrite(4, hasPurchased ? HIGH : LOW);

	index++;

	delay(1000);
}