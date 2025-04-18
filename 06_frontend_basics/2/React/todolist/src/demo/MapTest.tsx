import React from "react";

const MapTest = () => {
    const fruits = ['apple', 'banana', 'orange'];

    return (
        <div>
            <h2>과일</h2>
            <ul>
                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li> // 리액트가 각 요소를 구별할 수 있도록 key 추가가
                    ))
                }
            </ul>
        </div>
    );
};

export default MapTest;