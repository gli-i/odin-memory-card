
export default function Card({data, handleClick}){
    return (
      <div style={{backgroundImage:`url(${data.img_url})`}} className="bg-cover bg-center w-52 flex flex-col justify-end"
      onClick={(e) => handleClick(e)} >
          <h3 className="text-white bg-red-800 bg-opacity-50 p-1">{data.name}</h3>
        </div>
    );
  }