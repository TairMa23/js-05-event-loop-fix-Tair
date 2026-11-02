// ex5.js
function run() {
  setTimeout(() => {
    setMessage("Ready!");
    addLine("Ready!");
  }, 20);

  setTimeout(() => {
    setMessage("Almost there...");
    addLine("Almost there...");
  }, 10);

  setMessage("Loading...");
  addLine("Loading...");
}

if (typeof module !== "undefined") module.exports = { run };
