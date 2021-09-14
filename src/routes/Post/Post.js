import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { Col, Divider, Row, Tag, Typography } from 'antd'
import { ObserverStatistic } from './ObserverStatistic'
import { PostRating } from './PostRating'
import axios from '../../api/axios'
import { useQuery } from 'react-query'

export const Post = ({ postId }) => {
  // fetch data for post
  const { data: postData, isLoading: isPostLoading } = useQuery(
    ['posts', postId],
    ({ queryKey }) => axios.get(`/posts/${queryKey[1]}`)
  )

  if (isPostLoading) {
    return <LoadingSpinner />
  }

  const post = postData?.data
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
          <PostRating postId={postId} />
        </Col>
      </Row>
    </>
  )
}
