// 일반적인 직원 정보
let empName_1 : string;
let empAge_1 : number;
let empJob_1 : string;

// 직원의 정보를 출력하는 함수
function printEmp(empName_1: string, empAge_1: number, empJob_1: string) : void{
    console.log(`이름: ${empName_1}, 나이: ${empAge_1}, 직업: ${empJob_1}`);
}

// 클래스 생성
class Employee {
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
    constructor(
        private _empName: string,
        private _empAge: number,
        private _empJob?: string
    ) {}

    // getter, setter
    get empName() : string { return this._empName; };
    get empAge() : number  { return this._empAge; };
    get empJob() : string | undefined { return this._empJob; };

    set empName(empName: string) { this._empName = empName; };
    set empAge(empAge: number) { this._empAge = empAge; };
    set empJob(empJob: string) { this._empJob = empJob; };

    // 멤버 함수 == 메소드
    printEmp = () : void => { 
        console.log(`이름: ${this._empName}, 나이: ${this._empAge}, 직업: ${this._empJob}`);
    }
}

// 객체 생성 == 인스턴스 생성
let employee1 = new Employee('kim', 25, 'developer');
employee1.empName = 'lee'; // setter 사용
employee1.printEmp();

let employee2 = new Employee('park', 30);
employee2.printEmp();
