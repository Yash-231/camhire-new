import React from 'react'
import data from '../data/data.json'

const Blogs = () => {
    return (
        <div>
            <h1> Blogs</h1>
            {data.Blogs
            ?
            data.Blogs.map((d, i) => (
                i % 3 === 0
                ?
                <div key={`${d.title}-${i}`} className="row1">
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={d.imageUrl} alt='' width='750' height='400'/>
                        </div>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h2>{d.title}</h2>
                            </div>
                            <div className='card-body'>
                                <p>
                                    {d.body.slice(0, 200)}...
                                    <a href='' className='readMoreBtn'>Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='row2' >
                    {i % 3 === 1
                    ?
                    <div key={`${d.title}-${i}`} className="left2">
                        <div className='card-container'>
                            <div className='image-container'>
                                <img src={d.imageUrl} alt='' width='500' />
                            </div>
                            <div className='card-content'>
                                <div className='card-title'>
                                    <h2>{d.title.slice(0, 50)}...</h2>
                                </div>
                                <div className='card-body'>
                                    <p>
                                        {d.body.slice(0, 80)}...
                                        <a href='' className='readMoreBtn'>Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div key={`${d.title}-${i}`} className="row1">
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={d.imageUrl} alt='' width='500'/>
                        </div>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h2>{d.title.slice(0, 50)}...</h2>
                            </div>
                            <div className='card-body'>
                                <p>
                                    {d.body.slice(0, 80)}...
                                    <a href='' className='readMoreBtn'>Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                }
                </div>
            ))
            :
            'loading'}
            <div className='moreButton'>
                <a href='' className=''>More...</a>
            </div>
        </div>
    )
}

export default Blogs