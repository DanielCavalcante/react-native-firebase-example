import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'
import AddItem from './screens/AddItem'
import ListItem from './screens/ListItem'

const AppNavigator = createStackNavigator({
  ListItem: ListItem
})

export default createAppContainer(AppNavigator)