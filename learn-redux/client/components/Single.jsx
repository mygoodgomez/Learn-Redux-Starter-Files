import React from 'react';
import {Link} from 'react-router';

import Photo from './Photo.jsx';
import Comments from './Comments.jsx';

const Single = React.createClass({
    render() {
        const {postId} = this.props.params;
        const index = this.props.posts.findIndex((post) => post.code === postId);
        
        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || [];

        console.log(post);
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>

        );
    }
});

export default Single;