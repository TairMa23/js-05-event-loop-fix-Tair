// ex2.js
function run() {
  setTimeout(() => console.log("first"), 0);
  setTimeout(() => console.log("second"), 0);
  setTimeout(() => console.log("third"), 0);
}

if (typeof module !== "undefined") module.exports = { run };
