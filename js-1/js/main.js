function numberOfUsers() {
  return 4;
}

console.log(numberOfUsers());


////////////////////////////


function addUser(name, id, balance) {
  return {
    name: name,
    id: id,
    balance: balance
  };
}

console.log(addUser("Menna", 1, 5000));


///////////////////////////////


var users = [
  { id: 1, name: "Menna", balance: 5000 },
  { id: 2, name: "Omar", balance: 3000 }
];

function editUserBalanceById(id, newBalance) {
  for (let user of users) {
    if (user.id === id) {
      user.balance = newBalance;
      return user;
    }
  }
  return "User not found";
}

console.log(editUserBalanceById(1, 7000));


////////////////////////////////////////

var users = [
  { id: 1, name: "Menna", balance: 5000 },
  { id: 2, name: "Omar", balance: 3000 },
  { id: 3, name: "Sara", balance: 4000 }
];

function deleteUserById(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return "User deleted";
  }
  return "User not found";
}

console.log(deleteUserById(2));
console.log(users);











