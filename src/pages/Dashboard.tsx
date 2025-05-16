
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, DownloadIcon, FilterIcon, HomeIcon, UserIcon, BookOpenIcon, UsersIcon, MessageSquareIcon } from "lucide-react";
import DashboardStats from "../components/DashboardStats";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, hasPermission } = useAuth();
  
  // Check if user has permission to access the dashboard
  if (!hasPermission(["Staff", "Consultant", "Manager", "Admin"])) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-prevention-700 text-white py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-lg opacity-90">
            Xin chào, {user?.name}. Chào mừng quay trở lại hệ thống quản lý.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Tổng quan</h2>
            <p className="text-muted-foreground">
              Thống kê và báo cáo cho hoạt động phòng chống ma túy
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FilterIcon className="h-4 w-4" /> Lọc
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <DownloadIcon className="h-4 w-4" /> Xuất báo cáo
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Hành động</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Quản lý</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Tạo chương trình mới</DropdownMenuItem>
                <DropdownMenuItem>Quản lý người dùng</DropdownMenuItem>
                <DropdownMenuItem>Cài đặt hệ thống</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-8">
          <div className="bg-white rounded-lg border p-1">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" /> Tổng quan
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" /> Người dùng
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpenIcon className="h-4 w-4" /> Khóa học
              </TabsTrigger>
              <TabsTrigger value="programs" className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4" /> Chương trình
              </TabsTrigger>
              <TabsTrigger value="appointments" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" /> Lịch hẹn
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview">
            <DashboardStats />
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý người dùng</CardTitle>
                <CardDescription>Xem và quản lý tài khoản người dùng trong hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tên</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Vai trò</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Ngày đăng ký</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">001</td>
                          <td className="p-4 align-middle">Nguyễn Văn A</td>
                          <td className="p-4 align-middle">nguyenvana@email.com</td>
                          <td className="p-4 align-middle">Member</td>
                          <td className="p-4 align-middle">15/05/2025</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">002</td>
                          <td className="p-4 align-middle">Trần Thị B</td>
                          <td className="p-4 align-middle">tranthib@email.com</td>
                          <td className="p-4 align-middle">Staff</td>
                          <td className="p-4 align-middle">12/05/2025</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">003</td>
                          <td className="p-4 align-middle">Lê Văn C</td>
                          <td className="p-4 align-middle">levanc@email.com</td>
                          <td className="p-4 align-middle">Member</td>
                          <td className="p-4 align-middle">10/05/2025</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Hiển thị 3 của 253 người dùng
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Trước</Button>
                  <Button variant="outline" size="sm">Tiếp</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý khóa học</CardTitle>
                <CardDescription>Xem và quản lý các khóa học trên hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tên khóa học</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Danh mục</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Đối tượng</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Học viên</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">001</td>
                          <td className="p-4 align-middle">Nhận thức về ma túy và tác hại</td>
                          <td className="p-4 align-middle">Nhận thức</td>
                          <td className="p-4 align-middle">Học sinh</td>
                          <td className="p-4 align-middle">245</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">002</td>
                          <td className="p-4 align-middle">Kỹ năng từ chối ma túy hiệu quả</td>
                          <td className="p-4 align-middle">Kỹ năng</td>
                          <td className="p-4 align-middle">Sinh viên</td>
                          <td className="p-4 align-middle">187</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">003</td>
                          <td className="p-4 align-middle">Hướng dẫn phụ huynh về phòng chống ma túy</td>
                          <td className="p-4 align-middle">Giáo dục</td>
                          <td className="p-4 align-middle">Phụ huynh</td>
                          <td className="p-4 align-middle">126</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">Xem</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Hiển thị 3 của 8 khóa học
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Trước</Button>
                  <Button variant="outline" size="sm">Tiếp</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý chương trình</CardTitle>
                <CardDescription>Xem và quản lý các chương trình truyền thông giáo dục</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tên chương trình</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Thời gian</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Địa điểm</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Người tham gia</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">001</td>
                          <td className="p-4 align-middle">Ngày hội phòng chống ma túy trong trường học</td>
                          <td className="p-4 align-middle">26/06/2025</td>
                          <td className="p-4 align-middle">Trường THPT Nguyễn Trãi</td>
                          <td className="p-4 align-middle">850</td>
                          <td className="p-4 align-middle">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Sắp diễn ra</span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">002</td>
                          <td className="p-4 align-middle">Chiến dịch "Nói không với ma túy"</td>
                          <td className="p-4 align-middle">01/05/2025 - 30/05/2025</td>
                          <td className="p-4 align-middle">Toàn quốc</td>
                          <td className="p-4 align-middle">12500</td>
                          <td className="p-4 align-middle">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Đang diễn ra</span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">003</td>
                          <td className="p-4 align-middle">Hội thảo phòng ngừa ma túy cho phụ huynh</td>
                          <td className="p-4 align-middle">15/04/2025</td>
                          <td className="p-4 align-middle">Trung tâm hội nghị</td>
                          <td className="p-4 align-middle">320</td>
                          <td className="p-4 align-middle">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Đã kết thúc</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Hiển thị 3 của 12 chương trình
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Trước</Button>
                  <Button variant="outline" size="sm">Tiếp</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý lịch hẹn</CardTitle>
                <CardDescription>Xem và quản lý các lịch hẹn tư vấn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Người dùng</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Chuyên viên tư vấn</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Thời gian</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Hình thức</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">001</td>
                          <td className="p-4 align-middle">Nguyễn Văn A</td>
                          <td className="p-4 align-middle">TS. Nguyễn Văn A</td>
                          <td className="p-4 align-middle">18/05/2025 09:00</td>
                          <td className="p-4 align-middle">Trực tuyến</td>
                          <td className="p-4 align-middle">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Sắp tới</span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">002</td>
                          <td className="p-4 align-middle">Trần Thị B</td>
                          <td className="p-4 align-middle">BS. Lê Văn C</td>
                          <td className="p-4 align-middle">16/05/2025 14:30</td>
                          <td className="p-4 align-middle">Trực tiếp</td>
                          <td className="p-4 align-middle">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Đã xác nhận</span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">003</td>
                          <td className="p-4 align-middle">Lê Văn C</td>
                          <td className="p-4 align-middle">ThS. Trần Thị B</td>
                          <td className="p-4 align-middle">15/05/2025 10:00</td>
                          <td className="p-4 align-middle">Trực tuyến</td>
                          <td className="p-4 align-middle">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Đã hoàn thành</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Hiển thị 3 của 128 lịch hẹn
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Trước</Button>
                  <Button variant="outline" size="sm">Tiếp</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
