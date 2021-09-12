import { Link, useLocation } from '@reach/router'
import { Menu, Layout } from 'antd'

const { Header } = Layout

const useGetDefaultNavigation = () => {
  const { pathname } = useLocation()

  if (/\/users\/\d+/.test(pathname)) {
    return ['/users']
  }
  if (/\/posts\/\d+/.test(pathname)) {
    return ['/posts']
  }
  return [pathname]
}

export const AppHeader = () => {
  const selectedKeys = useGetDefaultNavigation()

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKeys}>
        <Menu.Item key="/">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
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
      </Menu>
    </Header>
  )
}
