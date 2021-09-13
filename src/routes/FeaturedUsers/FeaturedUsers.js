import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const FeaturedUsers = () => {
  // fetch users filtered by isFeatured = true and limit to 3
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={2}>Featured Users</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.users}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/users/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </>
  )
}
