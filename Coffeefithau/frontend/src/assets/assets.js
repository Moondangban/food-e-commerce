import basket_icon from './basket_icon.png'
import logo from './logo01.png'
import header_img from './hero.png'
import search_icon from './search_icon.png'
import menu_1 from './Truyenthong.jpg'
import menu_2 from './Hiendai.jpg'
import menu_3 from './Trahoaqua.jpg'
import menu_4 from './Frezee.jpg'
import menu_5 from './Sinhto.jpg'
import menu_6 from './Suachua.jpg'
import menu_7 from './Huongduong.jpg'
import menu_8 from './Banh.jpg'

import food_1 from './food_1.jpg'
import food_2 from './food_2.jpg'
import food_3 from './food_3.jpg'
import food_4 from './food_4.jpg'
import food_5 from './food_5.jpg'
import food_6 from './food_6.jpg'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'
import un_checked from './un_checked.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked,
    un_checked
}

export const menu_list = [
    {
        menu_name: "Truyenthong",
        menu_display: "Truyền thống",
        menu_image: menu_1
    },
    {
        menu_name: "Hiendai",
        menu_display: "Hiện đại",
        menu_image: menu_2
    },
    {
        menu_name: "Trahoaqua",
        menu_display: "Trà hoa quả",
        menu_image: menu_3
    },
    {
        menu_name: "Freeze",
        menu_display: "Freeze",
        menu_image: menu_4
    },
    {
        menu_name: "Sinhto",
        menu_display: "Sinh tố",
        menu_image: menu_5
    },
    {
        menu_name: "Suachua",
        menu_display: "Sữa chua",
        menu_image: menu_6
    },
    {
        menu_name: "Doankhac",
        menu_display: "Đồ ăn khác",
        menu_image: menu_7
    },
    {
        menu_name: "Banh",
        menu_display: "Bánh",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Bạc xỉu",
        image: food_1,
        price: 30000,
        description: "Được pha chế từ cà phê phin, sữa đặc và sữa tươi, bạc xỉu có vị ngọt béo nổi bật, kết hợp nhẹ nhàng với hương cà phê. Thức uống này thích hợp cho những ai thích thưởng thức cà phê nhưng không quá đậm và đắng.",
        category: "Truyền thống"
    },
    {
        _id: "2",
        name: "Đen đá",
        image: food_2,
        price: 25000,
        description: "Không cầu kỳ, chỉ cà phê phin nguyên chất kết hợp với đá lạnh, mang đến cảm giác sảng khoái, tỉnh táo tức thì. Một ngụm thôi, bạn sẽ cảm nhận được sự mạnh mẽ, thuần khiết của cà phê, đánh thức mọi giác quan",
        category: "Truyền thống"
    }, {
        _id: "3",
        name: "Cafe sữa",
        image: food_3,
        price: 30000,
        description: "Với hương vị cân bằng giữa sự mạnh mẽ của cà phê và sự béo ngậy của sữa, Cà phê sữa mang đến trải nghiệm vừa thơm vừa ngọt, khiến bạn không thể nào quên.",
        category: "Truyền thống"
    }, {
        _id: "4",
        name: "Cappuccino",
        image: food_4,
        price: 35000,
        description: "Với hương vị đậm đà nhưng lại nhẹ nhàng, cappuccino mang đến một trải nghiệm cà phê tinh tế, đầy lôi cuốn. Lớp bọt sữa mịn màng không chỉ tạo nên vẻ đẹp mắt mà còn giúp cân bằng sự đắng của cà phê, tạo cảm giác thư giãn và dễ chịu",
        category: "Hiendai"
    }, {
        _id: "5",
        name: "Espresso",
        image: food_5,
        price: 35000,
        description: "Được chiết xuất từ những hạt cà phê tươi ngon dưới áp lực cao, espresso mang đến hương vị đậm đặc, sắc nét, với một lớp crema vàng mịn màng trên bề mặt.",
        category: "Hiendai"
    }, {
        _id: "6",
        name: "Trà việt quất",
        image: food_6,
        price: 55000,
        description: "Với hương việt quất nhẹ nhàng nhưng đậm đà, trà việt quất không chỉ giải khát mà còn giúp thư giãn tinh thần, kích thích cảm giác sảng khoái. Thích hợp để thưởng thức vào bất kỳ thời điểm nào trong ngày, đặc biệt là trong những ngày hè oi ả",
        category: "Trahoaqua"
    }
]
