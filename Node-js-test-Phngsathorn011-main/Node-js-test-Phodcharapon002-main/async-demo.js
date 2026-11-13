const students = [
    { id: 1, name: 'สมชาย' },
    { id: 2, name: 'สมหญิง' },   
];
const gradeTable = { 1: ['A', 'B+'], 2: ['B', 'A'] };

async function getStudentGrades(studentId) {
    try {
        const student = students.find(s => s.id === studentId);
        if (!student) {
            throw new Error('ไม่พบข้อมูลนักเรียน');
        }
        const grades = gradeTable[studentId];
        if (!grades) {
            throw new Error('ไม่พบข้อมูลเกรด');
        }
        return grades;
    } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
        throw error;
    }
}
getStudentGrades(1)
    .then(grades => {
        console.log('เกรดของนักเรียน:', grades);
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลเกรด:', error);
    });