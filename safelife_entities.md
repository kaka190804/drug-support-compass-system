
# Mô hình thực thể và mối quan hệ cho website SafeLife

## Thực thể chính
1. **User (Người dùng)**
   - id (PK)
   - name
   - email
   - password_hash
   - role (Member, Staff, Consultant, Manager, Admin)
   - avatar_url
   - created_at
   - updated_at

2. **Course (Khóa học)**
   - id (PK)
   - title
   - description
   - image_url
   - category
   - level (Cơ bản, Nâng cao, Chuyên sâu)
   - duration
   - content_json
   - created_at
   - updated_at

3. **Course_Enrollment (Đăng ký khóa học)**
   - id (PK)
   - user_id (FK -> User)
   - course_id (FK -> Course)
   - progress_percentage
   - status (Đang học, Hoàn thành, Tạm dừng)
   - enrollment_date
   - completion_date

4. **Assessment (Bài đánh giá)**
   - id (PK)
   - title
   - description
   - type (Self-assessment, Professional)
   - created_at
   - updated_at

5. **Question (Câu hỏi)**
   - id (PK)
   - assessment_id (FK -> Assessment)
   - text
   - order_number
   - created_at
   - updated_at

6. **Option (Lựa chọn câu trả lời)**
   - id (PK)
   - question_id (FK -> Question)
   - text
   - value (Điểm cho lựa chọn này)
   - order_number

7. **Assessment_Result (Kết quả đánh giá)**
   - id (PK)
   - user_id (FK -> User)
   - assessment_id (FK -> Assessment)
   - score
   - risk_level (Thấp, Trung bình, Cao)
   - completed_at
   - json_answers (Lưu trữ câu trả lời)

8. **Consultant (Chuyên viên tư vấn)**
   - id (PK)
   - user_id (FK -> User)
   - specialization
   - experience_years
   - bio
   - availability_json (Lịch làm việc)

9. **Appointment (Lịch hẹn)**
   - id (PK)
   - user_id (FK -> User)
   - consultant_id (FK -> Consultant)
   - appointment_date
   - appointment_time
   - type (Trực tuyến, Trực tiếp)
   - status (Đã đặt, Đã xác nhận, Hoàn thành, Hủy)
   - reason
   - notes
   - created_at
   - updated_at

10. **Resource (Tài liệu)**
    - id (PK)
    - title
    - description
    - file_url
    - type (PDF, Video, Audio, etc)
    - category
    - created_at
    - updated_at

## Mối quan hệ chính

1. **User - Course_Enrollment**
   - Một User có thể đăng ký nhiều Course (1:n)

2. **Course - Course_Enrollment**
   - Một Course có thể được đăng ký bởi nhiều User (1:n)

3. **User - Assessment_Result**
   - Một User có thể có nhiều Assessment_Result (1:n)

4. **Assessment - Assessment_Result**
   - Một Assessment có thể có nhiều Assessment_Result (1:n)

5. **Assessment - Question**
   - Một Assessment có nhiều Question (1:n)

6. **Question - Option**
   - Một Question có nhiều Option (1:n)

7. **User - Consultant**
   - Một User có thể là một Consultant (1:1)

8. **User - Appointment**
   - Một User có thể đặt nhiều Appointment (1:n)

9. **Consultant - Appointment**
   - Một Consultant có thể có nhiều Appointment (1:n)

## Chú thích về mô hình dữ liệu

1. **Role-based Access Control (RBAC)**:
   - Sử dụng trường `role` trong User để phân quyền
   - Các quyền truy cập theo thứ bậc: Guest < Member < Staff < Consultant < Manager < Admin

2. **Lưu trữ dữ liệu linh hoạt**:
   - Sử dụng các trường JSON để lưu trữ dữ liệu có cấu trúc phức tạp, như:
     - `content_json` cho nội dung khóa học
     - `availability_json` cho lịch làm việc của chuyên viên
     - `json_answers` cho câu trả lời của bài đánh giá

3. **Thống kê và báo cáo**:
   - Có thể thực hiện các truy vấn tổng hợp trên các bảng để tạo báo cáo như:
     - Số lượng người dùng đăng ký theo tháng
     - Phân bố độ tuổi người dùng
     - Kết quả đánh giá nguy cơ
     - Tỷ lệ hoàn thành khóa học
