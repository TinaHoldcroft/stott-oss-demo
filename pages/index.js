import Head from 'next/head'
import MasterForm from './form/MasterForm'
import Card from '../components/card'

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
                <div className="two">
                    <Card
                        heading= 'text'
                        txt = 'text'
                        link = '/'
                        btn = 'text'
                    />
                    <Card
                        heading= 'text'
                        txt = 'text'
                        link = '/'
                        btn = 'text'
                    />
                    <Card
                        heading= 'text'
                        txt = 'text'
                        link = '/'
                        btn = 'text'
                    />
                </div>
                <div className="three">[TILES]</div>
                <div className="four">[AKSJON]</div>
                <div className="five">[INFO]</div>
            </div>
        </>
    )
}