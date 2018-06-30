const aboutReducer = (state = {
    title: 'About unclicked',
    numCount: 0,
    url:'blah',
    links:{
        first: 'http://www.google.com'
    }
}, action,) => {
    if (action.src === 'about') {
        switch (action.type) {
            case 'BUTTON_CLICKED':
                return {
                    ...state,
                    title: 'About Button Clicked',
                };

            case 'TITLE_CLICKED':
                return {
                    ...state,
                    title: 'About UnClicked'
                };
            default:
                return state;
        }
    } else {
        return state;
    }
};

export default aboutReducer;