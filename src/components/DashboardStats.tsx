
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const monthlyData = [
  { name: "T1", value: 45 },
  { name: "T2", value: 52 },
  { name: "T3", value: 49 },
  { name: "T4", value: 63 },
  { name: "T5", value: 58 },
  { name: "T6", value: 64 },
  { name: "T7", value: 78 },
  { name: "T8", value: 73 },
  { name: "T9", value: 67 },
  { name: "T10", value: 82 },
  { name: "T11", value: 86 },
  { name: "T12", value: 74 }
];

const ageDistribution = [
  { name: "Học sinh", value: 35 },
  { name: "Sinh viên", value: 40 },
  { name: "Phụ huynh", value: 15 },
  { name: "Giáo viên", value: 10 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const riskAssessmentData = [
  { name: "Thấp", value: 65 },
  { name: "Trung bình", value: 25 },
  { name: "Cao", value: 10 }
];

const RISK_COLORS = ["#4ADE80", "#FACC15", "#F87171"];

const courseCompletionData = [
  { name: "Khóa A", completed: 85, total: 100 },
  { name: "Khóa B", completed: 70, total: 100 },
  { name: "Khóa C", completed: 92, total: 100 },
  { name: "Khóa D", completed: 63, total: 100 },
  { name: "Khóa E", completed: 78, total: 100 }
];

interface DashboardStatsProps {
  // Add any props if needed
}

const DashboardStats = ({}: DashboardStatsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Người dùng đăng ký</CardTitle>
            <CardDescription>Tổng số người dùng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,453</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.5%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Khóa học đang học</CardTitle>
            <CardDescription>Số khóa học đã đăng ký</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">845</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8.2%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Lịch tư vấn</CardTitle>
            <CardDescription>Số buổi tư vấn đã hoàn thành</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+18.3%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Đánh giá rủi ro</CardTitle>
            <CardDescription>Số lần thực hiện đánh giá</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,287</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">-2.4%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Người dùng đăng ký theo tháng</CardTitle>
            <CardDescription>Thống kê số lượng người dùng mới theo tháng</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Người dùng"
                  stroke="#0080e6"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Phân bố độ tuổi người dùng</CardTitle>
            <CardDescription>Phân bố người dùng theo nhóm đối tượng</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="risk" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="risk">Kết quả đánh giá rủi ro</TabsTrigger>
          <TabsTrigger value="courses">Hoàn thành khóa học</TabsTrigger>
        </TabsList>
        
        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>Kết quả đánh giá nguy cơ sử dụng ma túy</CardTitle>
              <CardDescription>Phân bố các mức độ rủi ro qua bài đánh giá</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskAssessmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskAssessmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={RISK_COLORS[index % RISK_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Tỷ lệ hoàn thành khóa học</CardTitle>
              <CardDescription>Thống kê số học viên hoàn thành các khóa học</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={courseCompletionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="Hoàn thành" fill="#0080e6" />
                  <Bar dataKey="total" name="Tổng số" fill="#ccc" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardStats;
