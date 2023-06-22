import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import {Button, Carousel} from 'antd'

const items = [
    {
        key: "1",
        title: "Buy or Sell Properties",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    },
    {
        key: "2",
        title: "Buy or Sell Land",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    },
    {
        key: "3",
        title: "Buy or Sell Office Stuff",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    },
]
function Banner() {
  return (
      <div id='banner' className='banner-section'>
          <Carousel>
              {items.map((item) => {
                  return (
                      <div key={item.key} className='fluid-container'>
                          <div className='content'>
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                              <div className='btn-group'>
                                  <Button type='primary' size='large'>
                                      Learn More
                                  </Button>
                                  <Button icon={<SearchOutlined />} size='large'>
                                      Search
                                  </Button>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </Carousel>
      </div>
  )
}

export default Banner