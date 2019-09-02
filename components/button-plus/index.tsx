import * as React from 'react';
import { Button, Popconfirm } from 'antd';

export default class ButtonPlus extends React.Component<any> {
    render() {
      const { type, onClick } = this.props
      if(type == 'del') {
        return (
          <Popconfirm title="确认要删除吗?" onConfirm={onClick} style={{width: 200}}>
            <Button {...this.props} type="danger" onClick={(e:any) => e.preventDefault()}>删除</Button>
          </Popconfirm>
        )
      }
      else {
          return <Button {...this.props}></Button>
      }
    }
}