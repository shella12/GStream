import Card from '../components/Card';
const CardList = (props) => { 
    const { cards } = props;
  return (
    <>
    <ul className="card-ul">
      {cards.map((card) => (
        <Card
          card={card}
        />
      ))}
    </ul>
  </>
    );
  };
  
  export default CardList;
  