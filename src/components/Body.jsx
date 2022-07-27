import React from 'react'

export default function Body(props) {
  return (
    <>
            <tr  key={props.number}>
              <td>{props.number+1}</td>
              <td>{props.data.name}</td>
              <td>$ {props.data.cost}</td>
              <td>
                <button className='btn btn-danger w-75' onClick={()=>props.delete(props.data)}> Delete</button>
              </td>
            </tr>
</>
  )
}
