import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const lang = "no";
        
        return (
            <Html lang={lang}>
                <Head>
                    <script async src="https://kit.fontawesome.com/a83d77d417.js"/>
                    <link id="favicon" rel="icon" href="/favicon.svg"/>
                    <meta name="theme-color" content="#FFD500"/>
                </Head>
                
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;