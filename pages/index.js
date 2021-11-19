import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>NBf | Støtt oss</title>
            </Head>

            <div className="content-index">
                <div className="one">[STØTT SKJEMA]</div>
                <div className="two">[KORT]</div>
                <div className="three">[AVSNITT]</div>
                <div className="four">[AKSJON]</div>
                <div className="five">[INFO]</div>
            </div>
        </>
    )
}