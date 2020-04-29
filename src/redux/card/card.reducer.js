import {cardActionTypes} from './card.types';

const INITIAL_STATE = {
    visible: false
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cardActionTypes.TOGGLE_CARD_DROPDOWN:
            return ( {
                    ...state,
                    visible: !state.visible
            }
            )
        default: 
            return state;
    }
}

export default cardReducer;