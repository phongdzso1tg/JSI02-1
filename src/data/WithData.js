import React, { useState, useEffect } from 'react';

const WithData = (WrappedComponent) => {
    const WithData = (props) => {
        const [data, setData] = useState();

        const getData = async () => {
            const url = 'https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=Tomm&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'ce2234ad95msh9d8c5043404fc84p1913a6jsn5df080088056',
                    'x-rapidapi-host': 'asos10.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result)
            } catch (error) {
                console.error(error);
            }
        }
        // Fetch data on component mount and whenever the props change.
        useEffect(() => {
            getData()
        }, []);
        return <WrappedComponent data={data} {...props} />;
    };

    return WithData;
};
export default WithData;