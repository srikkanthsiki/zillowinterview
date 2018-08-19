
import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';

import _ from 'lodash';

const IMAGES =
    [{
        src: "https://wp.zillowstatic.com/1/162Acari-042-95d6b9.jpg",
        thumbnail: "https://wp.zillowstatic.com/1/162Acari-042-95d6b9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "My Dream Home"
    },
        {
            src: "https://wp.zillowstatic.com/1/David-Hasselhoffs-kitchen-62f58c.jpg",
            thumbnail: "https://wp.zillowstatic.com/1/David-Hasselhoffs-kitchen-62f58c.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "My Kitchen"
        },

        {
        src: "https://wp.zillowstatic.com/1/The-White-House-3228c3-640x427.jpg",
        thumbnail: "https://wp.zillowstatic.com/1/The-White-House-3228c3-640x427.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "White house"
    },
        {
            src: "https://photos.zillowstatic.com/p_h/ISe87v7o8m569l1000000000.jpg",
            thumbnail: "https://photos.zillowstatic.com/p_h/ISe87v7o8m569l1000000000.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "My friends house"
        },
        {
            src: "https://photos.zillowstatic.com/p_f/ISq9kfp4m9eyco1000000000.jpg",
            thumbnail: "https://photos.zillowstatic.com/p_f/ISq9kfp4m9eyco1000000000.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "brady's house"
        }]





class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {}


    }

    componentDidMount() {

    }


    render() {

            if(IMAGES.size ==0){
                return (  <div>No image to display</div>)
            }else {
               return( <div><Gallery images={IMAGES}/></div>)
            }


    }
}

export default Photo;
