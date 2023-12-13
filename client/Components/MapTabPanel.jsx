import React from 'react'
import PropTypes from 'prop-types'

import { Box, Fade } from '@mui/material'

export default function MapTabPanel (props) {
  const { children, selectedIndex, index, ...other } = props

  return (
    <Fade
      role="tabpanel"
      in={selectedIndex === index}
      id={`map-tabpanel-${index}`}
      aria-labelledby={`map-tab-${index}`}
      sx={{ position: 'relative' }}
      unmountOnExit
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </Fade>
  )
}

MapTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired
}
