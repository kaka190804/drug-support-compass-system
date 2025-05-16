
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-prevention-700 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Drug Use Prevention</h3>
            <p className="text-sm text-gray-300">
              Phần mềm hỗ trợ phòng ngừa sử dụng ma túy trong cộng đồng của tổ chức tình nguyện.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-gray-300 hover:text-white transition-colors">
                  Đánh giá rủi ro
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Đặt lịch hẹn
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Tài nguyên</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  Hỏi đáp
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <address className="not-italic text-gray-300">
              <p>Email: contact@prevention.org</p>
              <p>Điện thoại: (123) 456-7890</p>
              <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Drug Use Prevention Support System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
