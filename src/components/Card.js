import { PropTypes } from 'prop-types';

const CardList = (props) => {
  const { card } = props;
  return (
    <div className="card">
      <img src={card.image} className="thumbnail" alt="thmbnail" />
      <div className="details d-flex">
        <img src={card.personImage} alt="channel-img" />
        <div className=" d-flex">
          <h2>{card.title}</h2>
          <h3>{card.channel}</h3>
          <p>14k views - 1 month ago</p>
        </div>
      </div>
    </div>
  );
};

CardList.propTypes = {

  card: PropTypes.objectOf(PropTypes.string).isRequired,

};

export default CardList;
