import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const FeaturedUsers = () => {
  // fetch users filtered by isFeatured = true
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={2}>Featured Users</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.users}
        renderItem={(user) => (
          <List.Item actions={[<Link to={`/users/${user.id}`}>Show</Link>]}>
            <div>{user.name}</div>
          </List.Item>
        )}
      />
    </>
  )
}
