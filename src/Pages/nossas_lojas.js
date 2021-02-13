// CHAMADA DE COMPONENTE 3 DO PROJETO FRONT AVANÇAD

import Loading from '../components/loading/index';
import {lazy, Suspense} from 'react';

const Lojas = lazy(()=>import('../components/lojas/index'))

export default function Home() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Lojas/>
            </Suspense>
        </>
    )
}
