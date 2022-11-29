import React, { useState } from 'react';
import './css/Blogs.css';
import data from '../data/data.json';
import { Link } from "react-router-dom";

const Blogs = () => {

    const [next, setNext] = useState(4);

    const showMore = () => {
        setNext(next + 4);
    };

    const showLess = () => {
        setNext(4);
    };

    return (
        <div id='blogs'>
            <h1 className='heading'>Blogs</h1>
            <div className="outer-cntr">
                {data.Blogs
                    ?
                    data.Blogs.slice(0, next).map((d, i) => (
                        i % 3 === 0 ?
                            <Link key={i} to={`/blogs/${d.title}`} state={d}>
                                <div className='blog' style={{backgroundImage: `url(${d.imageUrl})`}}>
                                    <div className='blog-desc'>
                                        <p className='blog-title'>{d.title}</p>
                                        <p className='desc'>{d.body}</p>
                                    </div>
                                </div>
                            </Link>
                            :
                            i % 3 === 1 ?
                                <Link key={i} to={`/blogs/${d.title}`} state={d}>
                                    <div className='left-blog' style={{backgroundImage: `url(${d.imageUrl})`}}>
                                        <div className='blog-desc'>
                                            <p className='blog-title'>{d.title}</p>
                                            <p className='desc'>{d.body}</p>
                                        </div>
                                    </div>
                                </Link>
                                :
                                <Link key={i} to={`/blogs/${d.title}`} state={d}>
                                    <div className='right-blog' style={{backgroundImage: `url(${d.imageUrl})`}}>
                                        <div className='blog-desc'>
                                            <p className='blog-title'>{d.title}</p>
                                            <p className='desc'>{d.body}</p>
                                        </div>
                                    </div>
                                </Link>
                    ))
                    :
                    'loading'
                }
            </div>
            <div className='toggleBtn'>
                {next >= data.Blogs.length ?
                    <button onClick={showLess} className="moreLessBtn">Less...</button>
                    :
                    <button onClick={showMore} className="moreLessBtn">More...</button>}
            </div>
        </div>
    )
}

export default Blogs