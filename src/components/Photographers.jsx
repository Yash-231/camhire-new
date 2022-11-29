import React from "react";
import "./css/Photographers.css";
import data from "../data/data.json";

const Photographers = () => {

    return (
        <div id="photographers-page">
            <h1>Our Photographers</h1>
                {data.Photographers
                    ?
                    data.Photographers.map((d, i) => {
                        return (i % 2 === 0
                            ?
                            (
                                <div key={i} className="photographers-container">
                                    <div className="profile-image">
                                        <img src={d.imageUrl} alt={d.title} />
                                        <span>{d.title.toUpperCase()}</span>
                                    </div>
                                    <div className="content">
                                        <div className="details">
                                            <h2>{d.title.toUpperCase()}</h2>
                                            <p>{d.body}</p>
                                        </div>
                                        <div className="galleria">
                                            <h3>Galleria</h3>
                                            <div className="gallery-tiles">
                                                <img src={d.imageUrl} alt="galleria" />
                                                <img src={d.imageUrl} alt="galleria" />
                                                <img src={d.imageUrl} alt="galleria" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div key={i} className="photographers-container">
                                    <div className="content">
                                        <div className="details">
                                            <h2>{d.title.toUpperCase()}</h2>
                                            <p>{d.body}</p>
                                        </div>
                                        <div className="galleria">
                                            <h3>Galleria</h3>
                                            <div className="gallery-tiles">
                                                <img src={d.imageUrl} alt="galleria" />
                                                <img src={d.imageUrl} alt="galleria" />
                                                <img src={d.imageUrl} alt="galleria" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-image">
                                        <img src={d.imageUrl} alt={d.title} />
                                        <span>{d.title.toUpperCase()}</span>
                                    </div>
                                </div>
                            )
                        )
                    })
                    :
                    "loading"
                }
        </div>
    )
}

export default Photographers
