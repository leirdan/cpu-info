import * as http from "http";

http.createServer((req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
	res.writeHead(200, { "Content-type": "text/plain" });
	res.write("welcome, my son... \n");
	res.write("welcome to the machine.");
	res.end();
}).listen(5454, () => {
	console.log("server is running!");
});
