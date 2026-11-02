// ex7.js
function loadUser(callback) {
  setTimeout(() => callback("Dana"), 30);
}

function loadOrders(callback) {
  setTimeout(() => callback(3), 10);
}

function run() {
  let user;
  let orders;

  loadUser((name) => {
    user = name;
    console.log("User: " + user);
    loadOrders((count) => {
      orders = count;
      console.log("Orders: " + orders);
    });
  });
}

if (typeof module !== "undefined") module.exports = { run };
