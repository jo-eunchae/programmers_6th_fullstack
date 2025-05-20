import { styled } from "styled-components";
import logo from "../../assets/images/logo.png";

import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category } from "../../models/category.model";
import userEvent from "@testing-library/user-event";
import { fetchCategory } from "../../api/category.api";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";
import Login from "../../pages/Login";
const LoginIcon = FaSignInAlt as unknown as React.FC;
const SignUpIcon = FaRegUser as unknown as React.FC;

function Header(){
  const { category} = useCategory();

  const {isloggedIn, storeLogout} = useAuthStore();

  return (
      <HeaderStyle>
          <h1 className="logo">
            <Link to="/">
              <img src={logo} alt="book store" />
            </Link>
          </h1>
          <nav className="category">
            <ul>
              {
                category.map((item) => (
                  <li key={item.id}>
                    <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <nav className="auth">
            {isloggedIn && (
                <ul>
                  <li><Link to="/cart">장바구니</Link></li>
                  <li><Link to="/orderlist">주문 내역</Link></li>
                  <li><button onClick={storeLogout}>로그아웃</button></li>
                </ul>
            )}
            {!isloggedIn && (
              <ul>
                <li>
                  <Link to="/login"><LoginIcon />
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/signUp">
                    <SignUpIcon />
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
          </nav>
      </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({theme}) => theme.layoutWidth.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({theme}) => theme.color.background};

  .logo {
    img {
      width: 100px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({theme}) => theme.color.text};

          &:hover {
            color: ${({theme}) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a, button {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;


export default Header;