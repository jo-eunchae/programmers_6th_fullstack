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
        this.gender = GenderType.Male;
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
        gender: GenderType.Female,
        course: 'javascript',
        completed: true
    };
}
console.log(getInfo(5678));
