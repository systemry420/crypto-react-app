import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetNewsQuery } from '../services/newsApi'

const { Title, Text } = Typography
const { Option } = Select

const News = () => {
  const {data, isFetching } = useGetNewsQuery({ category: 'Cryptocurrency', count: 8})

  if (data) {
    console.log(data);
    return (
      <Row gutter={[24, 24]}>
        {data?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img src={news?.image?.thumbnail?.contentUrl} alt={news.name} />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)} ...`
                    : news.description
                  }
                </p>
              </a>
            </Card>
          </Col> 
        ))}
      </Row>
    )
  }
}

export default News