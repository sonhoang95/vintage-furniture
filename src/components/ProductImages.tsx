import { useState } from 'react';
import { Image } from '../types';

const ProductImages = ({ images = [] }: { images: Image[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="lg:w-1/2">
      <img
        className="h-[600px] w-full mb-4 rounded"
        src={mainImage?.url}
        alt={mainImage?.filename}
      />
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              src={image?.url}
              alt={image?.filename}
              className={`h-[100px] w-full cursor-pointer ${
                image.url === mainImage.url &&
                'border-2 rounded border-orange-800'
              }`}
              onClick={() => setMainImage(images[index])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
