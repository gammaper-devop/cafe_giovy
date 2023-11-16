function Intro(){
    return(
    <div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="src/img/antique-cafe-bg-01.jpg">
        <nav id="tm-nav" className="fixed w-full">
            <div className="tm-container mx-auto px-2 md:py-6 text-right">
                <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
                <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                    <li className="inline-block mb-4 mx-4"><a href="#intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
                    <li className="inline-block mb-4 mx-4"><a href="#menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
                    <li className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-gold py-1 md:py-3 px-4">Nosotros</a></li>
                    <li className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-gold py-1 md:py-3 px-4">Contacto</a></li>
                </ul>
            </div>            
        </nav>
        <div className="container mx-auto px-2 tm-intro-width">
            <div className="sm:pb-60 sm:pt-48 py-20">
                <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
                    <h1 className="text-white text-5xl tm-logo-font mb-5">Giovy Cafe</h1>
                    <p className="tm-text-gold tm-text-2xl">tu energía diaria</p>
                </div>    
                <div className="bg-black bg-opacity-70 p-10 mb-5">
                    <p className="text-white leading-8 text-sm font-light">
                        Esta es tu tienda preferida de café donde encontraras en mejor café del mundo.
                        Atrevete a probar nuestros productos y vivir una verdadera y única experiencia.
                     </p>
                </div>
                <div className="text-center">
                    <div className="inline-block">
                        <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                            <i className="fas fa-coffee mr-3"></i>
                            <span>Exploremos...</span>                        
                        </a>
                    </div>                    
                </div>                
            </div>
        </div>        
    </div>
    )
}

export default Intro;