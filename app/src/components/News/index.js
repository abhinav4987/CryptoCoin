import React, {useState,  useEffect} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../../redux/services/cryptoAPI';
import {  useGetNewsQuery } from '../../redux/services/cryptoNewsAPI';
import Loader from '../Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;






function News({simplified}) {

    const { data , isFetching } = useGetCryptosQuery(100);
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const result = useGetNewsQuery({ newsCategory : newsCategory , count: simplified ? 6 : 12 });
    console.log("news ka result hain yeh ",result);

    if(result.isFetching || isFetching) return <Loader />

    return (
        <div>

            <Row gutter={[24,24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value, data)}
                        // filterOption={(input, option) => }
                    >
                        <Option value="Cryptocurrency">CryptoCurrency</Option>
                        {data.data.coins.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                    </Select>
                </Col>
            )}
            {result.data.value.map((news, idx) => (
                <Col xs={24} sm={12} lg={8} key={idx}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                
                            </div>
                            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                            <div className="provider-container">
                                <div>
                                <Avatar 
                                    src={news.provider[0].image.thumbnail.contentUrl || demoImage} 
                                    alt="news"
                                />
                                    <Text className="provider-name">{news.provider[0].name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}
export default News
