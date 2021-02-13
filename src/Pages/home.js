// CHAMADA DE COMPONENTE 2 DO PROJETO FRONT AVANÇAD

import Loading from '../components/loading/index';
import {lazy, Suspense} from 'react';

const Homee = lazy(()=>import('../components/home/index'))

export default function Home() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Homee/>
            </Suspense>
        </>
    )
}