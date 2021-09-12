import { Link, useLocation } from '@reach/router'
import { Menu, Layout, Button, Col, Row, Typography } from 'antd'

const { Header } = Layout
const { Title } = Typography

const useGetDefaultNavigation = () => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return ['/users']
  }
  if (/\/users\/\d+/.test(pathname)) {
    return ['/users']
  }
  if (/\/posts\/\d+/.test(pathname)) {
    return ['/posts']
  }
  return [pathname]
}

export const AppHeader = ({ logout }) => {
  const selectedKeys = useGetDefaultNavigation()

  return (
    <Header>
      <Row gutter={[0, 0]} align="middle" justify="space-between">
        <Col>
          <Title level={3} style={{ color: '#fff' }}>
            CRUD all-the-way
          </Title>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={selectedKeys}
          >
            {logout ? (
              <>
                <Menu.Item key="/users">
                  <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item key="/users/featured">
                  <Link to="/users/featured">Featured users</Link>
                </Menu.Item>
                <Menu.Item key="/posts">
                  <Link to="/posts">Posts</Link>
                </Menu.Item>
                <Menu.Item key="/posts/featured">
                  <Link to="/posts/featured">Featured Posts</Link>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item key="none">&nbsp;</Menu.Item>
            )}
          </Menu>
        </Col>
        {logout && (
          <Col>
            <Button onClick={logout}>Logout</Button>
          </Col>
        )}
      </Row>
    </Header>
  )
}
