import { List, Space, Tag, Typography } from 'antd'
import { Link } from '@reach/router'

export const Posts = () => {
  // user list with pagination functionality
  const { data, isLoading } = {}

  const handlePaginationChange = (page, pageSize) => {
    // fetch selected page
  }

  return (
    <>
      <Typography.Title level={2}>Posts</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        pagination={{
          position: 'bottom',
          // current: 1,
          // total: 100,
          hideOnSinglePage: false,
          onChange: handlePaginationChange,
        }}
        dataSource={data?.posts}
        renderItem={(item) => (
          <List.Item>
            <Space>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
              {item.isFeatured && <Tag color="blue">Featured</Tag>}
            </Space>
          </List.Item>
        )}
      />
    </>
  )
}
