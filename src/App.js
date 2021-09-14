import 'antd/dist/antd.css'
import { Router } from '@reach/router'
import { Layout } from 'antd'
import { AppHeader } from './AppHeader'
import { useLogin } from './hooks/useLogin'
import { AppContent } from './AppContent'
import {
  Users,
  User,
  FeaturedUsers,
  Posts,
  Post,
  FeaturedPosts,
  LoginWrapper,
  PostCreate,
} from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
})

function App() {
  const { userId, login, logout } = useLogin()

  if (!userId) {
    return <LoginWrapper login={login} />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <AppHeader path="/*" logout={logout} />
        </Router>
        <AppContent>
          <Router>
            <Users path="/users" />
            <FeaturedUsers path="/users/featured" />
            <User path="/users/:userId" />
            <Posts path="/posts" />
            <FeaturedPosts path="/posts/featured" />
            <PostCreate path="/posts/create" />
            <Post path="/posts/:postId" />
            <Users path="/" />
          </Router>
        </AppContent>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
