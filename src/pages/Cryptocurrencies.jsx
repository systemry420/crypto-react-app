import React from 'react'
import { Card, Input, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { millify } from 'millify'

const Cryptocurrencies = ({ coins }) => {
  
  if (coins.length > 0) {
    return (
      <>
        <Row gutter={[12, 12]} className='crypto-card-container'>
          {coins.map(coin => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
              <Link to={`/crypto/${coin.uuid}`}>
                <Card 
                  title={`${coin.rank}. ${coin.name} (${coin.symbol})`}
                  hoverable
                  extra={<img src={coin.iconUrl} className='crypto-image' alt={coin.name} />}
                >
                  <p>Price: {Number(coin.price).toFixed(2)}</p>
                  <p>Market cap: {millify(coin.marketCap)}</p>
                  <p>24h Change: {coin.change}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default Cryptocurrencies