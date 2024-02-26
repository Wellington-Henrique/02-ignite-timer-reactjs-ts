import styled, { css } from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    min-width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;
    margin: 8px;

    cursor: pointer;

    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white}
`