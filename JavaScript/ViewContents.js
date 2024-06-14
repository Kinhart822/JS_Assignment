$(document).ready(function () {
    // Lấy dữ liệu từ localStorage
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Hiển thị dữ liệu trong bảng HTML
    let tbody = $("tbody");

    user_records.forEach(function (record, index) {
        // Tạo dòng mới cho mỗi bản ghi
        let row = `<tr>
                           <td>${index + 4}</td>
                           <td>${record.title}</td>
                           <td>${record.brief}</td>
                           <td>${getCurrentDateTime()}</td> 
                       </tr>`;
        tbody.append(row); // Thêm dòng vào tbody
    });

    // Hàm để lấy ngày hiện tại dưới dạng dd/mm/yyyy hh:mm
    function getCurrentDateTime() {
        let current_datetime = new Date();
        let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();
        let formatted_time = current_datetime.getHours() + ":" + current_datetime.getMinutes();
        return formatted_date + " " + formatted_time;
    }
});