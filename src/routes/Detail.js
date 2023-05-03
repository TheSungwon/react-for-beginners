import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function Detail() {
    const { id } = useParams();
    console.log(id);

    const [loading, setLoading] = useState(true);
    const [moive, setMoive] = useState();
    console.log(loading);

    async function getMoive() {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        
        setLoading(false);
        setMoive(json.data.movie);
    }

    useEffect(() => {
        getMoive();
    }, []);

    console.log(moive);
    return (
        <div>
        {loading? <h1>Loading...</h1>: <SetDetail rating={moive.rating} img={moive.background_image} genres={moive.genres}/>}
        </div>
    );
}



function SetDetail({rating, img, genres}){

    return(
        <div>
            <h1>Rating is ... {rating}</h1>
            <img src={img} alt=""/>
            <ul>
                {genres.map((e, i)=> <li key={i}>{e}</li>)}
            </ul>

        </div>
    )
}

SetDetail.propTypes={
    rating:PropTypes.number.isRequired,
    img:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Detail;