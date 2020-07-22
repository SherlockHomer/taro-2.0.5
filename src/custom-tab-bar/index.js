import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'


import './index.scss'

const list = [
  {
    pagePath: '/pages/index/index',
    text: '首页',
    iconPath: '/images/tabbar/home.png',
    selectedIconPath: '/images/tabbar/home_selected.png',
  },
  {
    pagePath: '/pages/person/person',
    text: '个人',
    iconPath: '/images/tabbar/personal.png',
    selectedIconPath: '/images/tabbar/personal_selected.png',
  }
]

class CustomTabBar extends Taro.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  componentDidMount () {
  }

  componentDidUpdate = () => { }



  componentWillUnmount () {

  }

  // 不会触发
  componentDidHide = () => { }

  setIndex = (index) => {
    this.setState({ selected: index })
  }


  switchTab = (item, index) => {
    Taro.switchTab({ url: list[index].pagePath })
    // this.setState({ selected: index })
  }

  render () {
    const selected = this.state.selected;

    return (
      <View className='tabBar'>
        {list.map((item, tabIndex) => {
          const isSelected = selected == tabIndex
          return (
            <View
              className='tabBarItem'
              onClick={() => this.switchTab(item, tabIndex)}
              data-path={item.pagePath}
              key={item.text}
            >
              <View className='iconBox'>
                <Image className='icon'
                  src={isSelected ? item.selectedIconPath : item.iconPath}
                />
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default CustomTabBar
