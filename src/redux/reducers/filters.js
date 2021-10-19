import {
  ADD_REGION_SUCCESS,
  ADD_REGION_FAIL,
  GET_ALL_REGIONS_SUCCESS,
  GET_ALL_REGIONS_FAIL,
  ADD_STATUS_SUCCESS,
  ADD_STATUS_FAIL,
  GET_ALL_STATUSES_SUCCESS,
  GET_ALL_STATUSES_FAIL,
  GET_PRICE_RANGE_SUCCESS,
  GET_PRICE_RANGE_FAIL,
  ADD_PURPOSE_SUCCESS,
  ADD_PURPOSE_FAIL,
  GET_ALL_PURPOSES_SUCCESS,
  GET_ALL_PURPOSES_FAIL,
  ADD_TYPE_SUCCESS,
  ADD_TYPE_FAIL,
  GET_ALL_TYPES_SUCCESS,
  GET_ALL_TYPES_FAIL,
} from '../actions/types'

const initialState = {
  regions: [],
  statuses: [],
  purposes: [], 
  types: [], 
  range: {},
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_REGION_SUCCESS:
      return {
        ...state,
        regions: [...state.regions, payload],
      }
    case GET_ALL_REGIONS_SUCCESS:
      return {
        ...state,
        regions: payload,
      }
    case ADD_STATUS_SUCCESS:
      return {
        ...state,
        statuses: [...state.statuses, payload],
      }
    case GET_ALL_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: payload,
      }
    case ADD_PURPOSE_SUCCESS:
      return {
        ...state,
        purposes: [...state.purposes, payload],
      }
    case GET_ALL_PURPOSES_SUCCESS:
      return {
        ...state,
        purposes: payload,
      }
    case ADD_TYPE_SUCCESS:
      return {
        ...state,
        types: [...state.types, payload],
      }
    case GET_ALL_TYPES_SUCCESS:
      return {
        ...state,
        types: payload,
      }
    case GET_PRICE_RANGE_SUCCESS:
      return {
        ...state,
        range: payload,
      }
    case ADD_STATUS_FAIL:
    case GET_ALL_STATUSES_FAIL:
    case ADD_REGION_FAIL:
    case GET_ALL_REGIONS_FAIL:
    case GET_PRICE_RANGE_FAIL:
    case ADD_PURPOSE_FAIL:
    case GET_ALL_PURPOSES_FAIL:
    case ADD_TYPE_FAIL:
    case GET_ALL_TYPES_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
