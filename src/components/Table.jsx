import React from 'react';
import '../../styles/style';
import TableList from './TableList';
import Search from './Search';

function Table() {
    return (
        <div className="container">
            <div className='search-container'>
                <Search />
            </div>
            <div className="table-container">
                <TableList />
            </div>
        </div>
    )
}

export default Table;