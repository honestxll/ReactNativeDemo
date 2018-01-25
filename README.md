# 说明
这是我在学习 `React-Native` 时做的一些东西，放在远程仓库里面不记得的时候可以看看。

# 使用
进入到目录首先需要先要安装的包装起来：
```bash
npm i
```
然后直接找到 `index.js`，它是这样的：
```js
import { AppRegistry } from 'react-native';
// import App from './app/Components/FlexLayout';
// import App from './app/Components/BackgroundImage';
// import App from './app/Components/ListView';
// import App from './app/Components/ListView2';
// import App from './app/Components/FlatList';
// import App from './app/Components/USBox';
// import App from './app/Navigator/ReactNavigationDemo';
import App from './app/Navigator/TabNavigatorDemo';

AppRegistry.registerComponent('MovieTalk', () => App);
```
你想看哪个就把当前的组件注释掉，把想看的开启就行了。

# 导航
我在做项目的时候想使用导航，但发现安卓和苹果不能没有一个可以公用的组件，在官网上找到了 `react-navigation`。我把这块的内容单独的放在了 `app/Navigator` 下，你也可以直接参照 `TabNavigatorDemo.js` 做出一个导航菜单。
