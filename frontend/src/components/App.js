import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Employees from './employees/Employees'
import ModalManager from './ModalManager'
import ErrorModal from './errorModal/ErrorModal'
import Search from './search/Search'
import Pagination from './pagination/Pagination'

function App() {
  return (
    <>
      <Search />
      <Switch>
          <Route path="/page" component={ Employees } />
          <Route path="/" component={ Employees } />
      </Switch>
      <Pagination />
      <ModalManager />
      <ErrorModal />
    </>
  )
}

export default App
