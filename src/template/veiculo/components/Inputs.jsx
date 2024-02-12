import { Input, Select } from '../../../components/inputs';

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
    <td className='align-middle'>
      <Select
        className='text-center'
        name='comboTipoRodado'
        value={veiculo?.tipoRodado || 'TRACAO'}
        onChange={(e) => setVeiculo({...veiculo, tipoRodado: e.target.value})}
      >
        <option value='TRACAO'>TRAÇÃO</option>
        <option value='REBOQUE'>REBOQUE</option>
      </Select>
    </td>
  </>
);