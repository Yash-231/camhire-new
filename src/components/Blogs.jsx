import React from 'react';
import data from '../data/data.json';
import { useState } from "react";
import './Blogs.css'


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
            <div className='heading'>
                <h1>Blogs</h1>
            </div>
            {data.Blogs
            ?
            data.Blogs.slice(0, next).map((d, i) => (
                i % 3 === 0
                ?
                <div key={`${d.title}-${i}`} className="row1">
                    <img src={d.imageUrl} alt=''/>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h2>{d.title}</h2>
                            </div>
                            <div className='card-body'>
                                <p>
                                    {d.body.slice(0, 190)}...
                                    <a href='' className='readMoreBtn'>Read More</a>
                                </p>
                            </div>
                        </div>
                </div>
                :
                <>
                    {i % 3 === 1
                    ?
                    <div key={`${d.title}-${i}`} className="left" display="inline-block">
                        <img src={d.imageUrl} alt=''/>
                            <div className='card-content'>
                                <div className='card-title'>
                                    <h2>{d.title.slice(0, 30)}...</h2>
                                </div>
                                <div className='card-body'>
                                    <p>
                                        {d.body.slice(0, 80)}...
                                        <a href='' className='readMoreBtn'>Read More</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    :
                    <div key={`${d.title}-${i}`} className="right" display="inline-block">
                        <img src={d.imageUrl} alt=''/>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h2>{d.title.slice(0, 30)}...</h2>
                            </div>
                            <div className='card-body'>
                                <p>
                                    {d.body.slice(0, 80)}...
                                    <a href='' className='readMoreBtn'>Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                }
                </>
            ))
            :
            'loading'}
            <div className='toggleBtn'>
                {next>=data.Blogs.length?(<a onClick={showLess} className="btn">Less...</a>):next < data.Blogs.length && (<a onClick={showMore} className="btn">More...</a>)}
            </div>
        </div>
    )
}

export default Blogs