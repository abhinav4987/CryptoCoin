import React, {useState, useEffect} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import {useGetCryptosQuery} from '../../redux/services/cryptoAPI'
import Loader from '../Loader'
import "./style.css";

function Cryptocurrencies({simplified}) {

    const count = simplified ? 10: 100 ;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        // setCryptos(cryptosList.data.coins);
    }, [cryptosList, searchTerm]);

    useEffect(() => {
        if(!isFetching)
        setCryptos(cryptosList.data.coins);
    },[isFetching]);
    

    if (isFetching) return <Loader />;


    return (
        <div>
            {
                !simplified && (
                    <div className="cryptocurrency-search">
                        <Input placeHolder="Search Cryptocurrency" onChnage={(e) => setSearchTerm(e.target.value.toLowerCase())}></Input>
                    </div>
                )
            }
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos.map((currency) => (
                    <Col  xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link key={currency.id} to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {currency.change}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Cryptocurrencies
