import cn from 'classnames';
import './BannerSlider.scss';
import { useState, useRef, useEffect } from 'react';
import phones from '../../assets/images/banner-phones.png';
import tablets from '../../assets/images/banner-tablets.png';
import accessories from '../../assets/images/banner-accessories.png';
import { Icons } from '../../assets/icons';

const sliderImages = [
  phones,
  tablets,
  accessories,
];

export const BannerSlider: React.FC = () => {
  const firstImgIndex = 0;
  const lastImgIndex = sliderImages.length - 1;
  const [currentImgIndex, setCurrentImgIndex] = useState(firstImgIndex);
  const [sliderWidth, setSliderWidth] = useState(0);

  const banner = useRef<HTMLDivElement>(null);
  const transformValue = sliderWidth * currentImgIndex;

  useEffect(() => {
    if (banner.current) {
      setSliderWidth(banner.current.offsetWidth);
    }
  }, [currentImgIndex]);

  const handlePrevSlide = () => {
    if (currentImgIndex !== firstImgIndex) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else {
      setCurrentImgIndex(lastImgIndex);
    }
  };

  const handleNextSlide = () => {
    if (currentImgIndex !== lastImgIndex) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(firstImgIndex);
    }
  };

  return (
    <section className="slider">
      <div className="slider__container">
        <button
          type="button"
          className="slider__btn"
          onClick={handlePrevSlide}
        >
          <Icons.ArrowLeft />
        </button>
        <div
          className="slider__content"
          ref={banner}
        >
          <ul
            className="slider__list"
            style={{
              transform: `translateX(${-transformValue}px)`,
            }}
          >
            {sliderImages.map(img => (
              <li className="slider__item" key={img}>
                <img
                  src={img}
                  alt="Product banner"
                  className="slider__img"
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="slider__btn"
          onClick={handleNextSlide}
        >
          <Icons.ArrowRight />
        </button>

      </div>
      <div className="slider__position">
        {sliderImages.map((img, i) => (
          // eslint-disable-next-line
          <button
            type="button"
            className={cn('slider__position-item',
              { 'slider__position-item--active': currentImgIndex === i })}
            key={img}
            onClick={() => setCurrentImgIndex(i)}
          />
        ))}
      </div>

    </section>
  );
};
