import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
import { useCallback } from 'react'
import { useLogin } from '../../hooks/useLogin'
import {
  getObservationsCount,
  useGetObservationsForPost,
} from '../../api/observations'

export const ObserverStatistic = ({ postId }) => {
  const { userId } = useLogin()
  // fetch if current user is observing post
  const {
    data: currentUserObservingData,
    isLoading: isLoadingCurrentUserObservingData,
  } = { userId }

  // fetch number of post observers
  const { data: observingData, isLoading: isObservingLoading } =
    useGetObservationsForPost({
      postId,
      selectors: { observationsLength: getObservationsCount },
    })

  const observePost = useCallback(() => {
    //  observe post
  }, [])

  const stopObservingPost = useCallback(() => {
    //  stop post
  }, [])

  const getPrefix = () => {
    if (isLoadingCurrentUserObservingData) {
      return null
    }

    if (currentUserObservingData?.isObserving) {
      return <UserDeleteOutlined onClick={stopObservingPost} />
    }
    return <UserAddOutlined onClick={observePost} />
  }

  return (
    <Statistic
      title="# of observers"
      loading={isLoadingCurrentUserObservingData || isObservingLoading}
      value={observingData?.observationsLength}
      prefix={getPrefix()}
    />
  )
}
