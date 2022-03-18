import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../componets/layout'

    
export default function Home() {
  
  return (
    <Layout>
      
    <Head>
      
      <title>calculator</title>
    </Head>
 
    <div><textarea id = "display" cols="30" defaultValue={0}></textarea></div>

    <button className='addnumber' value={0} onClick={addnumber(0)}>0</button> 
    <button className='addnumber' value={1}>1</button> 
    <button className='addnumber' value={2}>2</button> 
    <button className='addnumber' value={3}>3</button> 
    <button className='addnumber' value={4}>4</button> 
    <button className='addnumber' value={5}>5</button> 
    <button className='addnumber' value={6}>6</button> 
    <button className='addnumber' value={7}>7</button>
    <button className='addnumber' value={8}>8</button>
    <button className='addnumber' value={9}>9</button>
    <button className='addnumber' value={'.'}>.</button>
    <button className='addcalculator'>=</button>
    <button className='addcalculator'>+</button>
    <button className='addcalculator'>-</button>
    <button className='addcalculator'>❌</button>
    <button className='addcalculator'>÷</button>
    <button id='allclear'>AC</button>
    <Link href="/">
    <button>戻る</button>
    </Link>
  
  <script src="/js/main.js"></script>
    </Layout>
  )
}