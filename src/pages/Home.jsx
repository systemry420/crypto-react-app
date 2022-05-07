import React from 'react'
import { Typography, Statistic, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { millify } from 'millify'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery()

  if (isFetching) {
    return <Title level={2}>Loading ...</Title>
  }

  if (data) {
    const {
      total, total24hVolume, totalExchanges,
      totalMarketCap, totalMarkets
    } = data?.data?.stats

    return (
      <>
        <Title level={2} className='header'>Global Crypto Stats</Title>
        <Row gutter={[4, 4]}>
          <Col span={12}>
            <Statistic title='Total' value={total} />
            </Col>
          <Col span={12}>
            <Statistic title='Total Exchanges' value={totalExchanges} />
            </Col>
          <Col span={12}>
            <Statistic title='Total Market Cap' value={millify(totalMarketCap)} />
            </Col>
          <Col span={12}>
            <Statistic title='Total 24h Volume' value={millify(total24hVolume)} />
            </Col>
          <Col span={12}>
            <Statistic title='Total Markets' value={totalMarkets} />
          </Col>
        </Row>
  
        <div className='home-heading-component'>
          <Title level={2}>Top 50 Coins</Title>
        </div>
        <Cryptocurrencies coins={data.data.coins} />

        <div className='home-heading-component'>
          <Title level={2}>Latest News</Title>
        </div>
        <News /> 
        
      </>
    )
  }
  
}

export default Home