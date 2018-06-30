const homeReducer = (
    state = {
        title: 'Uncliked',
        numCount: 0,
        name: 'App name is Blah'
    },
    action,
  ) => {
    switch (action.type) {
      case 'BUTTON_CLICKED':
        return{
            ...state,
            title: 'Button Clicked',
            numCount: state.numCount + 1,
        };

    case 'TITLE_CLICKED':
        return{
            ...state,
            title: 'UnClicked'
        };
      default:
        return state;
    }
  };
  
  export default homeReducer;