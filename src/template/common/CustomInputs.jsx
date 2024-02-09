import { useState } from "react";

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
    const [masked, setMasked] = useState('');

    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="text"
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                value={masked}
                onChange={(e) => {
                    let value = e.target.value.split(',');
                    if (value[1]?.length > 2)
                        setMasked(e.target.value.substring(0, e.target.value.length - 1));
                    else
                        setMasked(value);
                }}
                onBlur={() => {
                    onChange(masked.replace(',', '.'));
                }}
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