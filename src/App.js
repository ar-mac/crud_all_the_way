import 'antd/dist/antd.css'
import { Router, useLocation } from '@reach/router'
import { Card, Layout } from 'antd'
import { AppHeader } from './AppHeader'

const { Content } = Layout

const DefaultComponent = () => {
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
      <Router>
        <AppHeader path="/*" />
      </Router>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', backgroundColor: '#fff' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Router>
              <DefaultComponent path="/users" />
              <DefaultComponent path="/users/featured" />
              <DefaultComponent path="/users/:userId" />
              <DefaultComponent path="/users/:userId/posts" />
              <DefaultComponent path="/posts" />
              <DefaultComponent path="/posts/featured" />
              <DefaultComponent path="/posts/:postId" />
              <DefaultComponent path="/" />
            </Router>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default App
