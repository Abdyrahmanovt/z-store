import React from 'react';
import CollectingCard from "../Collecting/CollectingCard";
import CardItem from "../Sale/CardItem";
import './style.css'
import NewCard from "../Collections/NewCard";

const CollectionPage = () => {
    return (
<div className="container">
    <div className='collectingPage'>
        <h2 className="collectingPage__title">Коллекция Лето 2020</h2>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                <CardItem/>
            </div>
        </div>
        <div className="button-group d-flex flex-end">
            <div className="btn-group btn-str d-flex flex-end " srole="group" aria-label="First group">
                <button type="button" className="btn btn-outline-secondary "><i
                    className="fa-solid fa-angle-left"/>
                </button>
                <button type="button" className="btn btn-outline-secondary">1</button>
                <button type="button" className="btn btn-outline-secondary">2</button>
                <button type="button" className="btn btn-outline-secondary">3</button>
                <button type="button" className="btn btn-outline-secondary">4</button>
                <button type="button" className="btn btn-outline-secondary">...</button>
                <button type="button" className="btn btn-outline-secondary">N</button>
                <button type="button" className="btn btn-outline-secondary"><i
                    className="fa-solid fa-angle-right"/>
                </button>
            </div>
        </div>

        <NewCard/>

    </div>
</div>
    );
};

export default CollectionPage;