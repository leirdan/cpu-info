import { arch, cpus, platform, type, totalmem, freemem, networkInterfaces } from "node:os";

const totalRam = (totalmem() / 1024 / 1024 / 1000).toPrecision(3) + "Gb";
const freeRam = (freemem() / 1024 / 1024 / 100).toPrecision(3) + "Gb";
const usageRam = parseFloat(totalRam) - parseFloat(freeRam);
const occupiedRam = (usageRam / 1024 / 1024 / 100).toPrecision(3) + "Gb";

const pc = {
	OS: platform(),
	type: type(),
	arch: arch(),
	cpu: cpus(),
	netInterfaces: networkInterfaces(),
	ram: totalRam,
	freeRam: freeRam,
	occupiedRam: occupiedRam
};

setInterval(() => {
	console.clear();
	console.table(pc);
}, 2000);
