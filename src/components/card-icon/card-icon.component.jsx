import React from 'react';
import './card-icon.style.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCardDropdown } from '../../redux/card/card.action';

const CardIcon = ({ toggleCardDropdown }) => (
    <div className="card-icon" onClick={toggleCardDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="card-counter">0</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCardDropdown: () => dispatch(toggleCardDropdown())
  });

export default connect(null, mapDispatchToProps)(CardIcon);