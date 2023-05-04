import React from "react";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const List = ({data, handleDelete, handleEdit}) => {
    return <tbody>
        {data.map((contact) => {
            return (
                <tr>
                    <td className="gap-2 aling-align-items-center">{contact.name}</td>
                    <td className="gap-2 aling-align-items-center">{contact.telp}</td>
                    <td className="d-flex gap-2 aling-align-items-center">
                        <Button size="sm" variant="warning" onClick={() => handleEdit(contact.id)}>Edit</Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(contact.id)}><i class="ri-delete-bin-5-line"></i></Button>
                    </td>
                </tr>
            )
        })}
    </tbody>
    
}

export default List