// const dns = require('node:dns');
// const dnsPromises = dns.promises;
// var ip=dnsPromises.resolve6('<AAAA>');
// console.log(ip);


// const options = {
//   family: 4,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };

// dnsPromises.lookup('example.com', options).then((result) => {
//   console.log('address: %j family: IPv%s', result.address, result.family);
//   // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
// });

// // When options.all is true, the result will be an Array.
// options.all = true;
// dnsPromises.lookup('example.com', options).then((result) => {
//   console.log('addresses: %j', result);
//   // addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
// });

// const myURL = new URL('https://example.org abc:xyz/foo#bar');
const myURL = new URL('https://abc:xyz@example.com:8888');
myURL.protocol='http';
myURL.hostname="hidden";
console.log(myURL.hostname);
console.log(myURL.origin)
console.log(myURL.protocol);
console.log(myURL.password);
console.log(myURL.port);

// console.log(myURL.origin)
// console.log(myURL.href);
// Prints #bar

myURL.hash = 'baz';
// console.log(myURL.href);
// Prints https://example.org/foo#baz