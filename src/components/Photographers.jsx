import React from "react";
import data from "../data/data.json";
import "./Photographer.css";
const Photographers = (props) => {
    return (
        <div className="wrapper">
            <h1 className="title">OUR PHOTOGRAPHERS</h1>
            

            {data.Photographers
                ? data.Photographers.map((d, i) =>
                    i % 2 === 0 ? (
                        <div className="row ">
                            <div className="col-7 ">
                                <div className="row ">
                                    <div className="col-4 ">
                                        <img className=" " src={d.imageUrl} alt="" />
                                    </div>
                                    <div className="col-8  ">
                                        <div className=" col-12 ">
                                            <h1>{d.title}</h1>
                                        </div>
                                        <div className="col-12">
                                            <p>{d.body}</p>
                                        </div>
                                        <div className=" col-12 ">
                                            <h2>Galleria</h2>
                                        </div>

                                        <div className="col-12  ">
                                            <div className="row ">
                                                <img
                                                    className=" col-4 col-6 "
                                                    src={d.imageUrl}
                                                    alt=""
                                                />
                                                <img
                                                    className=" col-4 col-6 "
                                                    src={d.imageUrl}
                                                    alt=""
                                                />
                                                <img
                                                    className=" col-4 col-6 "
                                                    src={d.imageUrl}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row ">
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-8 ">
                                        <div className=" col-12 ">
                                            <h1>{d.title}</h1>
                                        </div>
                                        <div className="  col-12">
                                            <p>{d.body}</p>
                                        </div>
                                        <div className=" col-12 ">
                                            <h2>Galleria</h2>
                                        </div>

                                        <div className="col-12  ">
                                            <div className="row">
                                                <img className=" col-4 " src={d.imageUrl} alt="" />
                                                <img className=" col-4 " src={d.imageUrl} alt="" />
                                                <img className=" col-4 " src={d.imageUrl} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4   ">
                                        <img className="col-3 " src={d.imageUrl} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                )
                : "loading"}
            </div>
        
    );
};

export default Photographers;
