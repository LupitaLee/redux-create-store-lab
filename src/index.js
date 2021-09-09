// write your createStore function here

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
function createStore(candyReducer){
  let state;
    function dispatch(action){
      state = candyReducer(state, action)
      render()

    }
    function getState(){
      return state
    }
    return{
      dispatch,
      getState

    }
}
// Once the store is created, call an initial dispatch.
let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT' });

store.dispatch({type: 'ADD_CANDY', candy: "Jelly Beans" })
// store.dispatch({type: 'ADD_CANDY', candy: "Jelly Beans" })

// let container = document.getElementById('container')

// container.addEventListener('click', ()=>{
//   store.dispatch({type: 'ADD_CANDY', candy: "Jelly Beans" })
// })

// let todos = store.getState();