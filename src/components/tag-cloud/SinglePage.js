import React from 'react';
import TagInfo from './TagInfo';
import importTagListData from '../../local-data/data.json';

function SinglePage ({ match }) {
    const urlTagId = match.params.tagId;
    let singleTag = "";
    
    importTagListData.map((item) => {
        if (item.id == urlTagId) {
            singleTag = <TagInfo label={item.label} mentions={item.sentiment} pageTypes={item.pageType}/> 
        }  
    });

    return (
        <div className='tag-single-page'>{singleTag}</div>
    );
}

export default SinglePage;