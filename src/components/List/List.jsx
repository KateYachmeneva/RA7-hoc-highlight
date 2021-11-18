
import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Video from "../Video/Video";
import Article from "../Article/Article";
import HighLightPost from "../HighLightPost/HighLightPost";

const List = ({list}) => {
    return list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHOC key = {shortid.generate()} {...item} />
                );

            case 'article':
                return (
                    <ArticleHOC key = {shortid.generate()}  {...item} />
                );
                default:
                    return <p>Empty</p>
                }
              });
            }

const VideoHOC = HighLightPost(Video);
const ArticleHOC = HighLightPost(Article);
List.propTypes = {
    list:PropTypes.array.isRequired
}

export default List;
