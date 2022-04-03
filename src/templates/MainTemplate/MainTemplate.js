import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'

const MainTemplate = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    )
}

export default MainTemplate