
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import AssessmentQuiz, { Quiz } from "../components/AssessmentQuiz";

// Sample quizzes data
const quizzes: Quiz[] = [
  {
    id: "assist",
    title: "Bài đánh giá ASSIST",
    description: "Công cụ sàng lọc mức độ nguy cơ sử dụng ma túy của Tổ chức Y tế Thế giới (WHO)",
    questions: [
      {
        id: "q1",
        text: "Trong cuộc đời bạn, bạn đã bao giờ sử dụng các chất như rượu, thuốc lá, cần sa, cocaine, các chất kích thích, thuốc an thần, hoặc các chất gây ảo giác khác?",
        options: [
          { id: "q1-a", text: "Không, chưa bao giờ", value: 0 },
          { id: "q1-b", text: "Có, nhưng đã hơn 3 tháng trước", value: 3 },
          { id: "q1-c", text: "Có, trong 3 tháng qua", value: 6 }
        ]
      },
      {
        id: "q2",
        text: "Trong 3 tháng qua, bạn có thường xuyên cảm thấy mong muốn mạnh mẽ hoặc thôi thúc sử dụng các chất (như rượu, thuốc lá, cần sa, ma túy, v.v.)?",
        options: [
          { id: "q2-a", text: "Không bao giờ", value: 0 },
          { id: "q2-b", text: "Một hoặc hai lần", value: 2 },
          { id: "q2-c", text: "Hàng tháng", value: 4 },
          { id: "q2-d", text: "Hàng tuần", value: 6 },
          { id: "q2-e", text: "Hàng ngày hoặc gần như hàng ngày", value: 8 }
        ]
      },
      {
        id: "q3",
        text: "Trong 3 tháng qua, việc sử dụng các chất gây nghiện có gây ra vấn đề về sức khỏe, xã hội, pháp luật hoặc tài chính cho bạn không?",
        options: [
          { id: "q3-a", text: "Không bao giờ", value: 0 },
          { id: "q3-b", text: "Một hoặc hai lần", value: 3 },
          { id: "q3-c", text: "Hàng tháng", value: 5 },
          { id: "q3-d", text: "Hàng tuần", value: 7 },
          { id: "q3-e", text: "Hàng ngày hoặc gần như hàng ngày", value: 9 }
        ]
      },
      {
        id: "q4",
        text: "Trong 3 tháng qua, bạn có không thể làm những việc bình thường được kỳ vọng vì đã sử dụng chất gây nghiện không?",
        options: [
          { id: "q4-a", text: "Không bao giờ", value: 0 },
          { id: "q4-b", text: "Một hoặc hai lần", value: 2 },
          { id: "q4-c", text: "Hàng tháng", value: 5 },
          { id: "q4-d", text: "Hàng tuần", value: 7 },
          { id: "q4-e", text: "Hàng ngày hoặc gần như hàng ngày", value: 9 }
        ]
      },
      {
        id: "q5",
        text: "Bạn bè, người thân hoặc người khác đã từng bày tỏ lo ngại về việc sử dụng chất gây nghiện của bạn chưa?",
        options: [
          { id: "q5-a", text: "Không, chưa từng", value: 0 },
          { id: "q5-b", text: "Có, nhưng không phải trong 3 tháng qua", value: 3 },
          { id: "q5-c", text: "Có, trong 3 tháng qua", value: 6 }
        ]
      }
    ]
  },
  {
    id: "crafft",
    title: "Bài đánh giá CRAFFT",
    description: "Công cụ sàng lọc dùng cho thanh thiếu niên về sử dụng ma túy và các hành vi nguy cơ cao",
    questions: [
      {
        id: "c1",
        text: "Trong 12 tháng qua, bạn có từng ngồi trên ô tô hoặc xe máy do người đã sử dụng rượu, bia hoặc ma túy điều khiển không?",
        options: [
          { id: "c1-a", text: "Không", value: 0 },
          { id: "c1-b", text: "Có", value: 1 }
        ]
      },
      {
        id: "c2",
        text: "Trong 12 tháng qua, bạn có từng sử dụng rượu, bia hoặc ma túy để thư giãn, cảm thấy tốt hơn về bản thân, hoặc hòa nhập không?",
        options: [
          { id: "c2-a", text: "Không", value: 0 },
          { id: "c2-b", text: "Có", value: 1 }
        ]
      },
      {
        id: "c3",
        text: "Trong 12 tháng qua, bạn có từng sử dụng rượu, bia hoặc ma túy khi đang ở một mình không?",
        options: [
          { id: "c3-a", text: "Không", value: 0 },
          { id: "c3-b", text: "Có", value: 1 }
        ]
      },
      {
        id: "c4",
        text: "Trong 12 tháng qua, bạn có từng quên những việc đã làm khi sử dụng rượu, bia hoặc ma túy không?",
        options: [
          { id: "c4-a", text: "Không", value: 0 },
          { id: "c4-b", text: "Có", value: 1 }
        ]
      },
      {
        id: "c5",
        text: "Trong 12 tháng qua, gia đình hoặc bạn bè có từng nói với bạn rằng bạn nên giảm sử dụng rượu, bia hoặc ma túy không?",
        options: [
          { id: "c5-a", text: "Không", value: 0 },
          { id: "c5-b", text: "Có", value: 1 }
        ]
      },
      {
        id: "c6",
        text: "Trong 12 tháng qua, bạn có từng gặp rắc rối khi sử dụng rượu, bia hoặc ma túy không?",
        options: [
          { id: "c6-a", text: "Không", value: 0 },
          { id: "c6-b", text: "Có", value: 1 }
        ]
      }
    ]
  }
];

const Assessment = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-prevention-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Đánh giá rủi ro sử dụng ma túy</h1>
          <p className="text-lg">
            Làm các bài khảo sát đánh giá để xác định mức độ nguy cơ sử dụng ma túy và nhận đề xuất hành động phù hợp
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {!selectedQuiz ? (
          <>
            <div className="flex items-center p-4 mb-8 bg-blue-50 border border-blue-200 rounded-md">
              <Info className="h-6 w-6 text-blue-500 mr-2" />
              <div>
                <h3 className="font-medium">Thông tin quan trọng</h3>
                <p className="text-sm text-muted-foreground">
                  Các bài đánh giá này chỉ mang tính chất tham khảo và không thay thế cho đánh giá chuyên môn. 
                  Mọi thông tin bạn cung cấp đều được giữ bí mật.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Chọn bài đánh giá phù hợp</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <Card 
                  key={quiz.id}
                  className="cursor-pointer transition-all hover:shadow-md"
                  onClick={() => setSelectedQuiz(quiz)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription className="mt-2">{quiz.description}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {quiz.questions.length} câu hỏi
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Thời gian hoàn thành: khoảng {quiz.questions.length * 30} giây
                      </div>
                      <Button onClick={() => setSelectedQuiz(quiz)}>
                        Bắt đầu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold mb-2">Về các bài đánh giá</h2>
              
              <Tabs defaultValue="assist">
                <TabsList>
                  <TabsTrigger value="assist">ASSIST</TabsTrigger>
                  <TabsTrigger value="crafft">CRAFFT</TabsTrigger>
                </TabsList>
                
                <TabsContent value="assist" className="space-y-4 pt-6">
                  <h3 className="text-xl font-medium">ASSIST là gì?</h3>
                  <p>
                    Alcohol, Smoking and Substance Involvement Screening Test (ASSIST) là công cụ sàng lọc do Tổ chức Y tế Thế giới (WHO) phát triển 
                    để phát hiện và can thiệp sớm đối với việc sử dụng rượu, thuốc lá và các chất ma túy.
                  </p>
                  
                  <h4 className="text-lg font-medium">ASSIST đánh giá những gì?</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Xác định các loại chất gây nghiện mà một người đã từng sử dụng trong đời</li>
                    <li>Đánh giá mức độ sử dụng các chất trong 3 tháng gần đây</li>
                    <li>Xác định các vấn đề liên quan đến việc sử dụng chất</li>
                    <li>Đánh giá nguy cơ gây hại hiện tại và trong tương lai</li>
                    <li>Xác định sự phụ thuộc hoặc sử dụng có hại</li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="crafft" className="space-y-4 pt-6">
                  <h3 className="text-xl font-medium">CRAFFT là gì?</h3>
                  <p>
                    CRAFFT là công cụ sàng lọc được thiết kế đặc biệt cho thanh thiếu niên để đánh giá việc sử dụng rượu và ma túy ở mức độ nguy hiểm. 
                    Tên "CRAFFT" là từ viết tắt của các từ khóa trong các câu hỏi đánh giá: Car, Relax, Alone, Forget, Friends, Trouble.
                  </p>
                  
                  <h4 className="text-lg font-medium">CRAFFT đánh giá những gì?</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Đi xe với người đã sử dụng rượu/ma túy</li>
                    <li>Sử dụng rượu/ma túy để thư giãn</li>
                    <li>Sử dụng chất khi ở một mình</li>
                    <li>Quên sự việc sau khi sử dụng chất</li>
                    <li>Phản hồi từ gia đình/bạn bè về việc sử dụng chất</li>
                    <li>Gặp rắc rối khi sử dụng chất</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={() => setSelectedQuiz(null)}
            >
              Quay lại danh sách bài đánh giá
            </Button>
            
            <AssessmentQuiz quiz={selectedQuiz} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
