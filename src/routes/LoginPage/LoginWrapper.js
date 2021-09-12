import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginPage } from './LoginPage'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Router } from '@reach/router'
import { Layout } from 'antd'

const queryClient = new QueryClient()

export const LoginWrapper = ({ login }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <LoginPage path="/*" login={login} />
        </Router>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
