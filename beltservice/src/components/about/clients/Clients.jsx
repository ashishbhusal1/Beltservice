import React from "react";
import "./clients.css";
import { AboutClientCard } from "../../storage/HomeDb";

function Clients() {
  return (
    <section className="AboutClients">
      <div className="wrapper flexrow">
        <div className="ClientsContent flexcolumn">
          <h2>+180clients</h2>
          <p>
            Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
            amet elementum hibendim sollicitiidin feuciat
          </p>
          <p>
            In nulvinar incum ou digniccim forilicie macco icto varinc nurus non
            dictum elit nibh ut massa. Nam massa erati
          </p>
          <button className="buttonPrimary">Services</button>
        </div>
        <div className="ClientsCards">
          <ul className="clientUl flexcolumn">
            {AboutClientCard.map((item) => {
              return (
                <li key={item.id} className="clientCard flexrow">
                  <img src={item.img} alt="" />
                  <div className="CardContent">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clients;
