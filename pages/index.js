import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../componets/layout'

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>Go To calculator</title>
    </Head>

    <h1>電卓</h1>

    <Image
      src = "/images/4f8dcc266053a1de1c4f48af1d4ff9e1.jpg"
      height={500}
      width={500}
      alt="calculator"
    />

    <Link href="/posts/calculator">
    <button>使ってみる</button> 
    </Link>
    </Layout>
  )
}
