
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Search, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-prevention-700 to-prevention-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Drug Use Prevention Support System
              </h1>
              <h2 className="text-xl md:text-2xl font-medium">
                Phần mềm hỗ trợ phòng ngừa sử dụng ma túy
              </h2>
              <p className="text-lg">
                Hỗ trợ phòng ngừa sử dụng ma túy trong cộng đồng thông qua giáo dục, đánh giá rủi ro và tư vấn chuyên nghiệp.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-prevention-700 hover:bg-gray-100">
                  <Link to="/courses">
                    Khám phá khóa học
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/assessment">
                    Đánh giá rủi ro
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Drug Prevention"
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hỗ trợ toàn diện về phòng ngừa ma túy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi cung cấp nhiều dịch vụ để giúp cộng đồng nâng cao nhận thức và kỹ năng phòng ngừa sử dụng ma túy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-prevention-50 p-3 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-prevention-600" />
                </div>
                <CardTitle>Khóa học trực tuyến</CardTitle>
                <CardDescription>Học hỏi từ các chuyên gia về nhận thức ma túy và kỹ năng phòng tránh</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Các khóa học được thiết kế phù hợp với từng độ tuổi và nhu cầu khác nhau, giúp bạn hiểu rõ về các vấn đề liên quan đến ma túy.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button asChild variant="ghost" className="gap-2">
                  <Link to="/courses">
                    Xem khóa học <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-prevention-50 p-3 rounded-full mb-4">
                  <Search className="h-8 w-8 text-prevention-600" />
                </div>
                <CardTitle>Đánh giá rủi ro</CardTitle>
                <CardDescription>Xác định mức độ nguy cơ sử dụng ma túy thông qua các bài khảo sát</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Các công cụ đánh giá chuyên nghiệp như ASSIST, CRAFFT giúp xác định mức độ rủi ro và đề xuất hành động phù hợp.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button asChild variant="ghost" className="gap-2">
                  <Link to="/assessment">
                    Làm bài đánh giá <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-prevention-50 p-3 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-prevention-600" />
                </div>
                <CardTitle>Tư vấn chuyên nghiệp</CardTitle>
                <CardDescription>Đặt lịch hẹn trực tuyến với các chuyên viên tư vấn giàu kinh nghiệm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Được tư vấn riêng tư và chuyên sâu từ các chuyên viên có trình độ chuyên môn, giúp bạn giải đáp mọi thắc mắc.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button asChild variant="ghost" className="gap-2">
                  <Link to="/appointment">
                    Đặt lịch hẹn <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About Organization Section */}
      <section className="py-16 bg-prevention-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Organization"
                className="rounded-lg shadow-md" 
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Về tổ chức của chúng tôi</h2>
              <p className="text-lg">
                Chúng tôi là một tổ chức phi lợi nhuận tập trung vào việc cung cấp thông tin chính xác và hỗ trợ cộng đồng trong 
                việc phòng ngừa sử dụng ma túy. Với đội ngũ chuyên viên có trình độ chuyên môn cao và kinh nghiệm thực tiễn, 
                chúng tôi cam kết mang đến các nguồn lực giáo dục, tư vấn và hỗ trợ chất lượng.
              </p>
              <p className="text-lg">
                Sứ mệnh của chúng tôi là nâng cao nhận thức của cộng đồng về các vấn đề liên quan đến ma túy, 
                đồng thời trang bị cho mọi người những kỹ năng cần thiết để từ chối và phòng tránh sử dụng ma túy.
              </p>
              <Button asChild>
                <Link to="/about">
                  Tìm hiểu thêm
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs and Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chương trình và tài nguyên</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Khám phá các chương trình giáo dục và truyền thông cộng đồng của chúng tôi
            </p>
          </div>
          
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="education">Chương trình giáo dục</TabsTrigger>
              <TabsTrigger value="community">Hoạt động cộng đồng</TabsTrigger>
              <TabsTrigger value="resources">Tài nguyên</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Giáo dục học đường</CardTitle>
                    <CardDescription>Chương trình cho học sinh, sinh viên</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các hoạt động giáo dục trong trường học giúp học sinh, sinh viên nâng cao nhận thức về tác hại của ma túy 
                      và trang bị kỹ năng từ chối.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/programs/education">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Đào tạo phụ huynh</CardTitle>
                    <CardDescription>Hướng dẫn phụ huynh cách giáo dục con em</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Chương trình đào tạo giúp phụ huynh nắm bắt cách nhận biết dấu hiệu sử dụng ma túy và kỹ năng giao tiếp với con em 
                      về vấn đề này.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/programs/parents">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sự kiện cộng đồng</CardTitle>
                    <CardDescription>Các hoạt động nâng cao nhận thức</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Tổ chức các sự kiện lớn trong cộng đồng nhằm nâng cao nhận thức về phòng chống ma túy thông qua nhiều hoạt động 
                      tương tác và sáng tạo.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/programs/events">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Chiến dịch truyền thông</CardTitle>
                    <CardDescription>Chiến dịch thông tin đại chúng</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các chiến dịch truyền thông đa kênh để phổ biến thông tin chính xác về ma túy và khuyến khích lối sống lành mạnh 
                      không ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/programs/campaigns">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tài liệu</CardTitle>
                    <CardDescription>Sách, tài liệu giáo dục</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các tài liệu chất lượng về phòng chống ma túy được biên soạn bởi các chuyên gia.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/resources/materials">
                        Xem tài liệu
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Video</CardTitle>
                    <CardDescription>Phim tài liệu, hướng dẫn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Thư viện video giáo dục về các chủ đề liên quan đến phòng chống ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/resources/videos">
                        Xem video
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Infographics</CardTitle>
                    <CardDescription>Thông tin trực quan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các infographic trực quan giúp dễ dàng nắm bắt thông tin quan trọng về ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link to="/resources/infographics">
                        Xem infographics
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bài viết mới nhất</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chia sẻ kinh nghiệm và kiến thức từ các chuyên gia của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span>12/05/2025</span>
                  <span className="mx-2">•</span>
                  <span>Giáo dục</span>
                </div>
                <CardTitle className="line-clamp-2">
                  5 Kỹ năng từ chối ma túy hiệu quả cho thanh thiếu niên
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Trong bài viết này, chúng tôi chia sẻ 5 kỹ năng giúp thanh thiếu niên tự tin từ chối 
                  ma túy trong các tình huống áp lực từ bạn bè và môi trường xung quanh...
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost">
                  <Link to="/blog/post-1">Đọc thêm</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Blog Post 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529586691587-5d617e44e64c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span>08/05/2025</span>
                  <span className="mx-2">•</span>
                  <span>Nghiên cứu</span>
                </div>
                <CardTitle className="line-clamp-2">
                  Hiểu đúng về ma túy tổng hợp và tác động của chúng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Ma túy tổng hợp đang ngày càng phổ biến và gây ra nhiều hậu quả nghiêm trọng. 
                  Bài viết này giúp bạn hiểu rõ về chúng và cách phòng tránh hiệu quả...
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost">
                  <Link to="/blog/post-2">Đọc thêm</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Blog Post 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span>01/05/2025</span>
                  <span className="mx-2">•</span>
                  <span>Phụ huynh</span>
                </div>
                <CardTitle className="line-clamp-2">
                  Hướng dẫn phụ huynh nhận biết dấu hiệu con em sử dụng ma túy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Với vai trò quan trọng trong việc phòng chống ma túy cho con em, phụ huynh cần biết 
                  cách nhận diện các dấu hiệu sớm khi trẻ có nguy cơ tiếp xúc với ma túy...
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost">
                  <Link to="/blog/post-3">Đọc thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/blog">
                Xem tất cả bài viết
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-prevention-600 to-prevention-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hãy tham gia cùng chúng tôi</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Đăng ký tài khoản để tham gia các khóa học, đánh giá rủi ro và tiếp cận các 
            tài nguyên hỗ trợ phòng ngừa sử dụng ma túy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-prevention-700 hover:bg-gray-100">
              <Link to="/register">
                Đăng ký ngay
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Liên hệ chúng tôi
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
