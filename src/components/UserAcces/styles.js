import styled from "styled-components";

const HeaderUserAcces = styled.header`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 100%;
    align-content: center;
    justify-items: center;
`
const Logo = styled.img`
    width: 15vw;
    padding: 1vw;
    cursor: pointer;
    transition: all .20s ease-out;

    &:hover {
    transform: scale(1.03);
    }
`

const MainContent = styled.main`
    width: 100%;
    padding: 1vw;
    box-sizing: border-box;
    height: 100%;
    background-color: ${props => props.theme.colors.second};
`

const SectionForms = styled.section`
    display: flex;
    padding: 1vw;
    justify-content: center;
    gap: 3vw;
    align-items: start;
`

const CreateCount = styled.section`
    text-align: center;
    margin: 10px;
`

export {
    HeaderUserAcces,
    Logo,
    MainContent,
    SectionForms,
    CreateCount
}