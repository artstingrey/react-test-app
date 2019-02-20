import React, { Component } from 'react';
import Tag from './Tag';

class TagList extends Component {

    state = {
        activeTagId: ""
    };

    handleClick = (event) => {
        const id = event.target.id;
        this.setState({
            activeTagId: id
        });
    };

    closePopup = () => {
        this.setState({
            activeTagId: ""
        });
    };

    render () {
        const tagList = this.props.data.map((item) => {
            return <Tag key={item.id} title={item.label} size={item.sentimentScore} activeTagId={this.state.activeTagId} id={item.id} clickEvent={this.handleClick} mentions={item.sentiment} pageTypes={item.pageType} closePopupEvent={this.closePopup}/>    
        });

        return (
            <div className='tag-list'>
                {tagList}   
            </div>
        ); 
    }   
}

export default TagList;