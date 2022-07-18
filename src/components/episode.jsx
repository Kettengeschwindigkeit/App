import React from "react"

const Episode = (props) => {
    const { name, airDate, episode } = props                        // const name = props.name; const airDate = props.airDate; const episode = props.episode 
    return (
        <div className="col-4 mb-2">
            <div className="card" style={{ height: "180px" }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {name} {episode}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {airDate}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Episode
