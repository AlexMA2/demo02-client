
import { useState, useEffect } from "react";
import './ProductTable.css';

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        fetchProducts()
    }, []);

    const transformPrice = (data) => {
       
        data.forEach(product => {
            let valor = product.price/100;
            product.price = 'S/ ' + valor.toFixed(2);
        });
        
        return data;
    }

    const fetchProducts = () => {
        fetch("https://demo02.deno.dev/productos")
            .then(response => response.json())
            .then(data => setProducts(transformPrice(data)));
    };

    return (
        <div className="table">
            <div className="table_header">
                <div className="table_header_item cell-id">ID</div>
                <div className="table_header_item cell-name">Nombre del Producto</div>
                <div className="table_header_item cell-quantity">Cantidad</div>
                <div className="table_header_item cell-prices">Precio (S/)</div>
                <div className="table_header_item cell-sales">Ventas Totales</div>
                <div className="table_header_item cell-brand">Marca</div>
            </div>
            <div className="table_body">
                {
                    products.map(product => (
                        <div className="table_body_item" key={product.id}>
                            <div className="table_body_item cell-id">{product.id}</div>
                            <div className="table_body_item cell-name">{product.name}</div>
                            <div className="table_body_item cell-quantity">{product.stock}</div>
                            <div className="table_body_item cell-prices">{product.price}</div>
                            <div className="table_body_item cell-sales">{product.soldTotal}</div>
                            <div className="table_body_item cell-brand">{product.brand}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductTable
