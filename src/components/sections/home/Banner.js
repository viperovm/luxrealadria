import React, { Component, useState, useEffect } from 'react'
import {
  locationlist,
  statuslist,
  pricerangelist,
  bedslist,
  bathroomslist,
  typeslist,
  diameterlist,
} from '../../../data/select.json'
import Select2 from 'react-select2-wrapper'
import classNames from 'classnames'
import { connect } from 'react-redux'

const Banner = ({ regions, statuses, purposes, types, range, beds, baths }) => {
  const [advancesearch, setAdvancesearch] = useState(false)

  const [regionsValue, setRegionsValue] = useState([])
  const [statusesValue, setStatusesValue] = useState([])
  const [purposesValue, setPurposesValue] = useState([])
  const [typesValue, setTypesValue] = useState([])
  const [rangeValue, setRangeValue] = useState(null)
  const [bedsValue, setBedsValue] = useState([])
  const [bathsValue, setBathsValue] = useState([])

  const [priceValue, setPriceValue] = useState(null)

  useEffect(() => {
    if (regions) {
      let arr = []
      regions.map(item => arr.push(item.name))
      setRegionsValue(arr)
    }
  }, [regions])

  useEffect(() => {
    if (statuses) {
      let arr = []
      statuses.map(item => arr.push(item.name))
      setStatusesValue(arr)
    }
  }, [statuses])

  useEffect(() => {
    if (purposes) {
      let arr = []
      purposes.map(item => arr.push(item.name))
      setPurposesValue(arr)
    }
  }, [purposes])

  useEffect(() => {
    if (types) {
      let arr = []
      types.map(item => arr.push(item.name))
      setTypesValue(arr)
    }
  }, [types])

  useEffect(() => {
    if (types) {
      let arr = []
      types.map(item => arr.push(item.name))
      setTypesValue(arr)
    }
  }, [types])

  useEffect(() => {
    if (range) {
      setRangeValue(range)
    }
  }, [range])

  useEffect(() => {
    if (beds) {
      let arr = []
      for (let i = parseInt(beds); i >= 1; i--) {
        arr.push(i)
      }

      setBedsValue(
        arr.sort(function (a, b) {
          return b - a
        })
      )
      console.log('beds ', arr)
    }
  }, [beds])

  useEffect(() => {
    if (baths) {
      let arr = []
      for (let i = parseInt(baths); i >= 1; i--) {
        arr.push(i)
      }

      setBathsValue(
        arr.sort(function (a, b) {
          return b - a
        })
      )
      console.log('baths ', arr)
    }
  }, [baths])

  const advancetoggle = () => {
    setAdvancesearch(!advancesearch)
  }
  const handleRange = e => {
    setPriceValue(e.target.value)
  }
  return (
    <div
      className='banner dark-overlay bg-cover bg-center'
      style={{
        backgroundImage:
          'url(' + process.env.PUBLIC_URL + '/assets/img/categories/7.jpg)',
      }}
    >
      <div className='container'>
        <div className='banner-item'>
          <div className='banner-inner'>
            <div className='banner-text'>
              <h1 className='title text-white'>
                ?????????????? ?????? ?????????????????? ?????? ??????????????!
              </h1>
              <p className='subtitle text-white'>
                ?????????? ???????????? ?? ?????? ?????????? ?????????????????????? ???????????????? ????????????????????????. ????
                ???????????????? ???????? ????????!
              </p>
            </div>
            <div className='acr-filter-form'>
              <form method='post'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <label>????????????: </label>
                      <Select2
                        data={['?????????? ????????????', ...regionsValue]}
                        options={{
                          placeholder: '?????????? ????????????',
                        }}
                        onChange={e => console.log(e.target)}
                      />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <label>????????????????????: </label>
                      <Select2
                        data={['?????????? ????????????????????', ...purposesValue]}
                        options={{
                          placeholder: '?????????? ????????????????????',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <div className='d-flex justify-content-between'>
                        <div>???? ???{rangeValue && rangeValue.lowest}</div>

                        <div>???? ???{priceValue}</div>
                      </div>
                      <input
                        type='range'
                        class='form-range'
                        min={rangeValue && rangeValue.lowest}
                        max={rangeValue && rangeValue.highest}
                        step='10000'
                        id='customRange3'
                        value={priceValue}
                        onChange={e => handleRange(e)}
                      ></input>
                    </div>
                  </div>
                  <div className='submit-btn col-lg-2 col-md-6'>
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn-custom secondary btn-block'
                        name='button'
                      >
                        ?????????? ????????????????
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames('advanced-search', {
                    'd-block': advancesearch,
                  })}
                >
                  <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>??????????????: </label>
                        <Select2
                          data={['?????????? ??????-????', ...bedsValue]}
                          options={{
                            placeholder: '?????????? ??????-????',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>??????????????: </label>
                        <Select2
                          data={['?????????? ??????-????', ...bathsValue]}
                          options={{
                            placeholder: '?????????? ??????-????',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>??????: </label>
                        <Select2
                          data={['?????????? ??????', ...typesValue]}
                          options={{
                            placeholder: '?????????? ??????',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='form-group acr-custom-select'>
                        <label>????????????: </label>
                        <Select2
                          data={['?????????? ????????????', ...statusesValue]}
                          options={{
                            placeholder: '?????????? ????????????',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className={classNames('advanced-search-trigger semi-circle', {
                  active: advancesearch,
                })}
                onClick={advancetoggle}
              >
                <i className='fas fa-chevron-down' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  regions: state.filters.regions,
  statuses: state.filters.statuses,
  purposes: state.filters.purposes,
  types: state.filters.types,
  range: state.filters.range,
  beds: state.filters.beds,
  baths: state.filters.baths,
})

export default connect(mapStateToProps)(Banner)
