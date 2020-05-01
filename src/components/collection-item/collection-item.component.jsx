import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/card/card.action';
import CustomButton from '../custom-button/CustomButton.component';
import './collection-item.style.scss';

const CollectionItem = ({ item, addItem} ) => {
    const { id, name, price, imageUrl } = item;
    return(

        <div key={id} className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={()=> addItem(item)} inverted>add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);