import ProductList from "./ProductList";

function Menu(){
    return (
        <div id="menu" className="parallax-window" data-parallax="scroll" data-image-src="src/img/antique-cafe-bg-02.jpg">
            <div className="container mx-auto tm-container py-24 sm:py-48">
                <div className="text-center mb-16">
                    <h2 className="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">Nuestro Cafés</h2>
                </div>            
                <div className="flex flex-col lg:flex-row justify-around items-center">
                    <ProductList />
                </div>
            </div>        
        </div>
    )
}

export default Menu;