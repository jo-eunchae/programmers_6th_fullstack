// 변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'typescript';
let completed : boolean = false;

// enum : 열거형
enum GenderType {
    Male = 'male',  // 값을 명시적으로 지정하지 않으면 0, 1, 2, ... 순서대로 자동으로 지정됨
    Female = 'female'
}

// 인터페이스
interface Student{
    stdId : number;
    stdName? : string;
    age? : number;     // 선택적 프로퍼티
    gender? : 'male' | 'female'; // 리터럴 타입
    course? : string;
    completed? : boolean;
    setName?(name : string) : void;
    getName? : () => string;
}

// 상속 : 인터페이스 -> 클래스
class MyStudent implements Student{
    stdId = 1234;
    stdName = 'park';
    age = 30;
    gender : 'male' | 'female' = 'male';
    course = 'node.js';
    completed = true;

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
    getName() : string{
        return this.stdName;
    }
}

const myInstance = new MyStudent();
myInstance.setName('Alice');

function getInfo(id : number) : Student{
    return {
        stdId : id,
        stdName : 'lee',
        age : 20,
        gender : 'female',
        course : 'javascript',
        completed : true
    };
}

console.log(getInfo(5678));

// any : 모든 타입을 허용하는 타입
let anyVal_1 : any = 100;
anyVal_1 = 'kim'; // 유효
anyVal_1 = true;  // 유효

// 유니온 타입
let anyVal_2 : number | string;
anyVal_2 = 100;    // 유효
anyVal_2 = 'kim';  // 유효
// anyVal_2 = true;   // 에러

type strOrNum = number | string; // 타입별칭

let numStr : strOrNum = '100';
let num : number = 100;

// num = numStr // 에러
numStr = num; // 유효
if(typeof num === 'number'){ // 타입가드
	num = numStr; // 유효
}

function convertToString(val : strOrNum) : string{    
    return String(val);
}

function convertToNumber(val : strOrNum) : number{
    return Number(val);
}

console.log(convertToString(numStr)); // '100'
console.log(convertToNumber(numStr)); // 100