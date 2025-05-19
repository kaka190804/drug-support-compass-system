
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Điều khoản và điều kiện</h1>
          <p className="text-muted-foreground">
            Cập nhật lần cuối: Ngày 19 tháng 5 năm 2025
          </p>
        </div>
        
        <div className="prose max-w-none">
          <h2>1. Giới thiệu</h2>
          <p>
            Chào mừng bạn đến với SafeLife ("Công ty", "chúng tôi", "của chúng tôi"). Khi bạn sử dụng nền tảng của chúng tôi, 
            bạn đồng ý tuân theo các điều khoản và điều kiện này, bao gồm chính sách bảo mật của chúng tôi ("Điều khoản"). 
            Vui lòng đọc kỹ các điều khoản này.
          </p>

          <h2>2. Tài khoản người dùng</h2>
          <p>
            Khi bạn tạo tài khoản với chúng tôi, bạn phải cung cấp thông tin chính xác, đầy đủ và cập nhật mọi lúc. 
            Thông tin không chính xác, không đầy đủ hoặc lỗi thời có thể dẫn đến việc chấm dứt tài khoản của bạn trên nền tảng của chúng tôi.
          </p>
          <p>
            Bạn chịu trách nhiệm bảo mật mật khẩu của mình, bao gồm cả mật khẩu tài khoản và mật khẩu của bất kỳ dịch vụ bên thứ ba nào được liên kết với tài khoản của bạn. 
            Bạn đồng ý không tiết lộ mật khẩu của mình cho bất kỳ bên thứ ba nào.
          </p>

          <h2>3. Quyền riêng tư</h2>
          <p>
            Chính sách bảo mật của chúng tôi mô tả cách chúng tôi xử lý thông tin cá nhân của bạn và bảo vệ quyền riêng tư của bạn. 
            Bằng cách sử dụng nền tảng của chúng tôi, bạn đồng ý với việc chúng tôi thu thập và sử dụng thông tin như được mô tả trong Chính sách Bảo mật.
          </p>

          <h2>4. Quy tắc ứng xử</h2>
          <p>
            Bằng cách sử dụng nền tảng của chúng tôi, bạn đồng ý không:
          </p>
          <ul>
            <li>Vi phạm bất kỳ luật hoặc quy định nào</li>
            <li>Xâm phạm quyền sở hữu trí tuệ hoặc bất kỳ quyền nào khác của bất kỳ người nào</li>
            <li>Đe dọa, quấy rối hoặc đe dọa bất kỳ người nào hoặc thúc đẩy bạo lực đối với bất kỳ người hoặc nhóm nào</li>
            <li>Đăng nội dung lừa đảo, sai sự thật hoặc gây hiểu lầm</li>
            <li>Đăng nội dung khiêu dâm, khiếm nhã hoặc xúc phạm</li>
            <li>Thu thập thông tin cá nhân của người dùng khác</li>
            <li>Truy cập trái phép vào bất kỳ hệ thống nào</li>
            <li>Can thiệp vào hoạt động của nền tảng</li>
          </ul>

          <h2>5. Giới hạn trách nhiệm</h2>
          <p>
            Trong mọi trường hợp, chúng tôi sẽ không chịu trách nhiệm với bạn về bất kỳ tổn thất hoặc thiệt hại gián tiếp, 
            do hậu quả, đặc biệt, trừng phạt hoặc ngẫu nhiên phát sinh từ hoặc liên quan đến việc sử dụng hoặc không thể sử dụng dịch vụ.
          </p>

          <h2>6. Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có thể sửa đổi Điều khoản liên quan đến nền tảng tùy từng thời điểm. 
            Khi chúng tôi thay đổi Điều khoản theo cách quan trọng, chúng tôi sẽ cung cấp thông báo phù hợp với hoàn cảnh, 
            chẳng hạn như hiển thị thông báo nổi bật trong nền tảng của chúng tôi hoặc gửi email cho bạn.
          </p>

          <h2>7. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại:
          </p>
          <p>
            <strong>SafeLife</strong><br />
            Email: support@safelife.example.com<br />
            Điện thoại: (123) 456-7890
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/register">Quay lại đăng ký</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
