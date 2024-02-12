import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as service from '../../api/multaService';
import { Notificacao } from './component/Notificacao';
import { Vale } from './component/Vale';
import { Divider } from './component/Divider';
import { A4 } from '../struct/A4';
import './styles.css';

const Index = () => {
  const params = useParams();
  const [multa, setMulta] = useState({});

  useEffect(() => {
    service.findById(params?.id)
      .then((response) => {
        setMulta(response.data);
        if(multa.id) {
          window.print();
          window.close();
        }
      })
      .catch((error) => {
        alert(error.message);
        window.close();
      });
  }, [params.id, multa.id]);
  
  return(
    <>
      <A4>
        <Notificacao multa={multa} />
      </A4>
      <A4>
        <Vale multa={multa} />
        <Divider />
        <Vale multa={multa} isNi={true} />
      </A4>
    </>
  );
};

export default Index;