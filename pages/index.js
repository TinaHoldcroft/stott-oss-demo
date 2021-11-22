import Head from 'next/head'
import MasterForm from './form/MasterForm'

export default function Home() {
    
    return (
        <>
            <Head>
                <title>NBf | Støtt oss</title>
            </Head>

            <div className="content-index">
                <div className="one">
                    <MasterForm/>
                </div>
                <div className="two">[KORT]</div>
                <div className="three">[AVSNITT]</div>
                <div className="four">[AKSJON]</div>
                <div className="five">[INFO]</div>
            </div>
        </>
    )
}