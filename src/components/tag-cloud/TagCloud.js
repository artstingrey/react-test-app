import React, { Component } from 'react';
import TagList from './TagList';
import importTagListData from '../../local-data/data.json';


class TagCloud extends Component {
    state = {
        tagListData: []
    };

    componentDidMount() {
        this.setState({
          tagListData: importTagListData
        });
    }

    render() {
        const tagListData = this.state.tagListData;
        return (
            <div className="tag-cloud">
                <TagList data={tagListData} />
            </div>    
        );
      }
}

export default TagCloud;