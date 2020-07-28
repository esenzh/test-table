import React from 'react';
import { connect } from 'react-redux';
import TableEach from './TableEach';
import TableTitle from './TableTitle';

function TableList(props) {
    const { tools, searchedTools, searchValue } = props;
    return (
        <table>
            <thead>
                <TableTitle />
            </thead>
            <tbody>
                {searchValue
                    ? (searchedTools && searchedTools.map(tool =>
                        <TableEach tool={tool} key={tool.id} />
                    ))
                    : (tools && tools.map(tool =>
                        <TableEach tool={tool} key={tool.id} />
                    ))
                }
            </tbody>
        </table>
    )
}

function mapStateToProps(store) {
    return {
        tools: store.tools,
        searchedTools: store.searchResultTools,
        searchValue: store.searchValue
    }
}

export default connect(mapStateToProps, null)(TableList)