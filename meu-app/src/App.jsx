import { useState } from 'react'
import './App.css'
import bergAvatar from '../src/assets/avatar.jpeg'
import Header from 'Header';
function App() {

  return (
    <>
      <div>
    
    <Header></Header>

    <main>
        
        <section class="initial-text">
            <div class="interface">
                <div class="flex">
                    <div class="txt-top-site">
                        <h1>Sua ideia se torna realidade<span>.</span></h1>
                        <p>Unindo um design marcante e a um site intuitivo e responsivo, quero usar minha experência como 
                        Designer Gráfico unida ao conhecimento em programção, para tornar realidade seus sonhos e ideias,
                        meu objetivo e criar soluções práticas para facilitar o seu dia a dia. </p>
                    </div>
                    <div class="img-top-site">
                        <img src={bergAvatar} alt="Foto de rosto de Lindemberg"/>
                    </div>
                </div>  
                 </div>          

            </section>         
    </main>
    
    <footer>
        
            <div class="footertext">
                <p>Desenvolvido com amor por <b>Lindemberg Lima</b> S2</p>
            </div>
                
    </footer>
      </div>
      
    </>
  );
}

export default App;
