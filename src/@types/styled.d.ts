import 'styled-components'
import { lightTheme } from '../styles/themes/default'

type ThemeType = typeof lightTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}