import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const FeaturedPosts = () => {
  // fetch users filtered by isFeatured = true
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={2}>Featured Posts</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.posts}
        renderItem={(post) => (
          <List.Item actions={[<Link to={`/posts/${post.id}`}>Show</Link>]}>
            <div>{post.name}</div>
          </List.Item>
        )}
      />
    </>
  )
}
