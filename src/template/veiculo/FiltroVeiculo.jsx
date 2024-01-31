import { Col, Row } from "react-bootstrap";
import { BtnBuscar, BtnLimpar } from "../common/CustomButtons";
import { useContext } from "react";
import { VeiculoContext } from "../../context/VeiculoContext/VeiculoContextProvider";

export const FiltroVeiculo = () => {
    const veiculoContext = useContext(VeiculoContext);
    const {
        state: { filtro, pagination }, changeFiltroValue, changeFiltroShowDeactive, limparFiltro
    } = veiculoContext;

    return(
        <Row>
            <Col>
                <div className="input-group">
                    <label className="input-group-text" htmlFor="filtro">Filtro</label>
                    <input
                        type="text"
                        className="form-control text-center"
                        name="filtro"
                        id="filtro"
                        placeholder="Filtro"
                        value={filtro?.value || ''}
                        onChange={(e) => changeFiltroValue(e.target.value)}
                    />
                    <label className="input-group-text" htmlFor="comboDesativado">Mostrar Desativados?</label>
                    <select
                        className="form-select"
                        id="comboDesativado"
                        value={filtro?.showDeactive || false}
                        onChange={(e) => changeFiltroShowDeactive(e.target.value)}
                    >
                        <option value={false}>Não</option>
                        <option value={true}>Sim</option>
                    </select>
                    <BtnLimpar onClick={limparFiltro} />
                    <BtnBuscar onClick={() => {}} />
                </div>
                <p className="fst-italic text-end">Registros encontrados: {pagination.totalElements}</p>
            </Col>
        </Row>
    );
}