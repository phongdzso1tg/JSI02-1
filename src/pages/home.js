import React, { useEffect, useState } from 'react';
import { Carousel, Flex } from 'antd';
import WithData from '../data/WithData';
import { Avatar, Card } from 'antd';
import { SearchOutlined, DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
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
    const url3 = 'https://dummyjson.com/products/category/mens-watches';
    const url4 = 'https://dummyjson.com/products/category/womens-bags';

    try {
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
      const response3 = await fetch(url3);
      const response4 = await fetch(url4);

      const result1 = await response1.json();
      const result2 = await response2.json();
      const result3 = await response3.json();
      const result4 = await response4.json();
      const result = {
        data: {
          products: [...result1?.products, ...result2?.products, ...result3?.products, ...result4?.products],
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
      <Carousel autoplay={true}>
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

      <div className='products-container'>
        {
          data?.products.map((item, index) => {
            return (
              <Card
                onClick={() => navigate(`product/${item.id}`)}
                style={{
                  width: 350,
                  display: Flex,
                  justifyContent: 'center',
                  gap: 30,
                  margin: '30px 0',
                  borderRadius: 20,
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                }}
                cover={
                  <img alt="example" src={item.thumbnail} />
                }
                actions={[
                  <ShoppingCartOutlined key="add=product" />,
                  <SearchOutlined key="search=product" />,
                  <DollarOutlined key="buy-proudct" />,
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