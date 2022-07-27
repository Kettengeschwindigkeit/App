import React from "react";
import PropTypes from "prop-types";

const Episode = (props) => {
    const { name, episode } = props; // const name = props.name; const airDate = props.airDate; const episode = props.episode
    return (
        <div className="col-4 mb-2">
            <div className="card" style={{ height: "100%" }}>
                <div className="card-body">
                    <h5 className="card-title fs-6">
                        {name} {episode}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted small">
                        {props.airDate}
                    </h6>
                </div>
            </div>
        </div>
    );
};

Episode.propTypes = {
    name: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    airDate: PropTypes.string.isRequired
};

export default Episode;
