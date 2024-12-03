import styled from "styled-components";

const ContentForm = styled.div`
    padding: 1vw;
    border: 1px solid black;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary};
`

const TitleForm = styled.h1`
    text-align: center;
    margin: .8vw;
    font-size: 2vw;
`

const Form = styled.form`
    text-align: center;
`

const FormElements = styled.div`
    margin: 2vw;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

`

const TextInput = styled.input`
    border-radius: 5px;
    border: none;
    padding: 3px;

    &: focus {
    outline: none
    } 
`

export {
    ContentForm,
    TitleForm,
    Form,
    TextInput,
    FormElements
}