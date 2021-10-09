import client from '../../api/axios'
import { useQuery } from 'react-query'
import { Select, Layout, Row, Col, Result, Typography } from 'antd'
import { AppHeader, AppContent } from '../../layout'
import { LoadingSpinner } from '../../shared/LoadingSpinner'

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

  const handleLogin = (userId) => {
    login({ userId, userName: data.data.find(({ id }) => id === userId).name })
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Layout>
      <AppHeader />
      <AppContent>
        <Row align="middle" justify="center" style={{ height: '100%' }}>
          <Col>
            <Row>
              <Typography.Title level={3}>
                Select user you want to login as:
              </Typography.Title>
            </Row>
            <Row>
              <Typography.Text type="secondary">
                Implementing secure login is not in the scope of this workshops
                ;)
              </Typography.Text>
            </Row>
            <Row>
              <Select
                style={{ width: 200 }}
                onChange={handleLogin}
                placeholder="Login as..."
              >
                {data.data.map((user) => (
                  <Option value={user.id}>{user.name}</Option>
                ))}
              </Select>
            </Row>
          </Col>
        </Row>
      </AppContent>
    </Layout>
  )
}
