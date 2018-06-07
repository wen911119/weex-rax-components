import { createElement } from 'rax'
import View from 'rax-view'

export const RowView = ({
  children,
  vAlign = 'center',
  hAlign = 'flex-start',
  height,
  width,
  bgColor = 'transparent',
  padding = [0, 0, 0, 0],
  margin = [0, 0, 0, 0],
  style = {}
}) =>
  <View
    style={Object.assign(
      {
        flexDirection: 'row',
        alignItems: vAlign,
        justifyContent: hAlign,
        backgroundColor: bgColor,
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
        height,
        width
      },
      style
    )}
  >
    {children}
  </View>


export const ColumnView = ({
  children,
  vAlign = 'inherit',
  hAlign = 'inherit',
  padding = [0, 0, 0, 0],
  margin = [0, 0, 0, 0],
  bgColor = 'transparent',
  width,
  height,
  style = {}
}) =>
  <View
    style={Object.assign(
      {
        flexDirection: 'column',
        alignItems: hAlign,
        justifyContent: vAlign,
        backgroundColor: bgColor,
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
        height: height,
        width: width
      },
      style
    )}
  >
    {children}
  </View>

