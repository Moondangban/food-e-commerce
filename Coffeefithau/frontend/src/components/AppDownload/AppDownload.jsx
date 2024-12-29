
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        
        <div className='app-download' id='app-download'>
            <div className="food-order-container">
                {/* Text section */}
                <div className="text-section">
                    <h1>Đặt Đồ uống Yêu Thích</h1>
                    <p>
                    Hãy trải nghiệm sự tiện lợi khi đặt hàng ngay tại nhà, mọi lúc, mọi nơi. Chỉ với vài bước đơn giản, đồ uống yêu thích của bạn sẽ được giao tận nơi.
                    </p>
                    <ul>
                        <li>🍹 Khám phá menu phong phú với hơn 8 loại đồ uống.</li>
                        <li>🛒 Lựa chọn đồ uống yêu thích và thêm vào giỏ hàng nhanh chóng.</li>
                        <li>📲  Điền thông tin và xác nhận đơn hàng dễ dàng.</li>
                        <li>🛵 Theo dõi đơn hàng theo thời gian thực cho đến khi đồ uống đến tận cửa nhà bạn.</li>
                    </ul>
                </div>

                {/* Video section */}
                <div className="video-section">
                    <video className="food-video" autoPlay muted loop>
                        <source src="/meomeo.mp4" type="video/mp4" />
                        
                    </video>
                    <video className="food-video" autoPlay muted loop>
                        <source src="/coffee.mp4" type="video/mp4" />
                        
                    </video>
                </div>
            </div>

            <div className="container">
                <div className="left-section">
                <video className="tea-video" autoPlay muted loop>
                <source src="/meo.mp4" type="video/mp4" />
                </video>
                    <div className="discount-label">Cafe Đá<br />Chỉ 35K tới 1/1</div>
                </div>
                <div className="right-section">
                    <div className="top-box">
                        
                        <div className="top-banner-text">
                            <span className="highlight">Đồng giá 35K </span>
                            <p>Khai chương cơ cở 5 tại Trần Phú</p>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <p className="bottom-text">Nhận ưu đãi ngay hôm nay tại cơ sở 5 Trần Phú</p>
                    </div>
                </div>
            </div>
  
            <p>ĐẶT HÀNG NGAY QUA   <br />CAFE App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
