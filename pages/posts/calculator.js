import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../componets/layout'


    
export default function Home() {

  var btn = document.getElementById('btn');
  
  btn.addEventListener('click', function(){
    console.log(0);
  })

  return (
    <Layout>
    <Head>
      <script type="text/javascript" src="/js/main.js"></script>
      <title>calculator</title>
    </Head>
 
    <body>
  <div class="calculator-box">
    <div class="display"><textarea name="" id="display" cols="30">0</textarea></div>
    <button onClick={addnumber(0)} id = "btn">0</button> 
    <button onClick={addnumber(1)}>1</button> 
    <button onClick={addnumber(2)}>2</button> 
    <button onClick={addnumber(3)}>3</button> 
    <button onClick={addnumber(4)}>4</button> 
    <button onClick={addnumber(5)}>5</button> 
    <button onClick={addnumber(6)}>6</button> 
    <button onClick={addnumber(7)}>7</button>
    <button onClick={addnumber(8)}>8</button>
    <button onClick={addnumber(9)}>9</button>
    <button onClick={addnumber('.')}>.</button>
    <button onClick={addcalculator('=')}>=</button>
    <button onClick={addcalculator('+')}>+</button>
    <button onClick={addcalculator('-')}>-</button>
    <button onClick={addcalculator('*')}>❌</button>
    <button onClick={addcalculator('/')}>÷</button>
    <button onClick={allclear()}>AC</button>
    <Link href="/">
    <button>戻る</button>
    </Link>
  </div>
</body>   
    </Layout>
  )
}