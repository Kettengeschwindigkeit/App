import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, filter, valueProperty, contentProperty, onChangeFilter }) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li className={"list-group-item list-group-item-action" + (item[valueProperty] === filter ? " active" : "")}
                    key={item[valueProperty]}>{item[contentProperty]}</li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "text"
};

GroupList.propTypes = {
    items: PropTypes.array.isRequired,
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string
};

export default GroupList;
