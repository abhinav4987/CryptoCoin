import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import {
    useGetCryptosQuery,
    useGetExchnagesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} from '../../redux/services/cryptoAPI';
import Cryptocurrencies from '../Cryptocurrencies'
import News from '../News';
import  {Link} from 'react-router-dom'
import Loader from '../Loader'
const {Title} = Typography;



function HomePage() {
    
    const {data, isFetching} = useGetCryptosQuery(10);
    const stats  = data?.data?.stats;
    if(!isFetching) {
        // console.log(data);
    }

    // if (isFetching) return <Loader />;
    if(isFetching) return <Loader />
    
    return (
        <div>
            <Title level={2} className="heading">Cryto Currencies Stats</Title>
            <Row>
                <Col span={12} ><Statistic title="Total Crypto Currencies" value={stats.total} /></Col>
                <Col span={12} ><Statistic title="Total Exchnages" value={millify(stats.totalExchanges)} /></Col>
                <Col span={12} ><Statistic title="Total Market Cap" value={`$${millify(stats.totalMarketCap)}`} /></Col>
                <Col span={12} ><Statistic title="Total 24h Volume" value={`$${millify(stats.total24hVolume)}`} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total} /></Col>
                <Col span={12} ><Statistic title="Total Markets" value={millify(stats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Crypto  in the World</Title>
                <Title level={3} className="show-more"><Link>Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link>Show more</Link></Title>
            </div>
            <News simplified/>
        </div>
    )
}

export default HomePage

// <News simplified/>