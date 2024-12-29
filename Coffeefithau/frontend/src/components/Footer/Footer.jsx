
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Chào mừng bạn đến với Café Fit Hau – điểm đến lý tưởng cho những ai yêu thích không gian thư giãn và những thức uống tươi ngon, bổ dưỡng! Với hơn 20 loại đồ uống đặc sắc, chúng tôi cam kết mang đến cho bạn những trải nghiệm tuyệt vời, giúp bạn thư giãn và nạp lại năng lượng sau những giờ làm việc căng thẳng.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>CAFE-FITHAU</h2>
            <ul>
                <li>Trang chủ</li>
                <li>Cửa hàng</li>
                <li>Vận chuyển</li>
                <li>Nhượng quyền</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>NHẬN TIN KHUYẾN MÃI</h2>
            <ul>
                <li>Hotline:0668866886</li>
                <li>Email:contact@21cn1.com</li>
                <li>Thời gian làm việc:8:00-22:00</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Sản phẩm của sinh viên NHÓM 10 </p>
    </div>
  )
}

export default Footer
