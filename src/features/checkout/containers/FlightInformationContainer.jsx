import React from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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

import { flightInformation } from '../reducers'

const { actions: flightInformationAction } = flightInformation

const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const mapStateToProps = state => ({
  countryOptions: state.checkout.flightInformation.countries
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addFlightInformation: flightInformationAction.addFlightInformation
}, dispatch)

class FlightInformationContainer extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { form, history, addFlightInformation } = this.props

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        addFlightInformation(values)
        history.push('/checkout/payment')
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, countryOptions } = this.props

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
              hasFeedback>
              {getFieldDecorator('country', {
                rules: [
                  { required: true, message: 'Please select your country!' },
                ],
              })(
                <Select placeholder="Please select a country">
                  { countryOptions && countryOptions.map(country => (
                      <Option key={ country.value } value={country.value}>
                        { country.label }
                      </Option>
                    ))
                  }
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Full Name">
              {getFieldDecorator('fullName', {
                rules: [
                  { required: true, message: 'Please fill full name' },
                ],
              })(
                <Input placeholder="Example: Siriwut Ponwapee" />
              )}
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">Go to Payment</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(FlightInformationContainer)
