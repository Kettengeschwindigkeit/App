import React, { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import Episode from "./episode";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { fetchAll, fetchYears } from "../fakeApi/episodesApi";

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [years, setYears] = useState([]);
    const [filter, setFilter] = useState();
    const count = episodes.length;
    const pageSize = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    const getEpisodes = (year) => {
        fetchAll(year).then((response) => setEpisodes(response));
        setCurrentPage(1);
    };

    useEffect(() => {
        getEpisodes(filter);
    }, [filter]);

    useEffect(() => {
        fetchYears().then((response) => setYears(response));
    }, []);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const handleReset = () => {
        setFilter();
    };

    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    {
                        !!years.length && (
                            <>
                                <GroupList items={years} filter={filter} onChangeFilter={handleFilterChange} />
                                <hr />
                                <div className="d-grid">
                                    <button onClick={handleReset} className="btn btn-m btn-primary">Clear</button>
                                </div>
                            </>
                        )}
                </div>
                <div className="col-8">
                    <div className="row">
                        {pageEpisodes.map((episode) => (
                            <Episode key={episode.id} {...episode} />
                        ))}
                    </div>
                    <div className="row">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodesList;
