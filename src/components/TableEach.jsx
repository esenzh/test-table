import React from 'react';
import { MdLock } from "react-icons/md";

function TableEach(props) {
    const { tool } = props;
    return (
        <tr>
            <td>{tool.name}</td>
            {+tool.sites === 0
                ? <td>{tool.sites}</td>
                : +tool.sites === 1
                    ? <td>{tool.sites} site</td>
                    : <td>{tool.sites} sites</td>
            }
            <td className='type-cell'>{tool.type}</td>
            {tool.status === 'disable'
                ? <td><div className="status-off">OFF</div></td>
                : tool.status === 'enable'
                    ? <td><div className='status-on'>ON</div></td>
                    : <td><div className='status-blocked'><MdLock /></div></td>}
        </tr>
    )
}

export default TableEach;