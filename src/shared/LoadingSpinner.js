import { Row, Spin } from 'antd'

export const LoadingSpinner = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Spin size="large" tip="Loading..." />
    </Row>
  )
}
