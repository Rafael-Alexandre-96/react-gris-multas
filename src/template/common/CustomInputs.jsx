export const InputLabel = ({className, name, label, placeholder, value, onChange}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <input
            type="text"
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
)

export const NumberLabel = ({className, name, label, placeholder, value, onChange, min=-100, max=100}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <input
            type="number"
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
        />
    </div>
)

export const DoubleLabel = ({className, name, label, placeholder, value, onChange}) => {
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="text"
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                value={value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                onFocus={(e) => {e.target.value = value}}
                onChange={onChange}
                onBlur={(e) => {e.target.value = parseFloat(value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}
            />
        </div>
    );
}

export const DateLabel = ({className, name, label, placeholder, value, onChange}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <input
            type="date"
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value.substr(0, 10)}
            onChange={onChange}
        />
    </div>
)

export const DateTimeLabel = ({className, name, label, placeholder, value, onChange}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <input
            type="datetime-local"
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
)

export const SelectLabel = ({className, name, label, value, children, onChange}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <select
            className="form-select"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    </div>
)

export const TextAreaLabel = ({className, name, label, placeholder, value, onChange}) => (
    <div className={className}>
        <label htmlFor={name} className="form-label">{label}</label>
        <textarea
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
)