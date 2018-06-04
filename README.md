# mi

## vue-cli 3.0.0-beta10使用

### 安装

```
cnpm install -g @vue/cli@3.0.0-beta.10
```

### 生成项目

```
vue create mi
```

```
?Please pick a preset
default (babel,eslint)
Manually select features √
```

```
Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
### 我们选择
Router  √
Vuex   √
Linter / Formatter √
```

```
Pick a linter / formatter config:
ESLint + Standard config √
```

```
Pick additional lint features:
Lint on save √
```

```
Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
> In dedicated config files  √
```

```
Save this as a preset for future projects? (y/N)
n
```

### 启动项目

```
# 已经由之前的 npm run dev 改为如下
npm run serve 
# 或者
yarn serve 
```

## 官网一个大坑 3.0.0-beta10

```
vue-cli 3.0.0-beta10
vue-cli 3.0.0-beta11
这两个你按照上面的步骤初始化之后会报错
意思是你的组件没注册，但是组件在路由里已经注册了，但是main.js里 没有注入路由
```

![](https://raw.githubusercontent.com/slTrust/note/master/img/mi_004_01.png)

![](https://raw.githubusercontent.com/slTrust/note/master/img/mi_004_02.png)

> 引入后项目初始化成功

至此你已经构建了一个无配置的脚手架

