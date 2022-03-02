import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../componets/layout'

export default function Home() {
  return (

    <Layout>
    <Head>
      <title>calculator</title>
    </Head>
 
    <body>
  <div class="calculator-box">
    <div class="display"><textarea name="" id="display" cols="30">0</textarea></div>
    <button onClick="addnumber(0)">0</button> 
    <button>1</button> 
    <button>2</button> 
    <button>3</button> 
    <button>4</button> 
    <button>5</button> 
    <button>6</button> 
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>.</button>
    <button>=</button>
    <button>+</button>
    <button>-</button>
    <button>❌</button>
    <button>÷</button>
    <button>AC</button>
    <Link href="/">
    <button>戻る</button>
    </Link>
  </div>
</body>   

    </Layout>

  )
}
