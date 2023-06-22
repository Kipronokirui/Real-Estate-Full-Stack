import React from 'react'
import {Col, Row} from 'antd'

const items = [
    {
        key: "1",
        icon: <i className='fas fa-search-location'></i>,
        title: "Simplified Search",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    },
    {
        key: "2",
        icon: <i className='fas fa-database'></i>,
        title: "Lots of Properties",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    },
    {
        key: "3",
        icon: <i className='fas fa-globe-africa'></i>,
        title: "Proudly African",
        content: "It is a long established fact that a reader will be distracted by the readable content of"
    }
]
const About = () => {
  return (
      <div id='about' className='block about-section'>
          <div className='fluid-container'>
              <div className='title-section'>
                  <h2>About Us</h2>
                  <p>You will find us very amazing with our services</p>
              </div>
              <div className='content-section'>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              </div>
              <Row gutter={[16, 16]}>
                  {items.map((item) => {
                      return (
                          <Col md={{ span: 8 }} key={item.key}>
                              <div className='content'>
                                  <div className='icon'>
                                      {item.icon}
                                  </div>
                                  <h3>{item.title}</h3>
                                  <p>{item.content}</p>
                              </div>
                          </Col>
                      )
                  })}
              </Row>
          </div>
      </div>
  )
}

export default About