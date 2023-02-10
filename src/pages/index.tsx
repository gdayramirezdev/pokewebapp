import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poke Web App</title>
        <meta name="description" content="This is an exmaple using next.js & Pokemon API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>Main Page!</h1>
      </main>
    </>
  )
}
