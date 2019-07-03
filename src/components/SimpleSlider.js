import React from "react";
import Slider from "react-slick";
import styled from "react-emotion";

const StyledDiv = styled("div")`
  width: 300px;
`;

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }

  /** ↓ 本来なくて良いです**/
  // componentDidMount() {
  //   setTimeout(() => {
  //     let updateSlides = this.state.slides;
  //     updateSlides.map((value, index) => {
  //       value.name = index + 1;
  //       return value;
  //     });
  //     this.setState({slides: updateSlides});
  //   },3000)
  // }
  /** ↑ 本来なくて良いです**/

  render() {
    let config = this.state.config;
    // let slides = this.state.slides;
    const slides = [
      { name: "first" },
      { name: "second" },
      { name: "third" },
      { name: "forth" }
    ];

    return (
      <Slider {...config}>
        {slides.map(slide => {
          return [
            <StyledDiv key={slide}>
              <h3>{slide.name}</h3>
            </StyledDiv>
          ];
        })}
      </Slider>
    );
  }
}

export default SimpleSlider;
