import CardList from '../../components/CardList';
const All = () => { 
  let cards = [
    {
      image: require('../../assets/Rectangle-1.png'),
      personImage: require('../../assets/person1.png'),
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGNCODE'
  }, 
    {
      image: require('../../assets/Rectangle-2.png'),
      personImage:require('../../assets/person2.png'),
      title: 'Create 3D Site with Spline and React - Full Course',
      channel: 'DESIGNCODE'
  },
    {
      image: require('../../assets/Rectangle-3.png'),
      personImage:require('../../assets/person3.png'),
      title: 'How to Use AI Art Generator on Midjourney',
      channel: 'MIDJOURNEYART'
  },
    {
      image: require('../../assets/Rectangle-4.png'),
      personImage:require('../../assets/person4.png'),
      title: 'Desktop App UI Design in Figma - Full Course',
      channel: 'DESIGNCODE'
  },
    {
      image: require('../../assets/Rectangle-5.png'),
      personImage:require('../../assets/person5.png'),
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGNCODE'
  },
    {
      image: require('../../assets/Rectangle-6.png'),
      personImage:require('../../assets/person5.png'),
      title: 'Build a 3D Site Without Code with Framer - Crash Course',
      channel: 'DESIGNCODE'
  },
];
  return (
   <section>
<CardList cards={cards}/>
   </section>
    );
  };
  
  export default All;
  