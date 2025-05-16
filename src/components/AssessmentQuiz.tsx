
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { CalendarClock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export interface Question {
  id: string;
  text: string;
  options: Array<{
    id: string;
    text: string;
    value: number;
  }>;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface QuizResults {
  score: number;
  riskLevel: "low" | "moderate" | "high";
  recommendation: string;
  actions: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
  }[];
}

interface AssessmentQuizProps {
  quiz: Quiz;
}

const AssessmentQuiz = ({ quiz }: AssessmentQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QuizResults | null>(null);

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [quiz.questions[currentQuestion].id]: value
    });
  };

  const calculateResults = () => {
    // Calculate score based on selected answers
    let totalScore = 0;
    
    Object.keys(answers).forEach(questionId => {
      const question = quiz.questions.find(q => q.id === questionId);
      if (question) {
        const selectedOption = question.options.find(opt => opt.id === answers[questionId]);
        if (selectedOption) {
          totalScore += selectedOption.value;
        }
      }
    });
    
    // Determine risk level based on score
    let riskLevel: "low" | "moderate" | "high" = "low";
    let recommendation = "";
    let actions = [];
    
    // For a simple ASSIST or CRAFFT style quiz
    // These thresholds would be determined by the specific assessment tool
    if (totalScore <= 10) {
      riskLevel = "low";
      recommendation = "Rủi ro thấp. Bạn có thể tiếp tục tìm hiểu thêm thông tin về phòng ngừa sử dụng ma túy.";
      actions = [
        {
          title: "Tham gia khóa học phòng ngừa",
          description: "Tìm hiểu thêm về nhận thức và kỹ năng phòng tránh cơ bản.",
          link: "/courses",
          icon: <BookOpen className="h-5 w-5" />
        }
      ];
    } else if (totalScore <= 20) {
      riskLevel = "moderate";
      recommendation = "Rủi ro trung bình. Chúng tôi khuyến nghị bạn nên tham gia các khóa học kỹ năng phòng tránh và từ chối.";
      actions = [
        {
          title: "Tham gia khóa học kỹ năng từ chối",
          description: "Học cách từ chối hiệu quả trong các tình huống áp lực.",
          link: "/courses?category=refusal-skills",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          title: "Tư vấn trực tuyến",
          description: "Đặt lịch hẹn với chuyên viên tư vấn để được hỗ trợ.",
          link: "/appointment",
          icon: <CalendarClock className="h-5 w-5" />
        }
      ];
    } else {
      riskLevel = "high";
      recommendation = "Rủi ro cao. Chúng tôi đề xuất bạn nên gặp chuyên viên tư vấn ngay để được hỗ trợ kịp thời.";
      actions = [
        {
          title: "Đặt lịch tư vấn khẩn cấp",
          description: "Gặp chuyên viên tư vấn trong 24 giờ tới để được hỗ trợ.",
          link: "/appointment?urgent=true",
          icon: <CalendarClock className="h-5 w-5" />
        }
      ];
    }
    
    setResults({
      score: totalScore,
      riskLevel,
      recommendation,
      actions
    });
    
    setShowResults(true);
  };
  
  const currentQuestionObj = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  
  const isAnswered = answers[currentQuestionObj?.id];
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      
      {!showResults ? (
        <>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Câu hỏi {currentQuestion + 1} / {quiz.questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">{currentQuestionObj.text}</h3>
              
              <RadioGroup
                value={answers[currentQuestionObj.id] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestionObj.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 border rounded-md p-3 hover:bg-accent">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-grow cursor-pointer py-1">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Quay lại
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestion < quiz.questions.length - 1 ? "Tiếp theo" : "Xem kết quả"}
            </Button>
          </CardFooter>
        </>
      ) : (
        <CardContent className="space-y-6">
          <Alert
            className={`${
              results?.riskLevel === "low"
                ? "bg-green-50 border-green-200"
                : results?.riskLevel === "moderate"
                ? "bg-yellow-50 border-yellow-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <AlertTitle className="text-lg">
              Rủi ro {
                results?.riskLevel === "low"
                  ? "Thấp"
                  : results?.riskLevel === "moderate"
                  ? "Trung bình"
                  : "Cao"
              }
            </AlertTitle>
            <AlertDescription>{results?.recommendation}</AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Đề xuất:</h3>
            <div className="grid gap-4">
              {results?.actions.map((action, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4 pb-0">
                    <div className="flex gap-2 items-center">
                      {action.icon}
                      <CardTitle className="text-base">{action.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <CardDescription>{action.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link to={action.link}>Hành động ngay</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
              setAnswers({});
            }}>
              Làm lại bài đánh giá
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AssessmentQuiz;
