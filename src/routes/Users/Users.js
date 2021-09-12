import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const Users = () => {
  // user list with pagination functionality
  const { data, isLoading } = {}

  const handlePaginationChange = (page, pageSize) => {
    // fetch selected page
  }

  return (
    <>
      <Typography.Title level={2}>Users</Typography.Title>
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
