import styled from "styled-components";

const HeaderContentMain = styled.header`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    padding: 1vw;
    gap: 3vw;
    box-sizing: border-box;
    justify-content: space-between;
`

const HeaderLogo = styled.img`
    width: 17vw;
    padding: 1vw;
    cursor: pointer;
    transition: all .20s ease;

    &:hover {
    transform: scale(1.05);
    }

`  

const HeaderNavMain = styled.nav`
    display: flex;
    gap: 2vw;
    align-items: center;
    margin: 2vw;
`

const HeaderNavLink =  styled.a`
    margin: 1vw;
    padding: .5vw;
    cursor: pointer;
    transition: all .25s ease;
    color: #c60000;

    &:hover {
    color: #403535;
    }

`

export {
    HeaderContentMain,
    HeaderLogo,
    HeaderNavMain,
    HeaderNavLink
} 