import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class person extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('切换后页面的tabbar', this.$scope.getTabBar())
    this.$scope.getTabBar().setData({
      selected: 1
    })
  }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    return (
      <View className='index'>
        <Text>个人中心</Text>
      </View>
    )
  }
}
