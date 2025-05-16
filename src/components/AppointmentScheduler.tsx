
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export interface Consultant {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  availability: {
    [key: string]: string[]; // key is day of week, value is array of available time slots
  };
  avatar?: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

interface AppointmentSchedulerProps {
  consultants: Consultant[];
}

const AppointmentScheduler = ({ consultants }: AppointmentSchedulerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<"online" | "inperson">("online");
  const [reason, setReason] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleConsultantSelect = (consultantId: string) => {
    const consultant = consultants.find(c => c.id === consultantId);
    setSelectedConsultant(consultant || null);
    setSelectedTime(null); // Reset time when consultant changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    toast({
      title: "Đặt lịch thành công",
      description: `Bạn đã đặt lịch hẹn với ${selectedConsultant?.name} vào ${selectedDate?.toLocaleDateString("vi-VN")} lúc ${selectedTime}.`,
    });
    
    setIsDialogOpen(false);
    setSelectedConsultant(null);
    setSelectedDate(new Date());
    setSelectedTime(null);
    setSelectedType("online");
    setReason("");
    setStep(1);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isDateAvailable = (date: Date) => {
    // In a real app, this would check availability from an API
    // For demo purposes, disable weekends and past dates
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return date >= today && day !== 0 && day !== 6;
  };

  const getAvailableTimesForSelectedDate = () => {
    if (!selectedDate || !selectedConsultant) return [];
    
    // Get day of week (0 = Sunday, 1 = Monday, etc.)
    const dayIndex = selectedDate.getDay();
    // Convert to our day format (0 = Monday, 6 = Sunday)
    const adjustedDayIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    const dayName = daysOfWeek[adjustedDayIndex];
    
    return selectedConsultant.availability[dayName] || [];
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="date" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="date">1. Chọn thời gian</TabsTrigger>
          <TabsTrigger value="consultant">2. Chọn chuyên viên</TabsTrigger>
          <TabsTrigger value="confirm">3. Xác nhận</TabsTrigger>
        </TabsList>
        
        <TabsContent value="date" className="space-y-4 pt-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium">Chọn ngày và thời gian phù hợp</h3>
            <p className="text-muted-foreground">Bạn có thể chọn ngày phù hợp từ lịch dưới đây</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Chọn ngày</CardTitle>
                <CardDescription>Chọn ngày phù hợp cho buổi tư vấn của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateAvailable}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Chọn thời gian</CardTitle>
                <CardDescription>Các khung giờ có sẵn cho ngày {selectedDate?.toLocaleDateString("vi-VN")}</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="text-sm"
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Vui lòng chọn ngày trước
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  onClick={() => nextStep()}
                  disabled={!selectedDate || !selectedTime}
                >
                  Tiếp theo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="consultant" className="space-y-4 pt-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium">Chọn chuyên viên tư vấn</h3>
            <p className="text-muted-foreground">Xem thông tin và chọn chuyên viên tư vấn phù hợp với nhu cầu của bạn</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultants.map(consultant => (
              <Card 
                key={consultant.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedConsultant?.id === consultant.id ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
                onClick={() => handleConsultantSelect(consultant.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={consultant.avatar} alt={consultant.name} />
                      <AvatarFallback>{consultant.name.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{consultant.name}</CardTitle>
                      <CardDescription>{consultant.specialization}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{consultant.bio}</p>
                  <p className="text-sm">Kinh nghiệm: {consultant.experience}</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Tư vấn trực tuyến</Badge>
                    <Badge variant="outline" className="text-xs">Tư vấn trực tiếp</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => handleConsultantSelect(consultant.id)}
                  >
                    {selectedConsultant?.id === consultant.id ? "Đã chọn" : "Chọn chuyên viên"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => prevStep()}>
              Quay lại
            </Button>
            <Button 
              onClick={() => nextStep()}
              disabled={!selectedConsultant}
            >
              Tiếp theo
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="confirm" className="space-y-4 pt-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium">Xác nhận thông tin đặt lịch</h3>
            <p className="text-muted-foreground">Vui lòng xem lại thông tin đặt lịch và hoàn tất</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Chi tiết lịch hẹn</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Chuyên viên tư vấn</h4>
                    {selectedConsultant ? (
                      <div className="flex items-center space-x-3 mt-1">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedConsultant.avatar} alt={selectedConsultant.name} />
                          <AvatarFallback>{selectedConsultant.name.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{selectedConsultant.name}</p>
                          <p className="text-sm text-muted-foreground">{selectedConsultant.specialization}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Chưa chọn</p>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Thời gian</h4>
                    {selectedDate && selectedTime ? (
                      <p className="font-medium">{selectedDate.toLocaleDateString("vi-VN")} lúc {selectedTime}</p>
                    ) : (
                      <p className="text-muted-foreground">Chưa chọn</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Hình thức tư vấn</h4>
                    <RadioGroup 
                      value={selectedType} 
                      onValueChange={(value: "online" | "inperson") => setSelectedType(value)}
                      className="flex gap-4 mt-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online">Trực tuyến</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inperson" id="inperson" />
                        <Label htmlFor="inperson">Trực tiếp</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label htmlFor="reason" className="text-sm font-medium text-muted-foreground">Lý do tư vấn</Label>
                    <Textarea
                      id="reason"
                      placeholder="Nhập lý do bạn muốn được tư vấn..."
                      value={reason}
                      onChange={e => setReason(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => prevStep()}>
                Quay lại
              </Button>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button disabled={!selectedDate || !selectedTime || !selectedConsultant}>
                    Hoàn tất đặt lịch
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Xác nhận đặt lịch</DialogTitle>
                    <DialogDescription>
                      Bạn sẽ đặt lịch hẹn với {selectedConsultant?.name} vào ngày {selectedDate?.toLocaleDateString("vi-VN")} lúc {selectedTime} bằng hình thức {selectedType === "online" ? "trực tuyến" : "trực tiếp"}.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Hủy
                    </Button>
                    <Button onClick={handleSubmit}>
                      Xác nhận
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppointmentScheduler;
