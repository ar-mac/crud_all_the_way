// resource selectors

import { some } from 'lodash'

export const getObservations = (data) => data

export const getObservationsCount = (data) => data.length

export const getIsUserObservingPost = (data, userId) =>
  some(
    data,
    (observation) => parseInt(observation.userId) === parseInt(userId, 10)
  )
