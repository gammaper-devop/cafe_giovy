function Contact(){
    return(
        <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="src/img/antique-cafe-bg-04.jpg">
        <div className="container mx-auto tm-container pt-24 pb-48 sm:py-48">
            <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
                <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container">
                    <h2 className="text-3xl mb-6 tm-text-green">Contactános</h2>
                    <p className="mb-6 text-lg leading-8">
                        Av. La Molina S/N costado derecho, puerta principal de la Universidad Nacional Agraría la Molina
                    </p>
                    <p className="mb-10 text-lg">
                        <span className="block mb-2">Tel: <a href="tel:0100200340" className="hover:text-yellow-600 transition">+51 952991513</a></span>
                        <span className="block">Email: <a href="mailto:info@company.com" className="hover:text-yellow-600 transition">info@company.com</a></span>                        
                    </p>
                    <div className="text-center">
                        <a href="https://www.google.com/maps" target="_blank" className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                            <i className="fas fa-map-marked-alt mr-8"></i>
                            Abrir Mapa
                        </a>
                    </div>                    
                </div>
                <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
                    <form action="" method="POST" className="text-lg">
                        <input type="text" name="name" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Nombres" required />
                        <input type="email" name="email" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required />
                        <textarea rows={6} name="message" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Mensaje..." required ></textarea>
                        <div className="text-right">
                            <button type="submit" className="text-white hover:text-yellow-500 transition">Enviar</button>
                        </div>                        
                      </form>
                </div>
            </div>
            <footer className="absolute bottom-0 left-0 w-full">
                <div className="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
                    <span>Copyright 2023 Giovy Cafe. Todos los derechos reservados.</span>
                    <span className="mt-5 md:mt-0">Diseñado por: Gabriel Márquez</span>
                </div>                
            </footer>
        </div>        
    </div>
    )
}

export default Contact;