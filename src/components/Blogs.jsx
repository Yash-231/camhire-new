import React from 'react';
import data from '../data/data.json';
import { useState } from "react";
import './Blogs.css'
import { Card, Col, Row, Space } from 'antd';
const { Meta } = Card;


const Blogs = () => {

    const [next, setNext] = useState(4);

    const showMore = () => {
        setNext(next + 4);
    };

    const showLess = () => {
        setNext(4);
    };


    return (
        <div className='main-body'>
                <h1 className='heading'>Blogs</h1>
            <Row gutter={[0, { xs: 8, sm: 16, md: 12, lg: 12 }]} justify="center">
                {data.Blogs
                    ?
                    data.Blogs.slice(0, next).map((d, i) => (
                        i % 3 == 0 ?
                        <Col span={24} className="gutter-row">
                            <a href="#">
                                <Card
                                    bordered={false}
                                    hoverable
                                    style={{ margin:"auto" }}
                                    cover={<img alt="blog-img" src={d.imageUrl}/>}
                                >
                                    <Meta title={d.title} description={d.body}/>
                                </Card>
                                </a>
                        </Col>
                        :
                        i % 3 == 1 ?
                        <Col md={{span:12}} sm={{span: 24}} push={5} className="gutter-row">
                            <a href="#">
                            <Card
                                bordered={false}
                                hoverable
                                cover={<img alt="blog-img" src={d.imageUrl}/>}
                            >
                                <Meta title={d.title} description={d.body}/>
                            </Card>
                            </a>
                        </Col>
                        :
                        <Col md={{span:12}} sm={{span: 24}} className="gutter-row">
                            <a href="#">
                            <Card
                                bordered={false}
                                hoverable
                                cover={<img alt="blog-img" src={d.imageUrl}/>}
                            >
                                <Meta title={d.title} description={d.body}/>
                            </Card>
                            </a>
                        </Col>
                    ))
                    :
                    'loading'
                }
            </Row>
            <div className='toggleBtn'>
                {next >= data.Blogs.length ?
                <a onClick={showLess} className="btn">Less...</a>
                :
                <a onClick={showMore} className="btn">More...</a>}
            </div>
        </div>
    )
}

export default Blogs