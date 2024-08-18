import React, { useEffect, useState } from 'react';
import { Carousel, Flex } from 'antd';
import WithData from '../data/WithData';
import {Avatar, Card } from 'antd';
import { SearchOutlined,DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './siu.css';
import { Content } from 'antd/es/layout/layout';
import './home.css';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const contentStyle = {
    width: '100%',
    margin: 0,
    height: '678px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
};
const HomeApp = () => {
  const [data, setData] = useState();
  const navigate = useNavigate()


  const getData = async () => {
    const url1 = 'https://dummyjson.com/products/category/mens-shirts';
    const url2 = 'https://dummyjson.com/products/category/womens-dresses';
      
      try {
          const response1 = await fetch(url1);
          const response2 = await fetch(url2);
          const result1 = await response1.json();
          const result2 = await response2.json();
          console.log(result1);
          console.log( result2);
          const result = {
              data: {
                  products: [...result1.products,...result2.products],
              }
          }
          setData(result.data);
          console.log(result);
      } catch (error) {
          console.error(error);
      }
  }

  

  // Fetch data on component mount and whenever the props change.
  useEffect(() => {
      getData()
  }, []);
    console.log("data======: ", data);

 
    return (
        <div>
        <Carousel >
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg" width="1303px" height="630" />
            </div>
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg" width="1303px" height="630" />
            </div>
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg" width="1303px" height="630" />
            </div>
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFIMHQ5yhE/1/0/1600w/canva-orange-and-teal-summer-sale-kids-fashion-bright-website-banner-L6kUMOWkkho.jpg" width="1303px" height="630" />
            </div>
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFED4mfw94/1/0/1600w/canva-yellow-white-modern-special-discount-banner-0J53SvmhoiY.jpg" width="1303px" height="630" />

            </div>
            <div>
                <img style={contentStyle} src="https://marketplace.canva.com/EAFKwirl3N8/1/0/1600w/canva-brown-minimalist-fashion-product-banner-iRHpbHTqh-A.jpg" width="1303px" height="630" />
            </div>
            <div>
                <img style={contentStyle} src="https://www.lilbontre.com/cdn/shop/files/LilBontre-Summer-Sorbet-Jabla-Banner.webp?v=1713946291&width=3840" width="1303px" height="630" />
            </div>
        </Carousel>
        {/* <Content>
            <div className='content-X'>
            <section id="tranding">
        <div class="container">
          <h3 class="text-center section-subheading">- popular Delivery -</h3>
          <h1 class="text-center section-heading">Tranding food</h1>
        </div>
        <div class="container">
          <div class="swiper tranding-slider">
            <div class="swiper-wrapper">
           
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$20</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Black Beefstack
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
          
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image2.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$20</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Chinese DimSum
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
     
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image3.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$40</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Junk Food
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
           
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image4.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$15</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Hot Pot
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
             
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image5.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$15</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Fast Food
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image6.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$8</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Burger King
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            
              <div class="swiper-slide tranding-slide">
                <div class="tranding-slide-img">
                  <img src="images/image7.jpeg" alt="Tranding"/>
                </div>
                <div class="tranding-slide-content">
                  <h1 class="food-price">$8</h1>
                  <div class="tranding-slide-content-bottom">
                    <h2 class="food-name">
                      Super Fast Food
                    </h2>
                    <h3 class="food-rating">
                      <span>4.5</span>
                      <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="tranding-slider-control">
              <div class="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div class="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div class="swiper-pagination"></div>
            </div>
  
          </div>
        </div>
      </section>
            </div>

        </Content> */}
        <div className='products-container'>
                {
                    data?.products.map((item, index) => {
                        return (
                          <Card
                          onClick={() => navigate(`product/${item.id}`)}
                          style={{
                            width: 300,
                            paddingTop:100,
                            display: Flex,
                            justifyContent:'space-between',
                            marginTop: 100,
                            borderRadius: 20,
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                            
                            
                            
                          }}
                          cover={
                            <img alt="example" src={item.thumbnail} />
                            
                          }
                          actions={[
                            <ShoppingCartOutlined  key="add=product"   />,
                            <SearchOutlined  key="search=product" />,
                            <DollarOutlined  key="buy-proudct" />,
                          ]}
                        >
                          <h3>Name:  {item.title}</h3>
                          <p>Price: {item.price}</p>
                        </Card>
                        )
                    })
                }
              

            </div>
            
        </div>
        
    );
    

    
};

export default HomeApp;