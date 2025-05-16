
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-prevention-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <Logo size="md" withText={true} />
            </Link>
            <p className="text-sm text-gray-300 mt-4">
              Phần mềm hỗ trợ phòng ngừa sử dụng ma túy trong cộng đồng của tổ chức tình nguyện.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 border-l-4 border-health-500 pl-3">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Đánh giá rủi ro
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Đặt lịch hẹn
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 border-l-4 border-health-500 pl-3">Tài nguyên</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Hỏi đáp
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 border-l-4 border-health-500 pl-3">Liên hệ</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contact@prevention.org</p>
              <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (123) 456-7890</p>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Đường ABC, Thành phố XYZ</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} SafeLife - Phòng Chống Ma Túy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
