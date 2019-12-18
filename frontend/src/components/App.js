import React from 'react'

import Employees from './employees/Employees'
import Modal from './UI/Modal'
import ErrorModal from './errorModal/ErrorModal'

function App() {
  return (
    <>
      <Employees />
      <Modal />
      <ErrorModal />
    </>
  )
}

export default App
