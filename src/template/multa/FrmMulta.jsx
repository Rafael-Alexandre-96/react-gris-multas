import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/multaService'
import * as enquadramentoService from '../../api/enquadramentoService';
import * as veiculoService from '../../api/veiculoService';
import * as motoristaService from '../../api/motoristaService';
import * as apiFunctions from '../apiFunctions';
import { Form } from './components/Form';

export const FrmMulta = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [, modalActions] = useModalContext();
  const [multa, setMulta] = useState({multiplicadorNi: 1, infrator: 'MOTORISTA'});

  const [enquadramentos, setEnquadramentos] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [reboques, setReboques] = useState([]);
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (params?.id) {
      apiFunctions.findBy(service.findById(params?.id))
        .then((multa) => {
          setMulta(multa);
        })
        .catch(() => {
          navigate(`/multa/editar`);
        });
    }
  }, [navigate, params.id]);

  const loadData = async () => {
    try {
      let resEnquandramentos = await enquadramentoService.findAll();
      setEnquadramentos(resEnquandramentos.data);

      let resVeiculos = await veiculoService.findAllTracao();
      setVeiculos(resVeiculos.data);

      let resReboques = await veiculoService.findAllReboque();
      setReboques(resReboques.data);

      let resMotoristas = await motoristaService.findAll();
      setMotoristas(resMotoristas.data);
    } catch (error) {
      modalActions.showModalDanger(error.message);
    }
  };

  const handleSalvar = async () => {
    if (params?.id) {
      apiFunctions.updateEntity(service.updateMulta, multa)
        .then((multa) => {
          setMulta(multa);
          modalActions.showModalSuccess('Registro salvo com sucesso.');
        })
        .catch((error) => {
          modalActions.showModalDanger(error.message);
        });
    } else {
      apiFunctions.createEntity(service.createMulta, multa)
        .then((multa) => {
          navigate(`/multa/editar/${multa.id}`);
          modalActions.showModalSuccess('Registro salvo com sucesso.');
        })
        .catch((error) => {
          modalActions.showModalDanger(error.message);
        });
    }
  };

  const handleImprimir = async () => {
    if (params?.id)
      window.open(`/multa/imprimir/${multa.id}`, '_blank');
    else
      modalActions.showModalDanger('Salve o registro antes de imprimir.')
  };

  return (
    <Form
      enquadramentos={enquadramentos}
      handleImprimir={handleImprimir}
      handleSalvar={handleSalvar}
      handleVoltar={() => navigate('/multa')}
      motoristas={motoristas}
      multa={multa}
      setMulta={setMulta}
      veiculos={veiculos}
      reboques={reboques}
    />
  );
}