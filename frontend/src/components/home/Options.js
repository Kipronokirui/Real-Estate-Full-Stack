import React from 'react'
import { ChromeOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons'
import {Button, Card, List} from 'antd'

const data = [
    {
        title: "Buy a Property",
        content: [
            {
                icon: <HomeOutlined />,
                description:"It is a long established fact that a reader will be distracted by the readable"
            }
        ]
    },
    {
        title: "Sell a Property",
        content: [
            {
                icon: <ChromeOutlined />,
                description:"It is a long established fact that a reader will be distracted by the readable"
            }
        ]
    },
    {
        title: "Rent a Property",
        content: [
            {
                icon: <TeamOutlined />,
                description:"It is a long established fact that a reader will be distracted by the readable"
            }
        ]
    },
]
const Options = () => {
  return (
      <div id='options' className='block options-block bg-grey'>
          <div className='fluid-container'>
            <div className='title-section'>
                <h2>Choose an option that fits your needs</h2>
                <p>You will find us very amazing with our services</p>
              </div>
              <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3
                  }}
                  dataSource={data}
                  renderItem={(item) => (
                      <List.Item>
                          <Card title={item.title}>
                              <p className='large'>{item.content[0].icon}</p>
                              <p className='large'>{item.content[0].description}</p>
                              <Button type='primary' size='large'>
                                  <i className='fab fa-telegram-plane'></i>
                                  {" "}
                                    Get Started
                                </Button>
                          </Card>
                      </List.Item>
                  )}
              />
          </div>
      </div>
  )
}

export default Options