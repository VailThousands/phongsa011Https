const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('เกิดข้อผิดพลาดในการอ่านไฟล์:', err);
    return;
  }
  console.log(data);
});
console.log('อ่านไฟล์เสร็จสิ้น');