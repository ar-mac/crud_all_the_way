import { Col, List, Row, Typography } from 'antd'
import { Link } from '@reach/router'

export const Users = () => {
  // user list
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={2}>Users</Typography.Title>
      <Row>
        <Col span={12} offset={6}>
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={data?.users}
            renderItem={(user) => (
              <List.Item actions={[<Link to={`/users/${user.id}`}>Show</Link>]}>
                {user.name}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
