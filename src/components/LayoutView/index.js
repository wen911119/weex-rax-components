import { createElement, cloneElement } from 'rax'
import View from 'rax-view'

function alternateInsert (arr, item) {
  let insertedArr = arr.reduce((all, current) => all.concat(current, item), [])
  insertedArr.pop()
  return insertedArr
}

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


export const XCenterView = ({
  children,
  style = {},
  height,
  width,
  bgColor = 'transparent'
}) =>
  <View
    style={Object.assign(
      {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        height: height,
        width: width
      },
      style
    )}
  >
    {children}
  </View>


export const Slot = ({ gap }) => <View style={{ width: gap }} />

export const SlotRowView = ({ gap = 0, children, ...otherProps }) => {
  const allChildren = alternateInsert(children, <Slot />)
  return (
    <RowView {...otherProps}>
      {allChildren.map(child => {
        if (child.type.name === 'Slot') {
          return cloneElement(child, { gap })
        }
        return child
      })}
    </RowView>
  )
}

export const Gap = ({ gap }) => <View style={{ height: gap }} />

export const SlotColumnView = ({ gap = 0, children, ...otherProps }) => {
  const allChildren = alternateInsert(children, <Gap />)
  return (
    <ColumnView {...otherProps}>
      {allChildren.map(child => {
        if (child.type.name === 'Gap') {
          return cloneElement(child, { gap })
        }
        return child
      })}
    </ColumnView>
  )
}
