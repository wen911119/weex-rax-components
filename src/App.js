import { createElement, Component } from 'rax'
import View from 'rax-view'
import Text from './components/Text'
import { RowView, ColumnView } from './components/LayoutView'
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
