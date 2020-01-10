import React from 'react'

import Employees from './employees/Employees'
import ModalManager from './ModalManager'
import ErrorModal from './errorModal/ErrorModal'
import Search from './search/Search'

function App() {
  return (
    <>
      <Search />
      <Employees />
      <ModalManager />
      <ErrorModal />
    </>
  )
}

export default App
