import  { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount,url,currency,deliveryCharge} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản phẩm</p> <p>Tên sản phẩm</p> <p>Giá</p> <p>Số lượng</p> <p>Tổng tiền</p> <p>Xoá</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}{currency}</p>
                <div>{cartItems[item._id]}</div>
                <p>{item.price*cartItems[item._id]}{currency}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Hoá đơn</h2>
          <div>
            <div className="cart-total-details"><p>Tổng tiền</p><p>{getTotalCartAmount()}{currency}</p></div>
            <hr />
            <div className="cart-total-details"><p>Phí vận chuyển</p><p>{getTotalCartAmount()===0?0:deliveryCharge}{currency}</p></div>
            <hr />
            <div className="cart-total-details"><b>Tổng</b><b>{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}{currency}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>THANH TOÁN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nhập mã giảm giá</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Mã giảm giá'/>
              <button>Áp dụng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
