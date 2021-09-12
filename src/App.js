import 'antd/dist/antd.css'
import { Router, useLocation } from '@reach/router'
import { Card, Layout } from 'antd'
import { AppHeader } from './AppHeader'
import { LoginWrapper } from './routes/LoginPage'
import { useLogin } from './hooks/useLogin'
import { AppContent } from './AppContent'

const DefaultComponent = () => {
  const { pathname } = useLocation()

  return (
    <div>
      <Card title={pathname} style={{ width: 300 }} />
    </div>
  )
}
function App() {
  const { userId, login, logout } = useLogin()

  if (!userId) {
    return <LoginWrapper login={login} />
  }

  return (
    <Layout>
      <Router>
        <AppHeader path="/*" logout={logout} />
      </Router>
      <AppContent>
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
      </AppContent>
    </Layout>
  )
}

export default App
