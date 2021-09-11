import './App.css'
import 'antd/dist/antd.css'
import { Link, Router, useLocation } from '@reach/router'
import { Card, Layout, Menu } from 'antd'

const { Content, Header } = Layout

const Comp = () => {
  const { pathname } = useLocation()

  return (
    <div>
      <Card title={pathname} style={{ width: 300 }} />
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/users/featured">Featured users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/posts/featured">Featured Posts</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', backgroundColor: '#fff' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Router>
              <Comp path="/users" />
              <Comp path="/users/featured" />
              <Comp path="/users/:userId" />
              <Comp path="/users/:userId/posts" />
              <Comp path="/posts" />
              <Comp path="/posts/featured" />
              <Comp path="/posts/:postId" />
              <Comp path="/" />
            </Router>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default App
