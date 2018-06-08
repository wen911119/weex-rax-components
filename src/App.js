import { createElement, Component } from 'rax'
import View from 'rax-view'
import Text from './components/Text'
import {
  RowView,
  ColumnView,
  XCenterView,
  SlotRowView,
  SlotColumnView
} from './components/LayoutView'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <ColumnView style={styles.app} vAlign='space-between'>
        <Text style={styles.appIntro} lines={2} size={60}>
          To get started, edit src/App.js and save to reload.To get started,
          edit src/App.js and save to reload.To get started, edit src/App.js and
          save to reload.To get started, edit src/App.js and save to reload.
        </Text>
        <XCenterView height={200}>
          <Text>绝对居中</Text>
        </XCenterView>
        <SlotRowView gap={20}>
          <Text>11111</Text>
          <Text>22222</Text>
          <Text>33333</Text>
          <Text>44444</Text>
          <Text>55555</Text>
          <Text>66666</Text>
        </SlotRowView>
        <SlotColumnView gap={20}>
          <Text>11111</Text>
          <Text>22222</Text>
          <Text>33333</Text>
        </SlotColumnView>
        <RowView height={300} bgColor='#f8584f' padding={[0, 30, 0, 30]}>
          <Text lines={2} size={30} width={300}>
            To get started, edit src/App.js and save to reload.To get started,
            edit src/App.js and save to reload.To get started, edit src/App.js
            and save to reload.To get started, edit src/App.js and save to
            reload.
          </Text>
        </RowView>
      </ColumnView>
    )
  }
}

export default App
