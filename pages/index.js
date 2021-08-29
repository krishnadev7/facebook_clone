import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../Components/Header'



export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div >
      <Head>
        <title>facebook</title>
      </Head>

      {/* header */}
      <Header />

      <main>
        {/* sidebar */}

        {/* feed */}

        {/* widegets */}
      </main>

    </div>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}