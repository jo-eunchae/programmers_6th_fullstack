// 일반적인 직원 정보
var empName_1;
var empAge_1;
var empJob_1;
// 직원의 정보를 출력하는 함수
function printEmp(empName_1, empAge_1, empJob_1) {
    console.log("\uC774\uB984: ".concat(empName_1, ", \uB098\uC774: ").concat(empAge_1, ", \uC9C1\uC5C5: ").concat(empJob_1));
}
// 클래스 생성
var Employee = /** @class */ (function () {
    // // 멤버 변수 == 속성 == 프로퍼티
    // private _empName: string; // 접근지정자
    // private _empAge: number;
    // private _empJob: string; 
    // // 생성자 == 초기화 함수
    // constructor(empName: string, empAge?: number, empJob?: string) { 
    //     this._empName = empName;
    //     this._empAge = empAge;
    //     this._empJob = empJob;
    // }
    // 멤버 변수 선언 & 초기화
    function Employee(_empName, _empAge, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._empAge = _empAge;
        this._empJob = _empJob;
        // 멤버 함수 == 메소드
        this.printEmp = function () {
            console.log("\uC774\uB984: ".concat(_this._empName, ", \uB098\uC774: ").concat(_this._empAge, ", \uC9C1\uC5C5: ").concat(_this._empJob));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // getter, setter
        get: function () { return this._empName; },
        set: function (empName) { this._empName = empName; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Employee.prototype, "empAge", {
        get: function () { return this._empAge; },
        set: function (empAge) { this._empAge = empAge; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Employee.prototype, "empJob", {
        get: function () { return this._empJob; },
        set: function (empJob) { this._empJob = empJob; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    ;
    return Employee;
}());
// 객체 생성 == 인스턴스 생성
var employee1 = new Employee('kim', 25, 'developer');
employee1.empName = 'lee'; // setter 사용
employee1.printEmp();
var employee2 = new Employee('park', 30);
employee2.printEmp();
