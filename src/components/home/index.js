// COMPONENTE 2 DO PROJETO FRONT AVANÇADO

import { Row } from 'react-bootstrap';

export default function Home(props) {
    return (
        <Row>
            <div className="col-lg-6 col-sm-12 mx-auto">
                <h3 Class="text-success"><b>Seja bem vindo (a)!</b></h3>
                <p className="lead ">
                    Aqui em nossa loja, <em><strong>programadores tem desconto</strong></em> nos amigões para sua casa!
                </p>
            </div>
        </Row>
    );
}