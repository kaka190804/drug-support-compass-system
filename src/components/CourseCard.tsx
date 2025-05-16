
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  level: string;
  duration: string;
  targetAudience: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold line-clamp-2">
            {course.title}
          </CardTitle>
          <Badge variant="outline" className="bg-prevention-50 text-prevention-700 hover:bg-prevention-100">
            {course.category}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {course.targetAudience.map((audience) => (
            <Badge key={audience} variant="secondary" className="text-xs">
              {audience}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="line-clamp-3">
          {course.description}
        </CardDescription>
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <div>Cấp độ: {course.level}</div>
          <div>Thời lượng: {course.duration}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/courses/${course.id}`}>
            Xem khóa học
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
