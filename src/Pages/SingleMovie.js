import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Axios from "axios";
import Loader from "../Ui/Loader";

const SingleMovie = (props) => {
    let params = useParams();
    let url = `https://apidev.ticketezy.com/movies`;
    const [singleMovieDetails, setSingleMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setSingleMovieDetails(res.data);
        })
    }, [])
    let ui = null;
    if (singleMovieDetails === null) {
        ui = <>
            {loading && <Loader />}
        </>
    } else {
        ui = singleMovieDetails.filter(x => x.secret === params.id).map((data) => {
            return (
                <div key={data.secret}>
                    <Banner />
                    <Details details={data} />
                    <AboutEvent details={data} />
                    <Gallery details={data} />
                    <Organizer details={data} />
                </div>
            )
        })
        if (singleMovieDetails !== null) {

        }
    }
    return (
        ui
    )
}

export default SingleMovie;