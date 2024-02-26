import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      Ok
    </ButtonContainer>
  )
}
