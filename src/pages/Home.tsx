
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Search, ArrowRight, ArrowUpRight, BadgeCheck, Users, FileText, Shield } from "lucide-react";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Improved Design */}
      <section className="relative bg-gradient-to-br from-prevention-600 to-prevention-900 text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-prevention-400 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-health-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${visible ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Sống <span className="text-health-300">an toàn</span>, tương lai <span className="text-health-300">vững bền</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-prevention-100">
                Phần mềm hỗ trợ phòng ngừa sử dụng ma túy
              </h2>
              <p className="text-lg">
                Hỗ trợ phòng ngừa sử dụng ma túy trong cộng đồng thông qua giáo dục, đánh giá rủi ro và tư vấn chuyên nghiệp.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-white text-prevention-700 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <Link to="/courses">
                    Khám phá khóa học
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full shadow-md transition-all hover:-translate-y-1">
                  <Link to="/assessment">
                    Đánh giá rủi ro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className={`hidden md:flex justify-center ${visible ? 'slide-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-prevention-500 rounded-lg rotate-6 filter blur-sm"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Phòng chống ma túy"
                  className="rounded-lg shadow-2xl relative img-hover z-10 border-4 border-white/20" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="relative w-full h-[100px]">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-prevention-50 text-prevention-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">Dịch vụ của chúng tôi</span>
            <h2 className="text-3xl font-bold mb-4">Hỗ trợ toàn diện về phòng ngừa ma túy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi cung cấp nhiều dịch vụ để giúp cộng đồng nâng cao nhận thức và kỹ năng phòng ngừa sử dụng ma túy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto bg-prevention-50 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center text-prevention-600">
                  <BookOpen className="h-8 w-8" />
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
                <Button asChild variant="ghost" className="gap-2 hover:bg-prevention-50 hover:text-prevention-700">
                  <Link to="/courses">
                    Xem khóa học <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto bg-health-50 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center text-health-600">
                  <Search className="h-8 w-8" />
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
                <Button asChild variant="ghost" className="gap-2 hover:bg-health-50 hover:text-health-700">
                  <Link to="/assessment">
                    Làm bài đánh giá <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto bg-prevention-50 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center text-prevention-600">
                  <Calendar className="h-8 w-8" />
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
                <Button asChild variant="ghost" className="gap-2 hover:bg-prevention-50 hover:text-prevention-700">
                  <Link to="/appointment">
                    Đặt lịch hẹn <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About Organization Section with Improved Layout */}
      <section className="py-20 bg-gradient-to-br from-prevention-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-prevention-200 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Tổ chức của chúng tôi"
                  className="rounded-lg shadow-md relative z-10 img-hover" 
                />
                <div className="absolute -bottom-4 -right-4 bg-health-500 text-white p-4 rounded-lg shadow-lg z-20">
                  <p className="font-bold">10+ năm kinh nghiệm</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="bg-prevention-50 text-prevention-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">Về chúng tôi</span>
              <h2 className="text-3xl font-bold">Về tổ chức của chúng tôi</h2>
              <div className="w-20 h-1 bg-health-500 rounded-full"></div>
              <p className="text-lg">
                Chúng tôi là một tổ chức phi lợi nhuận tập trung vào việc cung cấp thông tin chính xác và hỗ trợ cộng đồng trong 
                việc phòng ngừa sử dụng ma túy. Với đội ngũ chuyên viên có trình độ chuyên môn cao và kinh nghiệm thực tiễn, 
                chúng tôi cam kết mang đến các nguồn lực giáo dục, tư vấn và hỗ trợ chất lượng.
              </p>
              <p className="text-lg">
                Sứ mệnh của chúng tôi là nâng cao nhận thức của cộng đồng về các vấn đề liên quan đến ma túy, 
                đồng thời trang bị cho mọi người những kỹ năng cần thiết để từ chối và phòng tránh sử dụng ma túy.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="gap-2 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <Link to="/about">
                    Tìm hiểu thêm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-health-50 text-health-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">Tại sao chọn chúng tôi</span>
            <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho cộng đồng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-prevention-50 w-14 h-14 rounded-full flex items-center justify-center text-prevention-600 mb-4">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chính xác</h3>
              <p className="text-gray-600">Thông tin được cung cấp dựa trên nghiên cứu khoa học và được kiểm chứng.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-health-50 w-14 h-14 rounded-full flex items-center justify-center text-health-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cộng đồng</h3>
              <p className="text-gray-600">Tạo môi trường hỗ trợ lẫn nhau, không phán xét giúp mọi người cảm thấy an toàn.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-prevention-50 w-14 h-14 rounded-full flex items-center justify-center text-prevention-600 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Giáo dục</h3>
              <p className="text-gray-600">Cung cấp kiến thức và kỹ năng thiết thực để phòng tránh sử dụng ma túy.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-health-50 w-14 h-14 rounded-full flex items-center justify-center text-health-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bảo mật</h3>
              <p className="text-gray-600">Thông tin cá nhân được bảo vệ nghiêm ngặt và chỉ được sử dụng cho mục đích hỗ trợ.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs and Resources with Tabs */}
      <section className="py-20 bg-prevention-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-white text-prevention-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">Chương trình</span>
            <h2 className="text-3xl font-bold mb-4">Chương trình và tài nguyên</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Khám phá các chương trình giáo dục và truyền thông cộng đồng của chúng tôi
            </p>
          </div>
          
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 p-1 mb-8 bg-white rounded-full">
              <TabsTrigger value="education" className="rounded-full data-[state=active]:bg-prevention-100 data-[state=active]:text-prevention-700">Chương trình giáo dục</TabsTrigger>
              <TabsTrigger value="community" className="rounded-full data-[state=active]:bg-prevention-100 data-[state=active]:text-prevention-700">Hoạt động cộng đồng</TabsTrigger>
              <TabsTrigger value="resources" className="rounded-full data-[state=active]:bg-prevention-100 data-[state=active]:text-prevention-700">Tài nguyên</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Giáo dục học đường"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Giáo dục học đường</CardTitle>
                    <CardDescription>Chương trình cho học sinh, sinh viên</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các hoạt động giáo dục trong trường học giúp học sinh, sinh viên nâng cao nhận thức về tác hại của ma túy 
                      và trang bị kỹ năng từ chối.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                      <Link to="/programs/education">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Đào tạo phụ huynh"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Đào tạo phụ huynh</CardTitle>
                    <CardDescription>Hướng dẫn phụ huynh cách giáo dục con em</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Chương trình đào tạo giúp phụ huynh nắm bắt cách nhận biết dấu hiệu sử dụng ma túy và kỹ năng giao tiếp với con em 
                      về vấn đề này.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
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
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Sự kiện cộng đồng"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Sự kiện cộng đồng</CardTitle>
                    <CardDescription>Các hoạt động nâng cao nhận thức</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Tổ chức các sự kiện lớn trong cộng đồng nhằm nâng cao nhận thức về phòng chống ma túy thông qua nhiều hoạt động 
                      tương tác và sáng tạo.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                      <Link to="/programs/events">
                        Chi tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Chiến dịch truyền thông"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Chiến dịch truyền thông</CardTitle>
                    <CardDescription>Chiến dịch thông tin đại chúng</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các chiến dịch truyền thông đa kênh để phổ biến thông tin chính xác về ma túy và khuyến khích lối sống lành mạnh 
                      không ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
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
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Tài liệu"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Tài liệu</CardTitle>
                    <CardDescription>Sách, tài liệu giáo dục</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các tài liệu chất lượng về phòng chống ma túy được biên soạn bởi các chuyên gia.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                      <Link to="/resources/materials">
                        Xem tài liệu
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Video"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Video</CardTitle>
                    <CardDescription>Phim tài liệu, hướng dẫn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Thư viện video giáo dục về các chủ đề liên quan đến phòng chống ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                      <Link to="/resources/videos">
                        Xem video
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Infographics"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Infographics</CardTitle>
                    <CardDescription>Thông tin trực quan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Các infographic trực quan giúp dễ dàng nắm bắt thông tin quan trọng về ma túy.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
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
      
      {/* Blog Preview Section with Card Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-health-50 text-health-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">Blog</span>
            <h2 className="text-3xl font-bold mb-4">Bài viết mới nhất</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chia sẻ kinh nghiệm và kiến thức từ các chuyên gia của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="bg-prevention-50 text-prevention-700 px-3 py-1 rounded-full text-xs font-medium">Giáo dục</span>
                  <span className="mx-2">•</span>
                  <span>12/05/2025</span>
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
                <Button asChild variant="ghost" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                  <Link to="/blog/post-1" className="flex items-center gap-2">
                    Đọc thêm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Blog Post 2 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529586691587-5d617e44e64c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="bg-health-50 text-health-700 px-3 py-1 rounded-full text-xs font-medium">Nghiên cứu</span>
                  <span className="mx-2">•</span>
                  <span>08/05/2025</span>
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
                <Button asChild variant="ghost" className="rounded-full hover:bg-health-50 hover:text-health-700 transition-all">
                  <Link to="/blog/post-2" className="flex items-center gap-2">
                    Đọc thêm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Blog Post 3 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="bg-prevention-50 text-prevention-700 px-3 py-1 rounded-full text-xs font-medium">Phụ huynh</span>
                  <span className="mx-2">•</span>
                  <span>01/05/2025</span>
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
                <Button asChild variant="ghost" className="rounded-full hover:bg-prevention-50 hover:text-prevention-700 transition-all">
                  <Link to="/blog/post-3" className="flex items-center gap-2">
                    Đọc thêm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full px-6 py-6 h-auto hover:bg-prevention-50 hover:text-prevention-700 transition-all hover:-translate-y-1">
              <Link to="/blog" className="flex items-center gap-2">
                Xem tất cả bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Improved Design */}
      <section className="relative py-20 bg-gradient-to-br from-prevention-600 to-prevention-800 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-prevention-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hãy tham gia cùng chúng tôi</h2>
            <p className="text-lg md:text-xl mb-8">
              Đăng ký tài khoản để tham gia các khóa học, đánh giá rủi ro và tiếp cận các 
              tài nguyên hỗ trợ phòng ngừa sử dụng ma túy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-prevention-700 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Link to="/register" className="flex items-center gap-2">
                  Đăng ký ngay
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full shadow-md transition-all hover:-translate-y-1">
                <Link to="/contact" className="flex items-center gap-2">
                  Liên hệ chúng tôi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
