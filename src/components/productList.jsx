import React, { useState, useEffect } from "react";
import { products as productsFormData } from "../data/products.js";
import Product from "./product.jsx";
import SortSelect from "./sortSelect.jsx";
import _ from "lodash";

// const users = [
//     { user: "ben", age: 30 },
//     { user: "alex", age: 18 },
//     { user: "ben", age: 25 },
//     { user: "alex", age: 20 }
// ];

// _.orderBy(users, ["user", "age"], ["asc", "desc"]);                                                  -> // [['alex', 20], ['alex', 18], ['ben', 30], ['ben', 25]]

const sortOptions = [
    {
        value: "priceASC",
        label: "Price ascending",
        sort: (products) => _.orderBy(products, ["price"], ["asc"])
        // products.slice().sort((itemA, itemB) => return itemA.price - itemB.price)
        // [...products].sort((itemA, itemB) => return itemA.price - itemB.price)
    },
    {
        value: "priceDESC",
        label: "Price descending",
        sort: (products) => _.orderBy(products, ["price"], ["desc"])
    },
    {
        value: "ratingASC",
        label: "Rating ascending",
        sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
    },
    {
        value: "ratingDESC",
        label: "Rating descending",
        sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
    }
];

const ProductList = () => {
    const [products] = useState(productsFormData);
    const [sortProducts, setSortProducts] = useState(productsFormData);
    const [sortSign, setSortSign] = useState("priceDESC");

    const handleChangeSortSign = (e) => {
        setSortSign(e.target.value);
    };

    useEffect(() => {
        const findOption = sortOptions.find(({ value }) => value === sortSign);
        if (findOption) {
            setSortProducts(findOption.sort(products));
        } else {
            setSortProducts(products);
        }
    }, [sortSign, products]);

    return (
        <div className="container mt-t">
            <div>
                <SortSelect value={sortSign} options={sortOptions} onSort={handleChangeSortSign} />
            </div>
            <div className="row mt-4">
                {sortProducts.map((product) => <Product key={product.id} {...product} />)}
            </div>
        </div>
    );
};

export default ProductList;
