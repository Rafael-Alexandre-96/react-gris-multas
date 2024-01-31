import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BtnBuscar, BtnLimpar } from "../common/CustomButtons";
import { useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";

export const FiltroVeiculo = () => {
    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination }, changeFiltroValue, changeFiltroShowDeactive, limparFiltro
    } = filtroContext;

    const [input, setInput] = useState('');

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
                        value={input || ''}
                        onChange={(e) => setInput(e.target.value)}
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
                    <BtnLimpar onClick={() => {limparFiltro(); setInput('');}} />
                    <BtnBuscar onClick={() => {limparFiltro(); changeFiltroValue(input);}} />
                </div>
                <p className="fst-italic text-end">Registros encontrados: {pagination.totalElements}</p>
            </Col>
        </Row>
    );
}