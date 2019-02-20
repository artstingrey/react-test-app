import React from 'react';
import TagInfo from './TagInfo';
import { Link } from "react-router-dom";

function Tag (props) {
    const divStyle = {
        fontSize: props.size + 'px'
    };        
    
    let tagInfo;

    if (props.id === props.activeTagId) {
        tagInfo = (
            <div className='tag-info-container'>
                <div className='close' onClick={props.closePopupEvent}>Крестик</div>
                <TagInfo label={props.title} mentions={props.mentions} pageTypes={props.pageTypes}/>
            </div>
            );    
    }

    return (
        <div className='tag' style={divStyle}>
            <div id={props.id} onClick={props.clickEvent}>
                {props.title}
            </div>
            {tagInfo}
            <div className='link'><Link to={'/' + props.id}>link</Link></div>
        </div>
        
        
    );

}

export default Tag;