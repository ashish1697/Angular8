import { createStore,combineReducers } from 'redux';
 
const initialState = {
  result: 1,
  lastValues: []
}
 
// define reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload
      };
      state.lastValues.push(action.payload);
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload
      };
      state.lastValues.push(action.payload);
      break;
  }
  return state;
};

const userReducer =(state={
    name: "Ashish",
    age:27
},action)=>{
    switch(action.type) {
        case 'SET_NAME':
          state = {
            ...state,
            name: action.payload
          };
          break;
        case 'SET_AGE':
          state = {
            ...state,
            name: action.payload
          };
          break;
      }
      return state;
}
 
// define store
const store = createStore(combineReducers({reducer,userReducer}));
 
// refer store in view to print the data and subsribe the store
store.subscribe(() => console.log('Store...', JSON.stringify(store.getState())));
 
// define action and dispatch
store.dispatch({
  type: 'ADD',
  payload: 10
});
 
store.dispatch({
  type: 'ADD',
  payload: 10
});
 
store.dispatch({
  type: 'SET_AGE',
  payload: "Ranjan"
})