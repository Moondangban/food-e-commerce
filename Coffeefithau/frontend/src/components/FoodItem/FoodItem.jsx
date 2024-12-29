import  { useContext } from 'react' //, useState
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import PropTypes from 'prop-types';
const FoodItem = ({ image, name, price, desc , id }) => {
// id đầu image cuối chứ
    
    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name.length>12 ?name.slice(0,12) + '...': name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc.length>100 ?desc.slice(0,100) + '...': desc}</p>
                <p className="food-item-price">{price}{currency}</p>
            </div>
        </div>
    )
}
FoodItem.propTypes = {
    image: PropTypes.string.isRequired,   // Kiểm tra image là string và bắt buộc
    name: PropTypes.string.isRequired,    // Kiểm tra name là string và bắt buộc
    price: PropTypes.number.isRequired,  // Kiểm tra price là số và bắt buộc
    desc: PropTypes.string.isRequired,   // Kiểm tra desc là string và bắt buộc
    id: PropTypes.string.isRequired      // Kiểm tra id là string và bắt buộc
  };
export default FoodItem
