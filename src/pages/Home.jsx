import React from 'react'
import { Typography, Statistic, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Home = () => {
  return (
    <>
      <Title level={2} className='header'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total' value='5' /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value='5' /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value='5' /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value='5' /></Col>
        <Col span={12}><Statistic title='Total Markets' value='5' /></Col>
      </Row>
    </>
  )
}

export default Home