import { Input } from '../../../components/inputs';

export const EditRecord = ({veiculo, setVeiculo}) => (
  <>
    <td className='align-middle'>
      <Input 
        className='text-center'
        name='placa'
        placeholder='Placa'
        value={veiculo?.placa || ''}
        onChange={(e) => setVeiculo({...veiculo, placa: e.target.value})}
        maxLength={7}
      />
    </td>
    <td className='align-middle'>
      <Input
        className='text-center'
        name='frota'
        placeholder='Frota'
        value={veiculo?.frota || ''}
        onChange={(e) => setVeiculo({...veiculo, frota: e.target.value})}
        maxLength={15}
      />
    </td>
  </>
);