import Card from './Card.jsx'

export default function Cards({cards, handleClick}){
    

    return (
      <main id="cards" className="h-5/6 px-0 md:px-24 lg:px-40 pb-12 flex flex-wrap gap-6 justify-center">
      {cards.map(card => (
        <Card 
          key = {card.id}
          data = {card}
          handleClick = {handleClick}
        />
      ))}
      </main>
    );
  }