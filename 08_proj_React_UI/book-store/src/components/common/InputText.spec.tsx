import {render, screen} from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import React from 'react';
import InputText from './InputText';

describe("InputText 컴포넌트 테스트", () => {
    it('렌더 확인', () => {
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="입력" />
            </BookStoreThemeProvider>
        );
        expect(screen.getByPlaceholderText('입력')).toBeInTheDocument();
    });

    it("forwardRef 확인", () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="입력" ref={ref}/>
            </BookStoreThemeProvider>
        );
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});