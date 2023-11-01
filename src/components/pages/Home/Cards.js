import React from 'react'
import './Cards.scss'
import { cardsData } from './CardData'

const Cards = () => {
  return (
    <div>

      <div className="container">

            <div className="wrapper">

               {
                    cardsData.map((item) => {
                        return(
                            <div className=" card" key={item.id} >
                                <div className="icon-holder">
                                    <div className="icon" style={{ content: `url(${item.icon})` }}></div>
                                </div>
    
                                <div className="card-containing">
                                    <div className="card-title">
                                        <h3>{item.title}</h3>
                                    </div>
                        
                                    <div className="card-text">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                         </div>
                        )
                    })
               }
              

            </div>
        </div>
</div>



  )
}

export default Cards
