import React from "react";
import PropTypes from 'prop-types';

const Video = ({url,views}) => {
    return (
        <div className="item item-video">
            <iframe src={url} 
               frameborder="0"
                allow="autoplay; encrypted-media"
                 allowfullscreen>
              </iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
};

Video.propTypes = {
    url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
}
export default Video;