import { theme } from '@theme/theme'
import 'styled-components/native'

type Theme = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme{
    borderRadius: string;
  }
}
