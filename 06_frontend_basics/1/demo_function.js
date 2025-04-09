// 1. 일급객체의 특징
// 1.1 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function foo_11(arg){
    arg();
}
function bar_11(){
    console.log('bar_11');
}

foo_11(bar_11);    // bar_11

// 1.2 자바스크립트 함수는 한수의 반환값이 될 수 있다.
function foo_12(arg){
    return arg;
}

function bar_12(){
    console.log('bar_12');
}

foo_12(bar_12)();    // bar_12

// 1.3 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 1.4 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
const foo_13 = function (arg){
    console.log(arg);
};

foo_13(1);    // 1

// 2. 매개변수
// 2.1 기본값 매개변수 (default function parameter)
function foo_21(arg = 1){
    console.log(arg);
}

foo_21();    // undefind 대신 1

// 2.2 나머지 매개변수 (rest parameter)
function foo_22(arg, ...rest){
    console.log(rest);
}

foo_22();           // []
foo_22(1);          // []
foo_22(1, 2);       // [2]
foo_22(1, 2, 3);    // [2, 3]

// 2.3 argments 객체
function foo_23(arg, ...rest){
    console.log(arguments);
}

foo_23(1, 2, 3);    // [Arguments] { '0': 1, '1': 2, '2': 3 }

// 3. 함수 생성 방법
// 3.1 함수 선언문
function foo_31(){
    console.log('foo_31');
}

foo_31();    // foo_31

// 3.2 함수 표현식
const foo_32 = function () {
    console.log('foo_32');
}

foo_32();    // foo_32

// 3.3 Function 생성자 함수
const foo_33 = new Function("console.log('foo_33')");

foo_33();    // foo_33

// 3.4 화살표 함수 표현식
const foo_34 = () => {
    console.log('foo_34');
}

foo_34();    // foo_34

// 4. 함수의 여러가지 형태태
// 4.1 IIFE (즉시 실행 함수)
(function foo_41(){
    console.log('foo_41');
})();    // foo_41

// 4.2 재귀함수
function foo_42(arg){
    if(arg === 3) return; // 종료 조건문

    console.log(arg);
    foo_42(arg + 1);
}

foo_42(1);    // 1    2

// 4.3 중첩함수 (내부함수)
function foo_43(arg){
    function bar_43(){
        console.log(arg);
    }
    bar_43();
}

foo_43('bar_43');    // bar_43

// 4.4 콜백함수
function foo_44(arg){
    arg();
}

foo_44(() => {
    console.log('foo_44');
});    // foo_44
