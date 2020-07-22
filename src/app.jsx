import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidCatchError () { }

  config = {
    pages: [
      'pages/index/index',
      'pages/person/person'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      custom: true,
      color: "#000000",
      selectedColor: "#000000",
      backgroundColor: "#fff",
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './images/tabbar/home.png',
          selectedIconPath: './images/tabbar/home_selected.png',
        },
        {
          pagePath: 'pages/person/person',
          text: '个人',
          iconPath: './images/tabbar/personal.png',
          selectedIconPath: './images/tabbar/personal_selected.png',
        }
      ],
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
