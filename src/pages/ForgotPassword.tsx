
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Yêu cầu đặt lại mật khẩu đã được gửi",
        description: "Kiểm tra email của bạn để nhận hướng dẫn đặt lại mật khẩu.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Quên mật khẩu</h1>
          <p className="text-muted-foreground mt-2">
            Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
          </p>
        </div>
        
        <Card>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Đặt lại mật khẩu</CardTitle>
                <CardDescription>
                  Chúng tôi sẽ gửi đường dẫn đặt lại mật khẩu đến email của bạn
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button 
                  type="submit" 
                  className="w-full mb-4" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi liên kết đặt lại"}
                </Button>
                <p className="text-center text-sm">
                  <Link to="/login" className="text-prevention-600 hover:underline">
                    Quay lại trang đăng nhập
                  </Link>
                </p>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="py-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-green-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Kiểm tra email của bạn</h3>
                <p className="text-muted-foreground">
                  Chúng tôi đã gửi liên kết đặt lại mật khẩu đến <strong>{email}</strong>. 
                  Vui lòng kiểm tra hộp thư đến và thư rác.
                </p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Thử lại với email khác
                </Button>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
