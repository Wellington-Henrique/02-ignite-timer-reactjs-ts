import styled from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    min-width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;
    margin: 8px;

    cursor: pointer;

    background-color: ${({theme}) => theme['green-500']};
    color: ${({theme}) => theme.white}
`