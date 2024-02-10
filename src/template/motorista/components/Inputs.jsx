import { Input } from '../../../components/inputs';

export const EditRecord = ({motorista, setMotorista}) => (
  <>
    <td className='align-middle'>
      <Input 
        className='text-center'
        name='nome'
        placeholder='Nome'
        value={motorista?.nome || ''}
        onChange={(e) => setMotorista({...motorista, nome: e.target.value})}
        maxLength={50}
      />
    </td>
    <td className='align-middle'>
      <Input
        className='text-center'
        name='cpf'
        placeholder='CPF'
        value={motorista?.cpf || ''}
        onChange={(e) => setMotorista({...motorista, cpf: e.target.value})}
        maxLength={11}
      />
    </td>
  </>
);