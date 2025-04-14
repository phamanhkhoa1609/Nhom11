import Iphone16 from '../assets/Iphone16.png';
import Iphone16Pink from '../assets/iphone16pink.png';
import Iphone16Black from '../assets/iphone16black.png';
import Iphone15 from '../assets/iphone15.png';
import Iphone15Blue from '../assets/iphon15blue.png';
import Iphone15Black from '../assets/iphone15black.png';
import Samsung from '../assets/samsung.png';
import SamsungBlue from '../assets/samsungblue.png';
import SamsungPurple from '../assets/samsungpurple.png';
import MacbookPro from '../assets/macbookpro.png';
import MsiLaptop from '../assets/msilaptop.png';
import AsusLaptop from '../assets/asuslaptop.png';
import IpadPro from '../assets/ipadpro.png';
import IpadPro11 from '../assets/ipadpro11.png';
import SurfacePro from '../assets/Surfacepro.png';
import Accessories1 from '../assets/acesories1.png';
import Accessories2 from '../assets/acesories2.png';
import Accessories3 from '../assets/acesories3.png';
import Iphone12 from '../assets/iphone12.png';
import Iphone12Blue from '../assets/iphone12blue.png';
import Iphone12Black from '../assets/iphone12black.png';
import DellLaptop from '../assets/delllaptop.png';
import IpadPro2020 from '../assets/ipadpro2020.png';
import HeadphoneBluetooth from '../assets/headphonebluetooth.png';

export const products = [
   { 
    id:'1',name: 'Iphone 16', price: 1300, image: Iphone16, category: 'SmartPhone',  brand: 'Apple',warranty: '12 tháng',
    description: [
      "Màn hình: 6.8 inch",
      "Chip xử lý: A18 Pro",
      "RAM: 12 GB", 
      "ROM: 256 GB",
      "Dung lượng pin: 5000 mAh"
    ],
    colors: [
      { colorName: 'Xanh', image: Iphone16 },
      { colorName: 'Hồng', image: Iphone16Pink },
      { colorName: 'Đen', image: Iphone16Black }
    ],
    seller: {
      id: '12345',  // ID của người bán
      name: 'Nguyễn Văn A', // Tên người bán
      contact: 'nguyenvana@gmail.com', // Email hoặc số điện thoại
      rating: 4.8, // Đánh giá trung bình của người bán
      totalSales: 50, // Tổng sản phẩm đã bán
    }
  },
  { 
    id:'2',name: 'Iphone 15', price: 1000, image: Iphone15, category: 'SmartPhone',  brand: 'Apple',warranty: '12 tháng',
    description: [
      "Màn hình: 6.9 inch",
      "Chip xử lý: A16 Bionic",
      "RAM: 12 GB",
      "ROM: 512 GB",
      "Dung lượng pin: 6000 mAh"
    ],
    colors: [
      { colorName: 'Hồng', image: Iphone15 },
      { colorName: 'Xanh', image: Iphone15Blue },
      { colorName: 'Đen', image: Iphone15Black }
    ]  
  },
  { 
    id:'3',name: 'SamSung S24 Ultra', price: 800, image: Samsung, category: 'SmartPhone', brand: 'Samsung',warranty: '12 tháng',
    description: [
      "Màn hình: 6.9 inch",
      "Chip xử lý: Snapdragon 8 Gen 3",
      "RAM: 12 GB",
      "ROM: 512 GB",
      "Dung lượng pin: 6000 mAh"
    ],
    colors: [
      { colorName: 'Bạc', image: Samsung },
      { colorName: 'Xanh', image: SamsungBlue },
      { colorName: 'Tím', image: SamsungPurple }
    ]   
  },
  { 
    id:'4',name: 'MacBook Pro Max', price: 4400, image: MacbookPro, category: 'Laptop',  brand: 'Apple',warranty: '24 tháng',
    description: [
      "Màn hình: 14.2 inch Retina XDR",
      "Chip xử lý: Apple M1 Max",
      "RAM: 32 GB",
      "ROM: 1 TB SSD",
      "Thời lượng pin: Lên đến 17 giờ"
    ]
  },
  { 
    id:'5',name: 'MSI Titan 18HX', price: 5000, image: MsiLaptop, category: 'Laptop',  brand: 'MSI',warranty: '12 tháng',
    description: [
      "Màn hình: 18.4 inch UHD 4K",
      "Chip xử lý: Intel Core i9-13900HX",
      "RAM: 64 GB",
      "ROM: 2 TB SSD",
      "Card đồ họa: NVIDIA GeForce RTX 4090"
    ]
  },
  { 
    id:'6',name: 'ASUS ROG G834', price: 4000, image: AsusLaptop, category: 'Laptop',  brand: 'ASUS',warranty: '12 tháng',
    description: [
      "Màn hình: 17.3 inch QHD 240Hz",
      "Chip xử lý: AMD Ryzen 9 7945HX",
      "RAM: 32 GB", 
      "ROM: 1 TB SSD",
      "Card đồ họa: NVIDIA GeForce RTX 4080"
    ]
  },
  { 
    id:'7',name: 'Ipad Pro M2 2022', price: 1100, image: IpadPro, category: 'Tablet',  brand: 'Apple',warranty: '12 tháng',
    description: [
      "Màn hình: 12.9 inch Liquid Retina XDR",
      "Chip xử lý: Apple M2",
      "RAM: 8 GB",
      "ROM: 512 GB",
      "Camera: 12MP Ultra Wide"
    ]
  },
  { 
    id:'8',name: 'Ipad Pro M1 2021', price: 900,  image: IpadPro11, category: 'Tablet',  brand: 'Apple',warranty: '12 tháng',
    description: [
      "Màn hình: 11 inch Liquid Retina",
      "Chip xử lý: Apple M1",
      "RAM: 8 GB",
      "ROM: 256 GB",
      "Camera: 12MP Ultra Wide"
    ]
  },
  { 
    id:'9',name: 'Surface Pro 11', price: 800, image: SurfacePro, category: 'Tablet',  brand: 'Microsoft',warranty: '12 tháng',
    description: [
      "Màn hình: 13 inch PixelSense",
      "Chip xử lý: Intel Core i7",
      "RAM: 16 GB",
      "ROM: 512 GB",
      "Thời lượng pin: Lên đến 15 giờ"
    ]
  },
  { 
    id:'10',name: 'AirPods 2', price: 1100, image: Accessories1, category: 'Accessories',  brand: 'Apple',warranty: '6 tháng',
    description: [
      "Chip xử lý: H1",
      "Thời gian nghe nhạc: Lên đến 5 giờ",
      "Tính năng: Kết nối Bluetooth, tự động ghép nối",
      "Kháng nước: IPX4"
    ]
  },
  { 
    id:'11',name: 'GM83 Mouse', price: 900, image: Accessories2, category: 'Accessories',  brand: 'Logitech',warranty: '12 tháng',
    description: [
      "Cảm biến: Optical",
      "DPI: Lên đến 16,000",
      "Kết nối: USB, không dây",
      "Đèn LED RGB có thể điều chỉnh"
    ]
  },
  { 
    id:'12',name: 'HeadPhone BGH99', price: 800, image: Accessories3, category: 'Accessories',  brand: 'Sony',warranty: '12 tháng',
    description: [
      "Kiểu: Over-ear",
      "Tính năng: Khử tiếng ồn chủ động",
      "Thời gian pin: Lên đến 20 giờ",
      "Kết nối: Bluetooth 5.0, dây 3.5mm"
    ]
  },
  { 
  id:'13',name: 'Iphone 12', price: 800,  discountPrice: 500,image: Iphone12,  category: 'SmartPhone',brand: 'Apple',warranty: '12 tháng',
    description: [
      "Màn hình: 6.1 inch OLED",
      "Chip xử lý: A14 Bionic",
      "RAM: 4 GB", 
      "ROM: 128 GB",
      "Dung lượng pin: 2815 mAh"
    ],
    colors: [
      { colorName: 'Tím', image: Iphone12 },
      { colorName: 'Xanh', image: Iphone12Blue },
      { colorName: 'Đen', image: Iphone12Black }
    ]
  },
  { 
    id:'14',name: 'Dell Laptop', price: 800,  discountPrice: 400, image: DellLaptop, category: 'Laptop',brand: 'Dell',warranty: '12 tháng',
    description: [
      "Màn hình: 15.6 inch Full HD",
      "Chip xử lý: Intel Core i5",
      "RAM: 8 GB", 
      "ROM: 256 GB SSD",
      "Thời lượng pin: Lên đến 10 giờ"
    ]
  },
  { 
id:'15',name: 'Ipad Pro 2020', price: 900,   discountPrice: 500, image: IpadPro2020, category: 'Tablet',brand: 'Apple',warranty:'12 tháng',
    description: [
      "Màn hình: 12.9 inch Liquid Retina",
      "Chip xử lý: Apple A12Z Bionic",
      "RAM: 6 GB",
      "ROM: 512 GB",
      "Camera: 12MP Ultra Wide"
    ]
  },
  { 
    id:'16',name: 'HeadPhone 2020', price: 600,  discountPrice: 100, image: HeadphoneBluetooth, category: 'Accessories',
    brand: 'Sony',
    warranty: '6 tháng',
    description: [
      "Kiểu: On-ear",
      "Tính năng: Khử tiếng ồn thụ động",
      "Thời gian pin: Lên đến 10 giờ",
      "Kết nối: Bluetooth 4.2, dây 3.5mm",
      "Chất lượng âm thanh: Âm bass mạnh mẽ, âm thanh trong trẻo"
    ]
  }
];