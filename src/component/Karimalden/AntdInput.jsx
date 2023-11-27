import React from 'react'
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
const AntdInput = () => {
  return (
    <span>
        <label for="exampleInputEmail1">Email address</label>
        <Input
    id="exampleInputEmail1"
   className="Antd_input"
placeholder="Enter your username"
suffix={
<Tooltip title="Extra hellow">
 <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
</Tooltip>
}
/> 

    </span>

 )
}

export default AntdInput