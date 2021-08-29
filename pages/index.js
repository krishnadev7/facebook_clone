import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../Components/Header'
import Login from '../Components/Login'
import Sidebar from '../Components/Sidebar'



export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div >
      <Head>
        <title>facebook</title>
      </Head>

      
      <Header />

      <main className='flex'>  
        <Sidebar/>

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