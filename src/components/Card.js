const CardList = (props) => { 
    const { card } = props;
  return (
    <div className="card">
     <img src={card.image} className="thumbnail"/>
     <div className="details d-flex">
     <img src={card.personImage}/>
     <div className=" d-flex">
     <h2>{card.title}</h2>
     <h3>{card.channel}</h3>
     <p>14k views - 1 month ago</p>
    </div>
     </div>
  </div>
    );
  };
  
  export default CardList;