import 'antd/dist/antd.css'
import { Router } from '@reach/router'
import { Layout } from 'antd'
import { AppHeader } from './AppHeader'
import { useLogin } from './hooks/useLogin'
import { AppContent } from './AppContent'
import {
  Users,
  User,
  UserPosts,
  FeaturedUsers,
  Posts,
  Post,
  FeaturedPosts,
  LoginWrapper,
  PostCreate,
} from './routes'

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
          <Users path="/users" />
          <FeaturedUsers path="/users/featured" />
          <User path="/users/:userId" />
          <UserPosts path="/users/:userId/posts" />
          <Posts path="/posts" />
          <FeaturedPosts path="/posts/featured" />
          <PostCreate path="/posts/create" />
          <Post path="/posts/:postId" />
          <Users path="/" />
        </Router>
      </AppContent>
    </Layout>
  )
}

export default App
