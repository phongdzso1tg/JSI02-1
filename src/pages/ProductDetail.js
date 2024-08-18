import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './productdetail.css'

export const ProductDetail = () => {
    const [data, setData] = React.useState(null)
    const { id } = useParams()
    console.log("🚀 ~ ProductsDetail ~ id:", id)

    const getData = async () => {
        const url = `https://dummyjson.com/products/${id}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }



    // Fetch data on component mount and whenever the props change.
    useEffect(() => {
        getData()
    }, []);
    return (


        <div>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={data?.images[0]} alt="..." /></div>
                        <div class="col-md-6">
                            <div class="small mb-1">SKU: BST-{id}</div>
                            <h1 class="display-5 fw-bolder">{data?.title}</h1>
                            <div class="fs-5 mb-5">
                                <span>${data?.price}</span>
                            </div>
                            <p class="lead">{data?.description}</p>
                            <div class="d-flex">
                                <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: 100 }} />
                                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};
