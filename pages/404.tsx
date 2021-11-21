import uiStore from 'store/ui.store'
import { Result, Button } from 'antd'

export default function Custom404() {
  uiStore.setLayout('Unauthorized')
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}
