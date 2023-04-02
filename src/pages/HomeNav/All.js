import CardList from '../../components/CardList';

const All = () => {
  const cards = [
    {
      id: '1',
      image: 'https://user-images.githubusercontent.com/44798044/229337829-52adfea6-1bf7-4941-9316-294640a3798f.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337940-370c7f39-df88-463b-bf8e-adbd39082672.png',
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGNCODE',
    },
    {
      id: '2',
      image: 'https://user-images.githubusercontent.com/44798044/229337804-e1eb2f11-931a-4047-a667-66cdcfd6b913.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337947-a0375312-f5d8-46ed-81c8-86adcb2f2065.png',
      title: 'Create 3D Site with Spline and React - Full Course',
      channel: 'DESIGNCODE',
    },
    {
      id: '3',
      image: 'https://user-images.githubusercontent.com/44798044/229337760-e98fa277-cd5c-4dab-b2cc-3c70b3f232f6.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337949-6b154746-aa04-4187-a486-3ca9b937853b.png',
      title: 'How to Use AI Art Generator on Midjourney',
      channel: 'MIDJOURNEYART',
    },
    {
      id: '4',
      image: 'https://user-images.githubusercontent.com/44798044/229337812-d1d69853-a899-4330-969d-b049ff264d18.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337950-745880ec-f441-4f3f-84cd-e04c41f062f4.png',
      title: 'Desktop App UI Design in Figma - Full Course',
      channel: 'DESIGNCODE',
    },
    {
      id: '5',
      image: 'https://user-images.githubusercontent.com/44798044/229337895-c0c09f8f-bf62-419a-8f8d-dd832d4f0c11.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337966-1d99e013-6227-42cc-9d81-e6ea6219782f.png',
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGNCODE',
    },
    {
      id: '6',
      image: 'https://user-images.githubusercontent.com/44798044/229337810-780c6333-a5aa-42c1-972e-9b66a8b23a35.png',
      personImage: 'https://user-images.githubusercontent.com/44798044/229337969-dc1be129-dbf7-41db-83fa-695c50e7e8e4.png',
      title: 'Build a 3D Site Without Code with Framer - Crash Course',
      channel: 'DESIGNCODE',
    },
  ];
  return (
    <section>
      <CardList cards={cards} />
    </section>
  );
};

export default All;
