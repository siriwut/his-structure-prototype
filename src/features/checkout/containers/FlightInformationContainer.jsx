import React from 'react'
import {
  Input,
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Row,
  Col
} from 'antd'
import 'antd/dist/antd.css'
const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class FlightInformationContainer extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <Row>
        <Col span={12} offset={6}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="Country"
              hasFeedback
            >
              {getFieldDecorator('country', {
                rules: [
                  { required: true, message: 'Please select your country!' },
                ],
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Full Name"
            >
              {getFieldDecorator('fullName', {
                rules: [
                  { required: true, message: 'Please fill full name' },
                ],
              })(
                <Input placeholder="Example: Siriwut Ponwapee" />
              )}
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 6 }}
            >
              <Button type="primary" htmlType="submit">Go to Payment</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Form.create()(FlightInformationContainer)
