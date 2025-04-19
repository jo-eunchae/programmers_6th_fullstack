import React, { Component } from "react";

interface MyProps {
    children: React.ReactNode; // 컴포넌트의 자식 요소
    weather: string;
}

// 함수형 컴포넌트
const MyWeather: React.FC<MyProps> = ({ children, weather }) => {
    // const { children, weather } = props;

    return (
        <div>
            {children} <p></p>
            오늘의 날씨는 {weather} 입니다.
        </div>
    );
};

// 클래스형 컴포넌트
// class MyWeather extends Component<MyProps>{
//     render(){
//         const { children, weather } = this.props;

//         return (
//             <div>
//                 {children}<p></p>
//                 오늘의 날씨는 {weather} 입니다.
//             </div>
//         );
//     }
// }

export default MyWeather;