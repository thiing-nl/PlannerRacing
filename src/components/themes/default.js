// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: [
    '#131f3a', // 0
    '#1f3460', // 1
    '#2c4986', // 2
    '#395ead', // 3
    '#5277c6', // 4
    '#7995d3', // 5
    '#9fb3e0', // 6
    '#c5d2ec', // 7
  ],
  secondary: [
    '#fca71c', // 0
    '#fdbb4f', // 1
    '#fdce81', // 2
    '#fee2b3', // 3
    '#fff5e6', // 4
  ],
  danger: [
    '#d32f2f', // 0
    '#f44336', // 1
    '#f8877f', // 2
    '#ffcdd2', // 4
  ],
  alert: [
    '#ffa000', // 0
    '#ffc107', // 1
    '#ffd761', // 2
    '#ffecb3', // 2
  ],
  success: [
    '#388e3c', // 0
    '#4caf50', // 1
    '#7cc47f', // 2
    '#c8e6c9', // 3
  ],
  white: [
    '#fff', // 0
    '#fff', // 1
    '#eee', // 2
  ],
  grayscale: [
    '#212121', // 0
    '#414141', // 1
    '#616161', // 2
    '#9e9e9e', // 3
    '#bdbdbd', // 4
    '#e0e0e0', // 5
    '#eeeeee', // 6
    '#ffffff', // 7
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
