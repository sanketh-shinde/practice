const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Update State: ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restock(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restock(2));

// unsubscribe();
