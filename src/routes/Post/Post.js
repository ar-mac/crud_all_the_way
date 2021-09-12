import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { Col, Divider, Row, Tag, Typography } from 'antd'
import { ObserverStatistic } from './ObserverStatistic'
import { PostRating } from './PostRating'

export const Post = () => {
  // fetch data for post
  const { data: postData, isLoading: isPostLoading } = {}

  if (isPostLoading) {
    return <LoadingSpinner />
  }

  // temporary
  const post = postData?.post || {
    title: 'Example post title',
    content: 'Example post content',
  }

  return (
    <>
      <Row gutter={16}>
        <Col>
          <Typography.Title level={2}>{post.title}</Typography.Title>
        </Col>
        <Col flex="1">
          <Tag color="blue">{post.status || 'Posted'}</Tag>
        </Col>
      </Row>

      <Divider orientation="left">Post content</Divider>
      <Typography>{post.content}</Typography>

      <Divider />
      <Row gutter={16}>
        <Col span={4}>
          <ObserverStatistic />
        </Col>
        <Col span={4}>
          <PostRating />
        </Col>
      </Row>
    </>
  )
}
