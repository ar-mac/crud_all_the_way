import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { Col, Divider, Row, Tag, Typography } from 'antd'
import { ObserverStatistic } from './ObserverStatistic'
import { PostRating } from './PostRating'
import { useGetPostById } from '../../api/posts'

export const Post = ({ postId }) => {
  // fetch data for post
  const { data: postData, isLoading: isPostLoading } = useGetPostById({
    postId,
  })

  if (isPostLoading) {
    return <LoadingSpinner />
  }

  const post = postData?.post
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Typography.Title level={2}>{post.title}</Typography.Title>
        </Col>
        <Col flex="1">
          {!post.isPublished && <Tag color="yellow">Draft</Tag>}
          {post.isFeatured && <Tag color="green">Featured</Tag>}
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
