const os = require('os');
// console.log(os.arch());
// console.log(os.userInfo());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.machine());

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs);