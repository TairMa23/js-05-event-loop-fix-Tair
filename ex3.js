// ex3.js
function func(number){
   setTimeout(() => console.log(number), 0);
}
function run() {
  for (var i = 0; i < 3; i++) {
    func(i);
  }
}

if (typeof module !== "undefined") module.exports = { run };
