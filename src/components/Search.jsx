import React from 'react';
import { connect } from 'react-redux';
import { SearchToolAC } from '../redux/action';

function Search(props) {
    const { searchTool } = props;
    return (
        <input type="search" placeholder="Search by name..." onChange={(e) => searchTool(e.target.value)} />
    )
}

function mapDispatchToProps(dispatch) {
    return {
        searchTool: value => dispatch(SearchToolAC(value))
    }
}

export default connect(null, mapDispatchToProps)(Search);