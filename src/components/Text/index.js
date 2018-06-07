import { createElement } from 'rax'
import RaxText from 'rax-text'

const Text = ({ children, lines, style, color = '#181818', size = 30, width }) => {
  return (
    <RaxText
      style={Object.assign(
        {
          fontSize: size,
          color,
          width
        },
        style
      )}
      numberOfLines={lines}
    >
      {children}
    </RaxText>
  )
}

export default Text
