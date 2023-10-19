export default function Card({key, card}){
    const img_url = key + ".png";
    return (
      <div className="w-56 bg-pink-100">
          <img src={img_url} alt="" />
          <h3 className="bg-white bg-opacity-25">{card}</h3>
        </div>
    );
  }