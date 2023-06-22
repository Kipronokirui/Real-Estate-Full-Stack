import React from 'react'
import { Button, Collapse } from 'antd'

const {Panel} = Collapse

const Faqs = () => {
  return (
      <div id='faq' className='block faq-block'>
          <div className='fluid-container'>
              <div className='title-section'>
                  <h2>Frequently asked questions</h2>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                  </p>
              </div>
              <Collapse defaultActiveKey={["1"]}>
                  <Panel header="How do I find the right property?">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                  </Panel>
                  <Panel header="How do I find an agent?">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                  </Panel>
                  <Panel header="Who are your major clients?">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                  </Panel>
              </Collapse>
              <div className='quick-support'>
                    <h3>Do you want a quick support</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
              </div>
              <Button type='primary' size='large'>
                  <i className='fas fa-envelope'></i>Email Us Now
              </Button>
          </div>
      </div>
  )
}

export default Faqs