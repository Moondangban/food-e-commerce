import  { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
import PropTypes from 'prop-types';
const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);// lấy list từ context -context lấy list từ asset
// Logging dữ liệu
console.log("Category:", category);
console.log("Food List:", food_list);

if (!food_list || food_list.length === 0) {
  return <p>Không có sản phẩm nào để hiển thị.</p>;
}
  return (
    <div className='food-display' id='food-display'>
      <h2>Top sản phẩm bán chạy</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  ) 
}
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,  // category là một chuỗi bắt buộc
  
};
export default FoodDisplay
