import { Layout } from 'antd'
const { Content } = Layout

export const AppContent = ({ children }) => {
  return (
    <Content style={{ padding: '0 50px', height: 'calc(100vh - 64px)' }}>
      <Layout
        style={{ padding: '24px 0', backgroundColor: '#fff', height: '100%' }}
      >
        <Content style={{ padding: '0 24px' }}>{children}</Content>
      </Layout>
    </Content>
  )
}
