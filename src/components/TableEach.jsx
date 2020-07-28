import React from 'react';

function TableEach(props) {
    const { tool } = props;
    return (
        <tr>
            <td>{tool.name}</td>
            <td>{tool.sites}</td>
            <td>{tool.type}</td>
            {tool.status === 'disable' ? <td>OFF</td> : tool.status === 'enable' ? <td>ON</td> : <td>BLOCKED</td>}
        </tr>
    )
}

export default TableEach;