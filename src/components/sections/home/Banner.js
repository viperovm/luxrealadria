import React, { Component } from 'react'
import {
  locationlist,
  statuslist,
  pricerangelist,
  bedslist,
  bathroomslist,
  typelist,
  diameterlist,
} from '../../../data/select.json'
import Select2 from 'react-select2-wrapper'
import classNames from 'classnames'
import Form from 'react-bootstrap/Form'
import banner from '../../../assets/img/banner/montenegro.jpeg'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advancesearch: false,
      range: 50000,
    }
    this.advancetoggle = this.advancetoggle.bind(this)
  }
  advancetoggle() {
    this.setState({
      advancesearch: !this.state.advancesearch,
    })
  }

  handleRange = (e) => {
    this.setState({
      range: e.target.value,
    })
  }

  render() {
    return (
      <div
        className='banner dark-overlay bg-cover bg-center'
        style={{
          backgroundImage:
            'url(' +
            process.env.PUBLIC_URL + '/assets/img/categories/7.jpg)',
        }}
      >
        <div className='container'>
          <div className='banner-item'>
            <div className='banner-inner'>
              <div className='banner-text'>
                <h1 className='title text-white'>
                  Найдите Ваш идеальный дом сегодня!
                </h1>
                <p className='subtitle text-white'>
                  Прямо сейчас у нас сотни предложений объектов недвижимости. Не
                  упустите свой шанс!
                </p>
              </div>
              <div className='acr-filter-form'>
                <form method='post'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                      <div className='form-group acr-custom-select'>
                        <label>Регион: </label>
                        <Select2
                          data={locationlist}
                          options={{
                            placeholder: 'Любой регион',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='form-group acr-custom-select'>
                        <label>Назначение: </label>
                        <Select2
                          data={locationlist}
                          options={{
                            placeholder: 'Любое назначение',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='form-group acr-custom-select'>
                        <div className='d-flex justify-content-between'>
                          <div>От €50 000</div>

                          <div>До €{this.state.range}</div>
                        </div>
                        <input
                          type='range'
                          class='form-range'
                          min='50000'
                          max='3000000'
                          step='10000'
                          id='customRange3'
                          value={this.state.range}
                          onChange={e => this.handleRange(e)}
                        ></input>
                        {/* <label>Ценовая категория: </label>
                        <Select2
                          data={pricerangelist}
                          options={{
                            placeholder: 'Любая категория',
                          }}
                        /> */}
                        {/* <Form.Range /> */}
                      </div>
                    </div>
                    <div className='submit-btn col-lg-2 col-md-6'>
                      <div className='form-group'>
                        <button
                          type='submit'
                          className='btn-custom secondary btn-block'
                          name='button'
                        >
                          Поиск объектов
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames('advanced-search', {
                      'd-block': this.state.advancesearch,
                    })}
                  >
                    <div className='row'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='acr-custom-select form-group'>
                          <label>Спальни: </label>
                          <Select2
                            data={bedslist}
                            options={{
                              placeholder: 'Любое кол-во',
                            }}
                          />
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <div className='acr-custom-select form-group'>
                          <label>Санузлы: </label>
                          <Select2
                            data={bathroomslist}
                            options={{
                              placeholder: 'Любое кол-во',
                            }}
                          />
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <div className='acr-custom-select form-group'>
                          <label>Тип: </label>
                          <Select2
                            data={typelist}
                            options={{
                              placeholder: 'Любой тип',
                            }}
                          />
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <div className='form-group acr-custom-select'>
                          <label>Статус: </label>
                          <Select2
                            data={statuslist}
                            options={{
                              placeholder: 'Любой статус',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  className={classNames('advanced-search-trigger semi-circle', {
                    active: this.state.advancesearch,
                  })}
                  onClick={this.advancetoggle}
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
}

export default Banner
