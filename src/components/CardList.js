import { PropTypes } from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  const { cards } = props;
  return (
    <>
      <ul className="card-ul">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </ul>
    </>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CardList;
