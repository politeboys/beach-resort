import React from 'react';
import { Link } from 'react-router-dom';
// import defoltImage from '../images/room-12.jpeg';
import PropTypes from 'prop-types'

const Room = ({ room }) => {
    const { name, slug, images, price, } = room;
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0]} alt="featured room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
                {/* <p className="room-info">Price: {price}</p> */}
                <p className="room-info">{name}</p>
            </div>
        </article>
    );
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default Room;