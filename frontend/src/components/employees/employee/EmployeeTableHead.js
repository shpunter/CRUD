import React from 'react'

const thead = ['#', '#', 'Name', 'Active', 'Department', '#']

const EmployeeTableHead = () => {
    return (
        <thead>
            <tr>
                { thead.map((title, id) => <th key={ id }>{ title }</th>) }
            </tr>
        </thead>
    )
}

export default React.memo(EmployeeTableHead)
