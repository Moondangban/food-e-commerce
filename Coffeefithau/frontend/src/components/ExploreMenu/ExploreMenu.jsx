import { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

import PropTypes from 'prop-types';
const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    
    
    <div className='explore-menu' id='explore-menu'>
      <div className="menu-title-container">
  <div className="menu-title-section">
    <h2 className="menu-title">CAFÉ FITHAU</h2>
    <p className="menu-description">
    Quán không chỉ là nơi thưởng thức đồ uống mà còn là góc nhỏ lý tưởng để học tập, làm việc nhóm hoặc thư giãn. Với không gian mở thoáng đãng, ánh sáng tự nhiên tràn ngập cùng giai điệu nhạc nhẹ nhàng, Fithau Café luôn mang đến một cảm giác thoải mái và sáng tạo cho khách hàng.
    </p>
    <img src="header6.png" alt="Menu Section" className="menu-image" />
  </div>
</div>
      <h1>Menu đa dạng</h1>
      <p className='explore-menu-text'>Tại Café Fit Hau, bạn sẽ tìm thấy những ly cà phê đậm đà, trà thơm ngon và các món nước ép tươi mát, tất cả được chế biến từ nguyên liệu tươi ngon nhất. Mỗi đồ uống không chỉ thỏa mãn cơn khát mà còn mang đến những phút giây thư giãn tuyệt vời. Hãy đến và tận hưởng một trải nghiệm uống độc đáo, mỗi lần ghé quán là một lần khám phá hương vị mới!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_display}</p>
                </div>
            )
        })}
      </div>
      
      
    </div>
  )
}
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,  // category là một chuỗi bắt buộc
  setCategory: PropTypes.func.isRequired, // setCategory là một hàm bắt buộc
};
export default ExploreMenu
