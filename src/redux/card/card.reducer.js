import {cardActionTypes} from './card.types';
import {addItemsToCart} from '../../redux/card/card.utils';

const INITIAL_STATE = {
    visible: false,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cardActionTypes.TOGGLE_CARD_DROPDOWN:
            return ( {
                    ...state,
                    visible: !state.visible
            }
            )
        case cardActionTypes.ADD_ITEM:
            return ( {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            })
        default: 
            return state;
    }
}

export default cardReducer;