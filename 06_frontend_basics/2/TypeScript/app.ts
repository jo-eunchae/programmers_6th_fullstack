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
    gender? : GenderType;
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
    gender = GenderType.Male;
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
        gender : GenderType.Female,
        course : 'javascript',
        completed : true
    };
}

console.log(getInfo(5678));