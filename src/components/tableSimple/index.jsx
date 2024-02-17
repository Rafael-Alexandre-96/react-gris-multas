import { Table } from "react-bootstrap";

const index = ({style, headers, children}) => (
  <Table hover bordered style={style}>
    <thead className='text-center'>
      <tr className='text-center'>
        { headers && headers?.map((header) => (
          <th key={header} className='bg-light'>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody className='text-center'>
      {children}
    </tbody>
  </Table>
);

export default index;