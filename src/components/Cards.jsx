import Card from './Card.jsx'

export default function Cards(){
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
      <main id="cards" className="h-5/6 pb-12 grid grid-cols-6 gap-6 justify-center">
      {cards.map(card => (
        <Card 
          key = {card}
          card = {card}
        />
      ))}
      </main>
    );
  }