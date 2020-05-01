import {cardActionTypes} from './card.types';

export const toggleCardDropdown = () => ({
    type: cardActionTypes.TOGGLE_CARD_DROPDOWN,
})

export const addItem = (item) => ({
    type: cardActionTypes.ADD_ITEM,
    payload: item
})