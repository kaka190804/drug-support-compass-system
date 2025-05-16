
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import CourseCard, { Course } from "../components/CourseCard";

// Sample course data
const coursesData: Course[] = [
  {
    id: "1",
    title: "Nhận thức về ma túy và tác hại",
    description: "Khóa học cung cấp kiến thức cơ bản về các loại ma túy phổ biến, tác hại và hậu quả của việc sử dụng ma túy.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Nhận thức",
    level: "Cơ bản",
    duration: "4 tuần",
    targetAudience: ["Học sinh", "Sinh viên"]
  },
  {
    id: "2",
    title: "Kỹ năng từ chối ma túy hiệu quả",
    description: "Học các kỹ năng cụ thể để từ chối ma túy một cách hiệu quả trong các tình huống áp lực từ bạn bè và môi trường.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Kỹ năng",
    level: "Trung bình",
    duration: "3 tuần",
    targetAudience: ["Học sinh", "Sinh viên"]
  },
  {
    id: "3",
    title: "Hướng dẫn phụ huynh về phòng chống ma túy",
    description: "Khóa học dành cho phụ huynh về cách nhận biết dấu hiệu sử dụng ma túy và kỹ năng giao tiếp với con em về vấn đề này.",
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Giáo dục",
    level: "Cơ bản",
    duration: "5 tuần",
    targetAudience: ["Phụ huynh"]
  },
  {
    id: "4",
    title: "Xây dựng môi trường học đường không ma túy",
    description: "Khóa học dành cho giáo viên và nhân viên nhà trường về cách xây dựng và duy trì môi trường học đường an toàn, không ma túy.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Giáo dục",
    level: "Nâng cao",
    duration: "6 tuần",
    targetAudience: ["Giáo viên"]
  },
  {
    id: "5",
    title: "Hiểu về nghiện ma túy và quá trình phục hồi",
    description: "Khóa học chuyên sâu về cơ chế nghiện, tác động của ma túy lên não bộ, và quá trình phục hồi sau khi sử dụng ma túy.",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Chuyên sâu",
    level: "Nâng cao",
    duration: "8 tuần",
    targetAudience: ["Sinh viên", "Giáo viên", "Phụ huynh"]
  },
  {
    id: "6",
    title: "Kỹ năng phòng tránh ma túy dành cho trẻ em",
    description: "Khóa học tương tác, thân thiện với trẻ em để dạy các kỹ năng phòng tránh ma túy cơ bản một cách phù hợp với lứa tuổi.",
    imageUrl: "https://images.unsplash.com/photo-1574114975506-3aa4971db713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Kỹ năng",
    level: "Cơ bản",
    duration: "4 tuần",
    targetAudience: ["Học sinh"]
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [audience, setAudience] = useState<string>("");
  
  // Filter courses based on search term and filters
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !level || course.level === level;
    const matchesCategory = !category || course.category === category;
    const matchesAudience = !audience || course.targetAudience.includes(audience);
    
    return matchesSearch && matchesLevel && matchesCategory && matchesAudience;
  });
  
  const levels = Array.from(new Set(coursesData.map(course => course.level)));
  const categories = Array.from(new Set(coursesData.map(course => course.category)));
  const audiences = Array.from(new Set(coursesData.flatMap(course => course.targetAudience)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-prevention-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Khóa học trực tuyến</h1>
          <p className="text-lg mb-6">
            Khám phá các khóa học về phòng ngừa sử dụng ma túy, được thiết kế phù hợp cho từng đối tượng
          </p>
          
          <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tất cả danh mục</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Cấp độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tất cả cấp độ</SelectItem>
                  {levels.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={audience} onValueChange={setAudience}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Đối tượng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tất cả đối tượng</SelectItem>
                  {audiences.map((aud) => (
                    <SelectItem key={aud} value={aud}>{aud}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline"
                className="bg-white"
                onClick={() => {
                  setSearchTerm("");
                  setLevel("");
                  setCategory("");
                  setAudience("");
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            {filteredCourses.length > 0 
              ? `${filteredCourses.length} khóa học được tìm thấy`
              : 'Không tìm thấy khóa học nào'}
          </h2>
          
          {/* This could be a sort dropdown in a real app */}
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Tất cả</TabsTrigger>
            <TabsTrigger value="popular">Phổ biến nhất</TabsTrigger>
            <TabsTrigger value="new">Mới nhất</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.slice(0, 3).map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.slice(3, 6).map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Không tìm thấy khóa học nào</h3>
            <p className="text-muted-foreground mb-6">
              Hãy thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setLevel("");
                setCategory("");
                setAudience("");
              }}
            >
              Xem tất cả khóa học
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
