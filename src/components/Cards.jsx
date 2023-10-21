import Card from './Card.jsx'

import kiki_img from "../img/kiki.png"
import jiji_img from "../img/jiji.png"
import totoro_img from "../img/totoro.png"
import minitot_img from "../img/minitotoro.png"
import catbus_img from "../img/catbus.png"
import howl_img from "../img/howl.png"
import sophie_img from "../img/sophie.png"
import ponyo_img from "../img/ponyo.png"
import chihiro_img from "../img/chihiro.png"
import haku_img from "../img/haku.png"
import naus_img from "../img/nausicaa.png"
import pmono_img from "../img/pmononoke.png"

export default function Cards({handleClick}){
    const cards = [
      {id: "kk", name: "Kiki", img_url: kiki_img},
      {id: "jj", name: "Jiji", img_url: jiji_img},
      {id: "ttr", name: "Totoro", img_url: totoro_img},
      {id: "mtt", name: "Mini Totoros", img_url: minitot_img},
      {id: "ctb", name: "Catbus", img_url: catbus_img},
      {id: "hl", name: "Howl", img_url: howl_img},
      {id: "sph", name: "Sophie", img_url: sophie_img},
      {id: "py", name: "Ponyo", img_url: ponyo_img},
      {id: "chr", name: "Chihiro", img_url: chihiro_img},
      {id: "hk", name: "Haku", img_url: haku_img},
      {id: "nsc", name: "Nausicaa", img_url: naus_img},
      {id: "pmn", name: "Princess Mononoke", img_url: pmono_img}
    ]

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