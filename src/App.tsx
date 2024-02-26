import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default';

import { Button } from "./assets/Button";
import { GlobalStyle } from './styles/globals';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Button variant='primary'/>
        <Button variant='secondary'/>
        <Button variant='danger'/>
        <Button variant='success'/>
        <Button/>
    </ThemeProvider>
  )
}