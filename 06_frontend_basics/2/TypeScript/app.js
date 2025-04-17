// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'typescript';
var completed = false;
// enum : 열거형
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
// 상속 : 인터페이스 -> 클래스
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 1234;
        this.stdName = 'park';
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('Alice');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        age: 20,
        gender: 'female',
        course: 'javascript',
        completed: true
    };
}
console.log(getInfo(5678));
// any : 모든 타입을 허용하는 타입
var anyVal_1 = 100;
anyVal_1 = 'kim'; // 유효
anyVal_1 = true; // 유효
// 유니온 타입
var anyVal_2;
anyVal_2 = 100; // 유효
anyVal_2 = 'kim'; // 유효
var numStr = '100';
var num = 100;
// num = numStr // 에러
numStr = num; // 유효
if (typeof num === 'number') { // 타입가드
    num = numStr; // 유효
}
function convertToString(val) {
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr)); // '100'
console.log(convertToNumber(numStr)); // 100
