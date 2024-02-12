export const LabelFiltro = ({htmlFor, value}) => (
  <label className='input-group-text' htmlFor={htmlFor}>{value}</label>
);

export const TwoLabels = ({className, label, value}) => (
  <div className={className}>
    <label className='form-label'>{label}</label>
    <p style={{marginTop: '5px'}}>{value}</p>
  </div>
);

export const Input = ({className, name, placeholder, value, onChange, onBlur, maxLength = 10 }) => (
  <input
    type='text'
    className={`form-control ${className}`}
    name={name}
    id={name}
    placeholder={placeholder}
    value={value}
    maxLength={maxLength}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export const InputLabel = ({className, name, label, placeholder, value, onChange, onBlur, maxLength = 10}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <Input
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={maxLength}
    />
  </div>
);

export const Number = ({className, name, label, placeholder, value, onChange, min=-100, max=100}) => (
    <input
      type='number'
      className={`form-control ${className}`}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
);

export const NumberLabel = ({className, name, label, placeholder, value, onChange, min=-100, max=100}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <Number
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  </div>
);

export const Double = ({className, name, placeholder, value, onChange}) => {
  return (
    <input
      type='text'
      className={`form-control ${className}`}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const DoubleLabel = ({className, label, name, placeholder, value, onChange}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='form-label'>{label}</label>
      <Double
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


export const DateLabel = ({className, name, label, placeholder, value, onChange}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <input
      type='date'
      className='form-control'
      name={name}
      id={name}
      placeholder={placeholder}
      value={value.substr(0, 10)}
      onChange={onChange}
    />
  </div>
);

export const DateTimeLabel = ({className, name, label, placeholder, value, onChange}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <input
      type='datetime-local'
      className='form-control'
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const Select = ({className, name, value, children, onChange}) => (
    <select
      className={`form-select ${className}`}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
);

export const SelectInfrator = ({name, value, onChange}) => (
  <select
      className='form-select'
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      <option value="ANALISE">ANALISE</option>
      <option value="ARQUIVADO">ARQUIVADO</option>
      <option value="BAIXA">BAIXA</option>
      <option value="DESLIGADO">DESLIGADO</option>
      <option value="EMBARCADOR">EMBARCADOR</option>
      <option value="EMPRESA">EMPRESA</option>
      <option value="MANUTENCAO">MANUTENCAO</option>
      <option value="MOTORISTA">MOTORISTA</option>
      <option value="OPERACAO">OPERACAO</option>
      <option value="OUTROS">OUTROS</option>
      <option value="PEDESTRE">PEDESTRE</option>
      <option value="RECURSO">RECURSO</option>
    </select>
);

export const SelectLabel = ({className, name, label, value, children, onChange}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <Select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </Select>
  </div>
);

export const SelectInfratorLabel = ({className, name, label, value, children, onChange}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <SelectInfrator
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const TextAreaLabel = ({className, name, label, placeholder, value, onChange}) => (
  <div className={className}>
    <label htmlFor={name} className='form-label'>{label}</label>
    <textarea
      className='form-control'
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);