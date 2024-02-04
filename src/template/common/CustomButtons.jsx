import Button from 'react-bootstrap/Button';

export const BtnSalvarSm = ({onClick}) => (
    <Button 
        variant="success"
        size="sm"
        onClick={onClick}
    >
        Salvar
    </Button>
)

export const BtnEditarSm = ({onClick}) => (
    <Button
        variant="primary"
        size="sm"
        onClick={onClick}
    >
        Editar
    </Button>
)

export const BtnDesativarSm = ({onClick}) => (
    <Button
        variant="danger"
        size="sm"
        onClick={onClick}
    >
        Desativar
    </Button>
)

export const BtnDeletarSm = ({onClick}) => (
    <Button
        variant="danger"
        size="sm"
        onClick={onClick}
    >
        Deletar
    </Button>
)

export const BtnAtivarSm = ({onClick}) => (
    <Button 
        variant="warning"
        size="sm" 
        onClick={onClick}
    >
        Ativar
    </Button>
)

export const BtnLimpar = ({onClick}) => (
    <Button
        variant="secondary"
        onClick={onClick}
    >
        Limpar
    </Button>
)

export const BtnBuscar = ({onClick}) => (
    <Button
        variant="primary"
        onClick={onClick}
    >
        Buscar
    </Button>
)