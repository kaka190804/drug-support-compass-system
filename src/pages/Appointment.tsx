
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentScheduler, { Consultant } from "../components/AppointmentScheduler";

// Sample consultants data
const consultants: Consultant[] = [
  {
    id: "1",
    name: "TS. Nguyễn Văn A",
    specialization: "Tâm lý học lâm sàng",
    experience: "15 năm kinh nghiệm",
    bio: "Chuyên gia tư vấn với 15 năm kinh nghiệm trong lĩnh vực tâm lý học lâm sàng, tập trung vào vấn đề nghiện và phục hồi.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    availability: {
      "Thứ 2": ["09:00", "09:30", "10:00", "13:30", "14:00"],
      "Thứ 3": ["13:00", "13:30", "14:00", "15:30"],
      "Thứ 5": ["09:00", "09:30", "10:00", "10:30", "11:00"],
      "Thứ 6": ["13:00", "13:30", "14:00", "14:30"]
    }
  },
  {
    id: "2",
    name: "ThS. Trần Thị B",
    specialization: "Công tác xã hội",
    experience: "8 năm kinh nghiệm",
    bio: "Chuyên viên tư vấn với kinh nghiệm làm việc với thanh thiếu niên và các vấn đề liên quan đến ma túy trong cộng đồng.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    availability: {
      "Thứ 2": ["13:00", "13:30", "14:00", "14:30"],
      "Thứ 4": ["09:00", "09:30", "10:00", "15:30", "16:00"],
      "Thứ 6": ["09:00", "09:30", "14:00", "14:30"]
    }
  },
  {
    id: "3",
    name: "BS. Lê Văn C",
    specialization: "Y học cai nghiện",
    experience: "12 năm kinh nghiệm",
    bio: "Bác sĩ chuyên khoa với chuyên môn về tác động của ma túy đối với sức khỏe và các phương pháp cai nghiện hiệu quả.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: {
      "Thứ 3": ["09:00", "09:30", "10:00", "10:30"],
      "Thứ 5": ["13:00", "13:30", "14:00", "14:30", "15:00"],
      "Thứ 7": ["09:00", "09:30", "10:00", "10:30"]
    }
  }
];

const Appointment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-prevention-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Đặt lịch hẹn với chuyên viên tư vấn</h1>
          <p className="text-lg">
            Được tư vấn riêng tư và chuyên sâu từ các chuyên viên có trình độ chuyên môn về phòng ngừa sử dụng ma túy
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="schedule">Đặt lịch hẹn</TabsTrigger>
            <TabsTrigger value="info">Thông tin tư vấn</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="space-y-6">
            <AppointmentScheduler consultants={consultants} />
          </TabsContent>
          
          <TabsContent value="info" className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Về dịch vụ tư vấn</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Tư vấn trực tuyến</h3>
                  <p>
                    Dịch vụ tư vấn trực tuyến giúp bạn kết nối với chuyên viên tư vấn từ bất kỳ đâu thông qua video call. 
                    Đây là một lựa chọn thuận tiện nếu bạn không thể đến trực tiếp hoặc muốn giữ sự riêng tư tối đa.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Thời gian: 45-60 phút mỗi buổi</li>
                    <li>Công cụ: Google Meet hoặc Zoom</li>
                    <li>Yêu cầu: Kết nối internet ổn định, webcam và microphone</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Tư vấn trực tiếp</h3>
                  <p>
                    Nếu bạn ưa thích gặp gỡ trực tiếp, chúng tôi cũng cung cấp dịch vụ tư vấn tại các văn phòng đặt ở nhiều khu vực. 
                    Buổi tư vấn trực tiếp tạo cơ hội tương tác tốt hơn và phù hợp với những ai cảm thấy thoải mái khi gặp mặt.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Thời gian: 60-90 phút mỗi buổi</li>
                    <li>Địa điểm: Các văn phòng tư vấn tại Hà Nội, TP.HCM, Đà Nẵng</li>
                    <li>Lưu ý: Vui lòng đến sớm 15 phút để hoàn thành thủ tục</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Đội ngũ chuyên viên tư vấn</h2>
              <p className="mb-6">
                Đội ngũ tư vấn của chúng tôi gồm các chuyên gia được đào tạo chuyên nghiệp và có nhiều kinh nghiệm 
                trong lĩnh vực tâm lý, công tác xã hội, y học và giáo dục. Tất cả chuyên viên đều cam kết hỗ trợ 
                bạn trong hành trình phòng ngừa và vượt qua các thách thức liên quan đến ma túy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-prevention-50 p-4 rounded-md">
                  <h3 className="font-bold mb-2">Chuyên gia Tâm lý</h3>
                  <p className="text-sm">
                    Các nhà tâm lý học với chuyên môn về sức khỏe tâm thần, hành vi nghiện và trị liệu tâm lý.
                  </p>
                </div>
                <div className="bg-prevention-50 p-4 rounded-md">
                  <h3 className="font-bold mb-2">Chuyên gia Công tác xã hội</h3>
                  <p className="text-sm">
                    Các nhân viên xã hội chuyên về hỗ trợ cộng đồng và giải quyết các vấn đề xã hội liên quan đến ma túy.
                  </p>
                </div>
                <div className="bg-prevention-50 p-4 rounded-md">
                  <h3 className="font-bold mb-2">Bác sĩ chuyên khoa</h3>
                  <p className="text-sm">
                    Các bác sĩ có chuyên môn về y học cai nghiện và tác động của ma túy đối với sức khỏe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Câu hỏi thường gặp</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Chi phí tư vấn là bao nhiêu?</h3>
                  <p className="text-muted-foreground">
                    Dịch vụ tư vấn của chúng tôi được cung cấp miễn phí nhờ nguồn tài trợ từ các tổ chức phi lợi nhuận và chính phủ.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Thông tin tư vấn có được bảo mật không?</h3>
                  <p className="text-muted-foreground">
                    Có, tất cả thông tin cá nhân và nội dung tư vấn đều được bảo mật nghiêm ngặt theo quy định nghề nghiệp và pháp luật hiện hành.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Tôi có thể hủy hoặc đổi lịch hẹn không?</h3>
                  <p className="text-muted-foreground">
                    Có, bạn có thể hủy hoặc đổi lịch hẹn trước 24 giờ. Vui lòng liên hệ với chúng tôi qua email hoặc điện thoại.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Tôi cần chuẩn bị gì trước buổi tư vấn?</h3>
                  <p className="text-muted-foreground">
                    Chỉ cần chuẩn bị tinh thần thoải mái và sẵn sàng chia sẻ. Nếu có bất kỳ câu hỏi hoặc mối quan tâm cụ thể, bạn có thể ghi chú lại để thảo luận.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Có giới hạn số buổi tư vấn không?</h3>
                  <p className="text-muted-foreground">
                    Không có giới hạn cứng, nhưng chúng tôi thường đề xuất từ 3-5 buổi tư vấn ban đầu tùy thuộc vào nhu cầu cá nhân.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Appointment;
