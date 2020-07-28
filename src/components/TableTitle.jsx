import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SortNameAC } from '../redux/action';

function TableTitle(props) {
    const [direction, setDirection] = useState('');
    const { sortName } = props;

    const handleSortByName = () => {
        const sortDirection = direction === "asc" ? "desc" : "asc";
        setDirection(sortDirection);
        sortName(sortDirection);
    }

    return (
        <tr>
            <th onClick={handleSortByName}>Tool name</th>
            <th>Used on</th>
            <th>Type</th>
            <th>Status</th>
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        sortName: direction => dispatch(SortNameAC(direction))
    }
}

export default connect(null, mapDispatchToProps)(TableTitle);