import { BtnBuscar, BtnLimpar } from "../common/CustomButtons";

export const FiltroVeiculo = ({filtro, totalElements, handleOnChangeFiltro, handleOnChangeDesativado, handleOnClickBuscar, handleOnClickLimpar}) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <label className="input-group-text" htmlFor="filtro">Filtro</label>
                    <input
                        type="text"
                        className="form-control text-center"
                        name="filtro"
                        id="filtro"
                        placeholder="Filtro"
                        value={filtro?.value || ''}
                        onChange={handleOnChangeFiltro}
                    />
                    <label className="input-group-text" htmlFor="comboDesativado">Mostrar Desativados?</label>
                    <select
                        className="form-select"
                        id="comboDesativado"
                        value={filtro?.showDeactive || false}
                        onChange={handleOnChangeDesativado}
                    >
                        <option value={false}>Não</option>
                        <option value={true}>Sim</option>
                    </select>
                    <BtnLimpar onClick={handleOnClickLimpar} />
                    <BtnBuscar onClick={handleOnClickBuscar} />
                </div>
                <p className="fst-italic text-end">Registros encontrados: {totalElements}</p>
            </div>
        </div>
    );
}