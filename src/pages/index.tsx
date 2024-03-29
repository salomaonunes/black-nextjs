import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </main>
        </>
    );
}
