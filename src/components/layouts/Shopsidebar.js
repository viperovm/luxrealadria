import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Calculator from './Calculator'
import Select2 from 'react-select2-wrapper'
import listing from '../../data/listings.json'
import {
  locationlist,
  statuslist,
  pricerangelist,
  bedslist,
  bathroomslist,
  typelist,
} from '../../data/select.json'
import { Collapse } from 'react-bootstrap'

import { numberWithSpaces } from '../../helper/helper'

const Shopsidebar = ({ filters}) => {


  const [regionsValue, setRegionsValue] = useState([])
  const [statusesValue, setStatusesValue] = useState([])
  const [purposesValue, setPurposesValue] = useState([])
  const [typesValue, setTypesValue] = useState([])
  const [rangeValue, setRangeValue] = useState(null)
  const [bedsValue, setBedsValue] = useState([])
  const [bathsValue, setBathsValue] = useState([])

  const [priceValue, setPriceValue] = useState(null)

  const [searchFilter, setSearchFilter] = useState([])
  const [values, setValues] = useState([])

const action = ({target}) => {
    if (target && target.value) {
         console.log(1, target.value)
        if (searchFilter.length === 0){
            console.log(2)
            setSearchFilter([{ name: target.name, value: target.value }])
            console.log(3)
        }else{

            let counter = 0
            console.log(4, counter)
            setSearchFilter(searchFilter.map(item => {
              if (item.name === target.name) {
                counter++
                console.log(5, counter)
                return (item = { name: target.name, value: target.value })
              } else {
                console.log(6, item)
                return item
              }
            }))
            if (counter === 0) {
                console.log(7)
              setSearchFilter([
                ...searchFilter,
                { name: target.name, value: target.value },
              ])
              counter = 0
            }

        }
        
        
    }

    
}

console.log(searchFilter)

  useEffect(() => {
    if (filters) {
      setRegionsValue(filters.regions)
      setStatusesValue(filters.statuses)
      setPurposesValue(filters.purposes)
      setTypesValue(filters.types)
      setRangeValue(filters.range)
      setBedsValue(filters.beds)
      setBathsValue(filters.baths)
    }
  }, [filters])

  const handleRange = ({target}) => {
    setPriceValue(target.value)
  }

  const [open, setOpen] = useState(true)
  return (
    <div className='sidebar sidebar-left'>
      <div className='sidebar-widget'>
        <div
          className='acr-collapse-trigger acr-custom-chevron-wrapper'
          onClick={() => setOpen(!open)}
        >
          <h5>???????????? ????????????????</h5>
          <div className='acr-custom-chevron'>
            <span />
            <span />
          </div>
        </div>
        <Collapse in={open}>
          <div className='acr-collapsable'>
            <div className='acr-filter-form'>
              <form>
                <div className='acr-custom-select form-group'>
                  <label>????????????: </label>
                  <Select2
                    // value={values.propertyRegion}
                    name='propertyRegion'
                    data={regionsValue && ['?????????? ????????????', ...regionsValue]}
                    options={{
                      placeholder: '?????????? ????????????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>????????????????????: </label>
                  <Select2
                    value={values.propertyPurpose}
                    name='propertyPurpose'
                    data={
                      purposesValue && ['?????????? ????????????????????', ...purposesValue]
                    }
                    options={{
                      placeholder: '?????????? ????????????????????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>??????????????: </label>
                  <Select2
                    value={values.propertyBeds}
                    name='propertyBeds'
                    data={bedsValue && ['?????????? ??????-????', ...bedsValue]}
                    options={{
                      placeholder: '?????????? ??????-????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>??????????????: </label>
                  <Select2
                    value={values.propertyBaths}
                    name='propertyBaths'
                    data={bathsValue && ['?????????? ??????-????', ...bathsValue]}
                    options={{
                      placeholder: '?????????? ??????-????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>??????: </label>
                  <Select2
                    value={values.propertyType}
                    name='propertyType'
                    data={typesValue && ['?????????? ??????', ...typesValue]}
                    options={{
                      placeholder: '?????????? ??????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>????????????: </label>
                  <Select2
                    value={values.propertyStatus}
                    name='propertyStatus'
                    data={statusesValue && ['?????????? ????????????', ...statusesValue]}
                    options={{
                      placeholder: '?????????? ????????????',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      ???? ???{numberWithSpaces(rangeValue && rangeValue.lowest)}
                    </div>
                    <div>???? ???{numberWithSpaces(priceValue)}</div>
                  </div>
                  <input
                    type='range'
                    name='propertyPrice'
                    class='form-range'
                    min={rangeValue && rangeValue.lowest}
                    max={rangeValue && rangeValue.highest}
                    step='10000'
                    id='customRange3'
                    value={priceValue}
                    onChange={handleRange}
                  ></input>
                </div>
                <button
                  type='submit'
                  className='btn-block btn-custom'
                  name='button'
                >
                  ??????????????????
                </button>
              </form>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Shopsidebar
