import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Feature3ColGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.text} className='column is-4'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Feature3ColGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
}

export default Feature3ColGrid
