
import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';

import _ from 'lodash';

const IMAGES =
    []





class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {}


    }

    componentDidMount() {

    }


    render() {

            if(IMAGES.length == 0){
                return (  <div>No image to display</div>)
            }else {
               return( <div><Gallery images={IMAGES}/></div>)
            }

    }
}

export default Photo;
