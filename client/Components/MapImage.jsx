import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export default function MapImage (props) {
  const { imgSrc, imgSX, alt, ...other } = props
  return (
    <Box
      component="img"
      sx={{ width: '100%', height: 'auto', ...imgSX }}
      alt={alt}
      src={imgSrc}
      {...other}
    />
  )
}

MapImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgSX: PropTypes.object,
  alt: PropTypes.string
}

MapImage.defaultProps = {
  imgSX: {},
  alt: 'Map for use at SGX'
}
