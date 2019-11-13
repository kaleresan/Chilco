import { colors } from './colors';

export interface ThemeType {
  colors: { [key: string]: string };
}

export const baseTheme: ThemeType = {
  colors
};
export default baseTheme;
