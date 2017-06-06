import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GalleryImage from './GalleryImage';
import GalleryThumbs from './GalleryThumbs';

//import {loadImages} from "../Actions";
import * as ImageGalleryActions from "../Actions";
export class Gallery extends Component {
  componentDidMount() {
    console.log("didMount");
    //this.props.dispatch(loadImages());
    this.props.loadImages();
  }
  render() {
    const {images, selectImage, selectedImage} = this.props;
    return (
      <div className="image-gallery" hidden={!selectedImage}>
        <GalleryImage image={selectedImage} />
        <GalleryThumbs selectImage={selectImage} images={images} />
      </div>
    )
  }
}

// export default connect(
//   state => ({images: state.images, selectedImage: state.selectedImage})
// )(Gallery)
export default connect(
  state => ({images: state.images, selectedImage: state.selectedImage}),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(Gallery)
