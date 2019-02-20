import React from 'react';

function TagInfo (props) {
    const {label ,mentions, pageTypes} = props;

    const listPageType = () => {
        if (pageTypes) {
            const list = Object.keys(pageTypes).map((keyName, item) => {
                return <li key={keyName}>{keyName}: {item}</li>
            });

            return list;
        }
    }

    const checkMentions = () => {
        mentions.negative = mentions.negative || 0;
        mentions.neutral = mentions.neutral || 0;
        mentions.positive = mentions.positive || 0;
    };

    
    return (
        <div className='tag-info'>
            {checkMentions()}            
            <p><b>Label:</b> {label}</p>
            
            <p><b>Total Mentions:</b> {mentions.negative + mentions.neutral + mentions.positive}</p>
            <p><b>Positive Mentions:</b> {mentions.positive}</p>
            <p><b>Neutral Mentions:</b> {mentions.neutral}</p>
            <p><b>Negative Mentions:</b> {mentions.negative}</p>
            <p><b>List of page types:</b></p>
            <ul>
                {listPageType()}
            </ul>
        </div>
    );
}

export default TagInfo;