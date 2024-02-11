import { Input, Number, SelectInfrator, Double } from '../../../components/inputs';

export const EditRecord = ({enquadramento, setEnquadramento}) => (
  <>
    <td className='align-middle'>
    <Input
        className='text-center'
        name='enquadramento'
        placeholder='Enquadramento'
        value={enquadramento?.numeroEnquadramento || ''}
        onChange={(e) => setEnquadramento({...enquadramento, numeroEnquadramento: e.target.value})}
        maxLength={6}
      />  
    </td>
    <td className='align-middle'>
      <Input
        className='text-center'
        name='descricao'
        placeholder='Descrição'
        value={enquadramento?.descricao || ''}
        onChange={(e) => setEnquadramento({...enquadramento, descricao: e.target.value})}
        maxLength={50}
      />
    </td>
    <td className='align-middle'>
      <Input
        className='text-center'
        name='baseLegal'
        placeholder='Base Legal'
        value={enquadramento?.baseLegal || ''}
        onChange={(e) => setEnquadramento({...enquadramento, baseLegal: e.target.value})}
        maxLength={50}
      />
    </td>
    <td className='align-middle'>
      <SelectInfrator
        name='infrator'
        value={enquadramento?.infrator || 'MOTORISTA'}
        onChange={(e) => setEnquadramento({...enquadramento, infrator: e.target.value})}
      />
    </td>
    <td className='align-middle'>
      <Number
        className='text-center'
        name='pontos'
        placeholder='Pontos'
        value={enquadramento?.pontos || 0}
        onChange={(e) => setEnquadramento({...enquadramento, pontos: e.target.value})}
        max={7}
        min={0}
      />
    </td>
    <td className='align-middle'>
      <Double
        className='text-center'
        name='valor'
        placeholder='Valor'
        value={enquadramento?.valor || 0}
        onChange={(e) => setEnquadramento({ ...enquadramento, valor: e.target.value })}
      />
    </td>
  </>
);
