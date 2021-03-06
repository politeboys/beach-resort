import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { RoomContext } from '../context';
import Button from '../components/StyledHero'
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            // defoultBcg
        }
    }
    static contextType = RoomContext;

    componentDidMount() { }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>no such room could not found....</h3>
                <Link to="/rooms" className="btn-primary">return to room</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">return rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            images.map((item, index) => {
                                return <img src={item} key={index} alt={name} />
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>Price: {price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity:{" "}
                                {
                                    capacity > 1 ? `${capacity} People` : `${capacity} Person`
                                }
                            </h6>
                            <h6>{pets? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast allowed"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom;