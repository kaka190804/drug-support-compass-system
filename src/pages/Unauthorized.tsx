
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Không có quyền truy cập</h2>
        <p className="text-lg text-gray-600 mb-6">
          Bạn không có quyền truy cập vào trang này.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/">Trở về trang chủ</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/login">Đăng nhập với tài khoản khác</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
