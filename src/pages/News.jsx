import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetNewsQuery } from '../services/newsApi'

const { Title, Text } = Typography
const { Option } = Select

const News = () => {
  const {data, isFetching } = useGetNewsQuery({ category: 'Cryptocurrency', count: 8})

  console.log(data);

  return (
    <div>

    </div>
  )
}

export default News