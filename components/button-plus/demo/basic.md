---
order: 0
title:
  zh-CN: 按钮二次封装
  en-US: Type
---

## zh-CN

- 在antd.Button组件基础上封装, type属性值增加`del`, 删除按钮弹窗确认框
- 兼容antd.Button组件

## en-US

````jsx
import { message } from 'antd'
import { ButtonPlus } from 'ats'

ReactDOM.render(
  <ButtonPlus type="del" onClick={() => message.success('删除成功')}>删除</ButtonPlus>,
  mountNode);
````

<style>
.ant-popover-message {
  min-width: 222px;
  padding-bottom: 30px;
}
</style>
