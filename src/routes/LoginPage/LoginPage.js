import client from '../../api/axios'
import { useQuery } from 'react-query'
import { Select, Spin, Layout, Row, Col, Result } from 'antd'
import { AppHeader } from '../../AppHeader'
import { AppContent } from '../../AppContent'

const { Option } = Select

export const LoginPage = ({ login }) => {
  const { data, isLoading, isError } = useQuery('users', () =>
    client.get('/users')
  )

  if (isError) {
    return (
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Result
          status="error"
          title="Users not found."
          subTitle="You probably need to turn on the backend 'y run serv'"
        />
      </Row>
    )
  }

  if (isLoading) {
    return (
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Spin size="large" tip="Loading..." />
      </Row>
    )
  }

  return (
    <Layout>
      <AppHeader />
      <AppContent>
        <Row align="middle" justify="center">
          <Col>
            <Select
              style={{ width: 200 }}
              onChange={login}
              placeholder="Login as..."
            >
              {data.data.map((user) => (
                <Option value={user.id}>{user.name}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      </AppContent>
    </Layout>
  )
}
