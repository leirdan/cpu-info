import * as http from "http";
const port = 5454;
const url = `http://localhost:${port}`;

http.createServer((req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
	res.writeHead(200, { "Content-type": "text/plain" });
	res.write("welcome, my son... \n");
	res.write("welcome to the machine.");
	res.end();
}).listen(port, () => {
	console.log(`server is running in ${url}`);
});
