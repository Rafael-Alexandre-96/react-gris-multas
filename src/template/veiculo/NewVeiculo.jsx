import React, { useState } from "react";
import api from "../../service/api";
import { CustomModal } from "../common/CustomModal";
import { BtnSalvarSm } from "../common/CustomButtons";
import { BdgNovo } from "../common/CustomBadges";

export const NewVeiculo = ({updateFunction}) => {
    const [veiculo, setVeiculo] = useState();
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [backModal, setBackModal] = useState("#198754");

    const handleSalvar = async () => {
        await api.post("/veiculo", {...veiculo})
            .then(() => {
                setVeiculo(null);
                updateFunction();
                setTitleModal("Salvo");
                setBackModal("#198754");
                setBodyModal("Veículo Salvo com Sucesso!");
            })
            .catch((error) => {
                setTitleModal("Erro");
                setBackModal("#dc3545");
                setBodyModal(error.message)
            });
        
        setShowModalTrue();
    };

    const setShowModalTrue = () => {
        setShowModal(true);
    }

    const setShowModalFalse = () => {
        setShowModal(false);
    }

    return(
        <>
        { showModal && <CustomModal title={titleModal} body={bodyModal} setShowModalFalse={setShowModalFalse} background={backModal}/> }
            <tr>
                <td className="align-middle">
                    <input
                        type="text"
                        className="form-control text-center"
                        name="placa"
                        placeholder="Placa"
                        value={veiculo?.placa || ''}
                        onChange={(e) => setVeiculo({...veiculo, placa: e.target.value})}
                    />
                </td>
                <td className="align-middle">
                    <input
                        type="text"
                        className="form-control text-center"
                        name="frota"
                        placeholder="Frota"
                        value={veiculo?.frota || ''}
                        onChange={(e) => setVeiculo({...veiculo, frota: e.target.value})}
                    />
                </td>
                <td className="align-middle">
                    <BdgNovo />
                </td>
                <td className="align-middle text-start">
                    <BtnSalvarSm onClick={handleSalvar} />
                </td>
            </tr>
        </>
    );
}