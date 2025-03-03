import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80vh;
    position: relative;
`

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Navegation = styled.nav`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 6rem;
    border-bottom: 1.5px solid rgba(128, 128, 128, 0.5);
    z-index: 10; 
    padding: 10px 0;
`

export const Logo = styled.img`
    width: 115.7px; 
    height: 40px;
    cursor: pointer;
`

export const NavButtonsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const CreateAccountButton = styled.button`
    background: none;
    color: ${colors['white']};
    border: 2px solid ${colors['gray-500']};
    border-radius: 3px;
    padding: 10px 16px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background-color: ${colors['white']};
        color: ${colors['black']};
        border: 2px solid ${colors['white']};
    }
`

export const LoginButton = styled.button``

export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2rem;
    font: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.5px;
`

export const MenuLink = styled.li`
    cursor: pointer;
`

export const MainHeaderContainer = styled.div`
    position: absolute;
    top: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
`

export const SliderMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 48px;
    margin-left: 16rem;
    gap: 20px;

    img{
        cursor: pointer;
    }
`

export const MainTextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    max-width: 34rem;
    gap: 1rem;
`

export const MainTitle = styled.h1`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0.5px;
`

export const MainSubtitle = styled.sub`
    font-family: 'Poppins';
    font-size: 19px;
    letter-spacing: 0.5px;
`

export const MainButton = styled.button`
    margin-top: 1rem;
    background-color: ${colors['blue-500']};
    border: 0;
    border-radius: 3px;
    padding: 14px 32px;
    width: 10rem;
    color: ${colors['white']};
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`