// ex6.js
function run() {
  for (let n = 3; n >= 1; n--) {
    setTimeout(() => addLine(String(n)), 0);
  }
  setTimeout(()=>addLine("Liftoff!"),10)
  
}

if (typeof module !== "undefined") module.exports = { run };
