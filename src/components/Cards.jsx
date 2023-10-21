import Card from './Card.jsx'

export default function Cards({cards, handleClick}){
    

    return (
      <main id="cards" className="h-5/6 px-40 md:px-24 sm:px-0 pb-12 flex flex-wrap gap-6 justify-center">
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