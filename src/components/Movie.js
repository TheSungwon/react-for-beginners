import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ title, summary, genres, img, id }) {
    return (
        <div>
            <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </ul>
            <img src={img} alt={title}/>
            <hr />
        </div>
    );
}


Movie.propTypes={
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    id:PropTypes.number.isRequired
}
export default Movie;