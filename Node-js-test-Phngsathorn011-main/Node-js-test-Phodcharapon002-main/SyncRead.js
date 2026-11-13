const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
try {
  console.log(data);
}catch (err) {
  console.error('เกิดข้อผิดพลาดในการอ่านไฟล์:', err);
}
console.log('อ่านไฟล์เสร็จสิ้น');