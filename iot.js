function on_posts(request, reply){
	Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());
	reply.setContent("posted data ignored ...");
	reply.setStatus(200);
	reply.end();
}

function on_gets(request, reply){
	Serial.println("DG - url: " + request.url() + ", ip: " + request.ip());
	url = requst.url();
	if(url.lastIndexOf('.') != -1){
		setContentToFile(request.url());
	}
	else {
		setContent("'"+url+"' is inaccessible here...");
		reply.setStatus(404);
	}
	reply.end();
}

function on_files(request, reply){
	Serial.println("F - url: " + request.url() + ", ip: " + request.ip());
	reply.setToFile(request.url());
	reply.end();
}

var SIZE = 4;
var current;
var index = 0;

function setup() {
	for (var i = 0; i < SIZE; i++){
		pinMode(i, OUTPUT);
	}

	var server = new RealHTTPServer();
	server.start(8765);
	Serial.println("Running: " + server.isListening());

	server.on_contacts = function(request, reply){
		Serial.println("C - url: " + request.url() + ", ip: " + request.ip());
		reply.setContent("reached contacts ...");
		reply.setStatus(200);
		reply.end();
	};
	
	server.on_services = function(request, reply){
		Serial.println("S - url: " + request.url() + ", ip: " + request.ip());
		reply.setContent("reached services ...");
		reply.setStatus(200);
		reply.end();
	};

	server.route("/*", ["GET"], on_files);
	server.route("/contacts", ["gEt", "POST"], server.on_contacts);
	server.route("/services/*", ["Post","get"], server.on_services);
	server.route("*", ["GET"], on_gets);
	server.route("*", ["POST"], on_posts);
}

function loop() {
	for (var i = 0; i < SIZE; i++) {
		digitalWrite(i, current === i ? index % 2 ? HIGH : LOW : LOW);
	}

	index++;

	delay(1000);
}