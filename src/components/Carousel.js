import React, {useEffect, useState} from "react";
import img1 from '../images/ケーキ屋.gif';
import img2 from '../images/552.png';
import img3 from '../images/ケーキ屋.png';

const Carousel = () => {

  const data = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScroll() }, 3000);
    return () => clearInterval(interval);
  })

  const CarouselItem = (props) => {
    const display = props.display === props.index ? 'active' : '';
    return (
        <div className={"carousel-item " + display}>
          <img src={props.item} className="d-block w-95 rounded mx-auto d-block" alt="..." ></img>
        </div>
    )
  }

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "rgb(237, 228, 224)", height: 600}}>
      <div className="carousel-inner">
        {data.map((item, index) => (
          <CarouselItem display={currentIndex} index={index} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Carousel;
