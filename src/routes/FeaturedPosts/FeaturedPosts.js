import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const FeaturedPosts = () => {
  // fetch posts filtered by isFeatured = true
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={2}>Featured Posts</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.posts}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </List.Item>
        )}
      />
    </>
  )
}
