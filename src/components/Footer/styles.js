import styled from "styled-components";

const FooterMain = styled.footer`
    background-color: ${props => props.theme.colors.footerMain};
    display: flex;
    padding: 1vw;
    justify-content: center;
    gap: 5vw;
`

const FooterNav = styled.nav`
    display: flex;
    padding: 1vw;
    box-sizing: border-box;
    text-align: center;
    align-items: center;
    gap: 1vw;

`

const FooterNavLink = styled.a`
    color:${props => props.theme.colors.footerLinks};
    cursor: pointer;
    transition: all .20s ease;

    &:hover {
        transform: scale(1.03);
        color: #fff;
    }
`

const FooterDivLogo = styled.div`
    width: 30vw;
    text-align: end;
    display: inline-block;
`

const FooterLogo = styled.img`
    width: 6vw;
    padding: 0 1vw;
    transition: all .20s ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`


export {
    FooterMain,
    FooterNav,
    FooterNavLink,
    FooterDivLogo,
    FooterLogo
}