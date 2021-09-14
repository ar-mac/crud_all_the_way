import { Col, List, Row, Space, Tag, Typography } from 'antd'
import { Link } from '@reach/router'
import { useQuery } from 'react-query'
import axios from '../../api/axios'

export const Users = () => {
  // user list
  const { data, isLoading } = useQuery('users', () => axios.get('/users'), {
    select: (data) => ({ users: data.data }),
  })

  return (
    <>
      <Typography.Title level={2}>Users</Typography.Title>
      <Row>
        <Col span={12} offset={6}>
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={data?.users}
            renderItem={(item) => (
              <List.Item>
                <Space>
                  <Link to={`/users/${item.id}`}>{item.name}</Link>
                  {item.isFeatured && <Tag color="blue">Featured</Tag>}
                </Space>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
