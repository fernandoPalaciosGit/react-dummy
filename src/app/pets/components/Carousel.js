import { Component } from "react";

export default class Carousel extends Component {
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  state = {
    active: 0,
  };

  setActiveThumbnail = ({ target }) => {
    this.setState({ active: parseInt(target.dataset.index) });
  };

  Thumbnail = ({ image, idx }) => {
    return (
      <img
        src={image}
        alt="animal thumbnail"
        className={idx === this.state.active ? "active" : ""}
        data-index={idx}
        data-testid={`thumbnail-${idx}`}
        onClick={this.setActiveThumbnail}
      />
    );
  };

  hasImages() {
    return Array.isArray(this.props.images) && this.props.images.length > 0;
  }

  render() {
    return (
      this.hasImages() && (
        <div className="carousel">
          <img
            data-testid="main-image"
            src={this.props.images[this.state.active]}
            alt="animal picture"
          />
          <div className="carousel-smaller">
            {this.props.images.map((image, idx) => (
              <this.Thumbnail key={image} image={image} idx={idx} />
            ))}
          </div>
        </div>
      )
    );
  }
}
