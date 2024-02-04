import { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { BtnBuscar, BtnLimpar } from "../common/CustomButtons";
import { useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";

export const FiltroMulta = () => {
    const filtroContext = useContext(FiltroContext);
    const {
        state: { pagination }, filterResults, limparFiltro
    } = filtroContext;

    const [preFiltro, setPreFiltro] = useState({value: '', showDeactive: true});

    const handleLimparFiltro = () => {
        limparFiltro();
        setPreFiltro({value: '', showDeactive: true});
    };

    const handleBuscar = () => {
        filterResults(preFiltro);
    };

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
                        value={preFiltro?.value || ''}
                        onChange={(e) => setPreFiltro({...preFiltro, value: e.target.value})}
                    />
                    <label className="input-group-text" htmlFor="comboDesativado">Mostrar Desativados?</label>
                    <select
                        className="form-select"
                        id="comboDesativado"
                        value={preFiltro?.showDeactive || false}
                        onChange={(e) => setPreFiltro({...preFiltro, showDeactive: e.target.value})}
                    >
                        <option value={false}>Não</option>
                        <option value={true}>Sim</option>
                    </select>
                    <BtnLimpar onClick={handleLimparFiltro} />
                    <BtnBuscar onClick={handleBuscar} />
                </div>
                <p className="fst-italic text-end">Registros encontrados: {pagination.totalElements}</p>
            </Col>
        </Row>
    );
}