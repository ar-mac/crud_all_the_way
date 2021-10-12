import {
  DislikeOutlined,
  LikeOutlined,
  LikeFilled,
  DislikeFilled,
} from '@ant-design/icons'
import { Statistic } from 'antd'
import { useCallback, useState } from 'react'
import { useQueryClient } from 'react-query'
import {
  getPostByIdQueryKey,
  useEditPost,
  useGetPostById,
} from '../../api/posts'

export const PostRating = ({ postId }) => {
  // fetch data for post rating
  const [yourRating, setYourRating] = useState(0)

  const queryClient = useQueryClient()
  const queryKey = getPostByIdQueryKey(postId)
  const { data: postData, isLoading: isPostLoading } = useGetPostById({
    postId,
  })

  const { mutate: editPost } = useEditPost({
    onMutate: async ({ rating }) => {
      await queryClient.cancelQueries(queryKey)

      const previousValue = queryClient.getQueryData(queryKey)

      queryClient.setQueryData(queryKey, (oldData) => ({
        ...oldData,
        rating,
      }))

      return previousValue
    },
    onError: (error, variables, previousValue) => {
      queryClient.setQueryData(queryKey, previousValue)
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKey)
    },
  })

  const handleEditPost = useCallback(
    (diff) => {
      editPost({
        ...postData.post,
        rating: postData.post.rating + diff,
      })
    },
    [editPost, postData?.post]
  )

  const likePost = useCallback(() => {
    setYourRating((currentRating) => {
      if (currentRating === 1) {
        handleEditPost(-1)
        return 0
      }

      if (currentRating === -1) {
        handleEditPost(2)
        return 1
      } else if (currentRating === 0) {
        handleEditPost(1)
        return 1
      }
    })
    //  like post
  }, [handleEditPost])

  const dislikePost = useCallback(() => {
    setYourRating((currentRating) => {
      if (currentRating === -1) {
        handleEditPost(1)
        return 0
      }

      if (currentRating === 1) {
        handleEditPost(-2)
        return -1
      } else if (currentRating === 0) {
        handleEditPost(-1)
        return -1
      }
    })
    //  dislike post
  }, [handleEditPost])

  return (
    <Statistic
      title="rating"
      loading={isPostLoading}
      value={postData?.post?.rating}
      prefix={
        yourRating === 1 ? (
          <LikeFilled onClick={likePost} />
        ) : (
          <LikeOutlined onClick={likePost} />
        )
      }
      suffix={
        yourRating === -1 ? (
          <DislikeFilled onClick={dislikePost} />
        ) : (
          <DislikeOutlined onClick={dislikePost} />
        )
      }
    />
  )
}
