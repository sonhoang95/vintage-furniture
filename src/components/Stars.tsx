import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface StarsProps {
  stars: number;
  reviews: number;
}
const Stars = ({ stars, reviews }: StarsProps) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-yellow-400">
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <section className="flex items-center gap-2">
      <div className="flex items-center gap-1">{tempStars}</div>
      <p>({reviews} customer reviews)</p>
    </section>
  );
};

export default Stars;
