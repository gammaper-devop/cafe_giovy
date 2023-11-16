function About(){
    return(
        <div id="about" className="parallax-window" data-parallax="scroll" data-image-src="src/img/antique-cafe-bg-03.jpg">
            <div className="container mx-auto tm-container py-24 sm:py-48">
                <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
                    <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                        <h2 className="mb-6 tm-text-green text-4xl font-medium">Acerca de nuestro café</h2>
                        <p className="mb-6 text-base leading-8">
                            Esta es una empresa familiar dedicada a cultivar, producir y procesar café. Nuestros granos son minuciosamente seleccionados y 100% natural 
                        </p>
                        <p className="text-base leading-8">
                            Ofrecemos un producto de calidad y competitividad, que se identifique por su excelente aroma, sabor y textura, satisfaciendo la 
                            necesidad de los exigentes paladares apacionados al café.
                        </p>
                    </div>
                    <a href="#contact" className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
                        <i className="far fa-comments mr-4"></i>
                        Contactános
                    </a>
                </div>           
            </div>        
        </div>
    )
}

export default About;