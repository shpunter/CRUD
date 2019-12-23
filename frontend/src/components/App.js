import React from 'react'

import Employees from './employees/Employees'
import ModalManager from './ModalManager'
import ErrorModal from './errorModal/ErrorModal'

function App() {
  return (
    <>
      <Employees />
      <ModalManager />
      <ErrorModal />
    </>
  )
}

export default App
