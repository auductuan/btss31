import React, { useState } from 'react';

const Bai5: React.FC = () => {
    const [product, setProduct] = useState({
        productCode: '',
        productName: '',
        price: 0,
        quantity: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: name === "price" || name === "quantity" ? parseInt(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Thông tin sản phẩm:");
        console.log(product);
    };

    return (
        <div>
            <h2>Thêm mới sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productCode">Mã sản phẩm:</label>
                    <input type="text" id="productCode" name="productCode" value={product.productCode} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="productName">Tên sản phẩm:</label>
                    <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="price">Giá:</label>
                    <input type="number" id="price" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="quantity">Số lượng:</label>
                    <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Bai5;
