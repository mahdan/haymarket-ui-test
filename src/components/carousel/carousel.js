import React, { Component } from 'react';
import './carousel.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleLeft, faAngleDoubleRight);

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          img: '/assets/jpg/gallery-slide-1.jpg',
          caption:
            'Nam congue interdum dolor, rhoncus finibus neque mollis nec.',
          heading:
            'Page 1: Lorem ipsum dolor sit amet , consectetur adipiscing elit',
          subHeading:
            'Morbi efficitur metus in sapien pharetra, sed facilisis arcu rhoncus. Proin sed vulputate ligula, vitae dapibus tellus. Aliquam erat volutpat.',
          text1:
            'Nam rhoncus sollicitudin viverra. Pellentesque accumsan rutrum quam ut sollicitudin. Pellentesque facilisis sed mi ac dignissim. Nulla in sagittis velit. Integer luctus ullamcorper magna eget egestas. Maecenas id facilisis dui, at rhoncus neque.',
          text2:
            'Donec vestibulum pretium velit, eget elementum erat imperdiet quis. Pellentesque hendrerit ex massa, tincidunt lobortis ex rutrum et. Duis id commodo lacus. Mauris pellentesque, odio eget sollicitudin aliquam, erat justo sodales metus, a imperdiet massa mauris vel leo. Donec imperdiet justo vel justo interdum efficitur.'
        },
        {
          img: '/assets/jpg/gallery-slide-2.jpg',
          caption: 'Nam congue interdum dolor, rhoncus finibus neque.',
          heading:
            'Page 2: Lorem ipsum dolor sit amet , consectetur adipiscing elit',
          subHeading:
            'Morbi efficitur metus in sapien pharetra, sed facilisis arcu rhoncus. Proin sed vulputate ligula, vitae dapibus tellus. Aliquam erat volutpat.',
          text1:
            'Maecenas ornare at massa at ultrices. Duis non ante pharetra, porttitor urna eu, gravida risus. Vivamus aliquam ligula in ipsum tempor, vitae eleifend augue pellentesque. Nam vitae dui molestie diam luctus volutpat. Etiam convallis porta est a congue.',
          text2:
            'Sed laoreet lorem ac rhoncus faucibus. Nulla at est odio. Mauris ex elit, porttitor quis nibh non, pharetra aliquam diam. Nulla sodales, diam et sollicitudin sagittis, tortor metus tincidunt nulla, eu auctor nisl magna eu enim. Praesent feugiat tincidunt pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at justo nec sem mattis placerat non non ex.',
          text3:
            'Vivamus commodo odio ac mi lobortis rhoncus. Pellentesque enim odio, gravida at velit imperdiet, vulputate fringilla tellus. Maecenas eu purus faucibus, euismod odio a, iaculis tellus. Suspendisse elementum ac ante lobortis convallis.'
        },
        {
          img: '/assets/jpg/gallery-slide-3.jpg',
          caption: 'Nam congue interdum dolor, rhoncus.',
          heading:
            'Page 3: Lorem ipsum dolor sit amet , consectetur adipiscing elit',
          subHeading:
            'Morbi efficitur metus in sapien pharetra, sed facilisis arcu rhoncus. Proin sed vulputate ligula, vitae dapibus tellus. Aliquam erat volutpat.',
          text1:
            'Mauris molestie elit a convallis maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent at augue volutpat, facilisis sapien vitae, ornare diam. Vestibulum a nulla fermentum, efficitur libero a, condimentum lorem. Donec ex nulla, blandit a ultrices ac, mollis id magna. Morbi lorem felis, malesuada eget cursus eget, vestibulum ac dui. Donec eu ligula pretium, scelerisque nisi sed, viverra erat.',
          text2:
            'Nam sollicitudin, justo id facilisis tincidunt, leo tortor cursus purus, sit amet volutpat tortor arcu venenatis nibh. Vestibulum nec nisi elit. Nullam vel diam orci. Sed quis risus cursus, cursus lectus quis, elementum turpis. Nunc eu feugiat arcu. Sed justo nisl, tristique sit amet nunc eu, tincidunt luctus magna.',
          text3:
            'Phasellus tempus nisi eget sem dictum, quis eleifend nisl dictum. In sed dictum massa, vel volutpat tortor. Nullam pretium quam a enim volutpat, faucibus varius dui consequat.'
        }
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <h1>{image.heading}</h1>
      <p className="sub-heading">{image.subHeading}</p>
      <figure>
        <img src={image.img} alt="" />
        <figcaption>{image.caption}</figcaption>
      </figure>
      <p>{image.text1}</p>
      <p>{image.text2}</p>
      <p>{image.text3}</p>
    </div>
  );
};

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon
        icon="angle-double-left"
        className="fa fa-2x"
        aria-hidden="true"
      />{' '}
      Previous
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      Next{' '}
      <FontAwesomeIcon
        icon="angle-double-right"
        className="fa fa-2x"
        aria-hidden="true"
      />
    </div>
  );
};

export default Carousel;
