let Auth = (state = null, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return state = action.item;
    case 'DELETE_ITEM':
      return state = null;
    default:
      return state;
  }
}

export default Auth;
