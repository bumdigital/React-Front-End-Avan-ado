// CHAMADA DE COMPONENTE 1 DO PROJETO FRONT AVANÇADO

import Loading from '../components/loading/index';
import {lazy, Suspense} from 'react';

const Contatoo = lazy(()=>import('../components/contatos/index'))

export default function Home() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Contatoo/>
            </Suspense>
        </>
    )
}