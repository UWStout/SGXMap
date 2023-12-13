import React from 'react'

import { Typography, CssBaseline, Container, Tabs, Tab, Box, Paper } from '@mui/material'
import MapTabPanel from './MapTabPanel'
import MapImage from './MapImage'

// Generate the ally props for a tab element
function tabA11yProps (index) {
  return {
    id: `map-tab-${index}`,
    'aria-controls': `map-tabpanel-${index}`
  }
}

export default function MainApp (props) {
  // Track state of the selected tab
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const handleChange = (event, newIndex) => {
    setSelectedIndex(newIndex)
  }

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" gutterBottom sx={{ marginTop: 1, borderBottom: '1px solid lightgrey' }}>
        SGX Map
      </Typography>
      <Typography variant="body">
        Click on a tab below to view a map of the event and locate different games to play!
      </Typography>
      <Paper elevation={3} sx={{ marginTop: 3, width: '100%', minWidth: '800px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedIndex} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="MSC Great Hall" {...tabA11yProps(0)} />
            <Tab label="MSC Ballrooms" {...tabA11yProps(1)} />
            {/* <Tab label="Fireside Cafe / Terrace" {...tabA11yProps(2)} /> */}
          </Tabs>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Tab panel 0: Great Hall Map */}
          <MapTabPanel selectedIndex={selectedIndex} index={0}>
            <MapImage
              imgSrc="media/GreatHallMap-SGXDec23.jpg"
              alt="Map of the MSC Great Hall showing locations of the capstone game prototypes, the sophomore games, and the MFA in Design and indie games."
              imgSX={{ p: 3 }}
            />
          </MapTabPanel>

          {/* Tab panel 1: Ballrooms Map */}
          <MapTabPanel selectedIndex={selectedIndex} index={1}>
            <MapImage
              imgSrc="media/BallroomMap-SGXDec23.jpg"
              alt="Map of the MSC Ballrooms showing locations of the junior level games, the first-year games, and the game art in engines showcases."
              imgSX={{ p: 3 }}
            />
          </MapTabPanel>

          {/* Tab panel 2: Fireside Cafe / Terrace Map */}
          {/* <MapTabPanel selectedIndex={selectedIndex} index={2}>
            <Typography variant="h5" gutterBottom>Fireside Cafe / Terrace</Typography>
          </MapTabPanel> */}
        </Box>
      </Paper>
    </Container>
  )
}
