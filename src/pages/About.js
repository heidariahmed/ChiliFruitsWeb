import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h2>About</h2>
      <p>
      The task is  Gusten odlar och säljer chilifrukter som han säljer på den lokala marknaden varje sommar. Då Gustens flakmoppe har gått sönder är han nu tvungen att satsa på online-försäljning. Han är nu i behov av ett
        systemstöd som kan användas av både Gusten och hans kunder. Gusten har tillsammans med en IT-konsult
        tagit fram ett antal krav och teknikval som systemet ska uppfylla. Nu ska en enkel prototyp byggas med följande teknikval. 
        - Webbfrontend i React för inmatning och presentation av data
        - En mikrotjänst som bygger på Spring Boot 3 som har Controller-, Service- och DAO-lager
        - REST-API bestående av två endpoints (GET &amp; POST)
        - Anrop och svar till API:t är i JSON-format
        - In-memory-databas inbyggd i tjänsten för persistering
        - Hibernate för hantering av ORM
        - Java 17 eller senare
        Gusten odlar chili av tre olika slag enligt tabellen nedan.
      </p>
      <p>Systemet ska i slutändan användas både av kunder och av Gusten själv. Gusten har ett behov av att kunna
        uppdatera lagersaldot (POST) när en ny skörd är mogen och redo för försäljning. Kunderna i sin tur har ett
        behov av att kunna se information om de chilifrukter som finns i lager (GET).
        Eftersom systemet endast är en prototyp behöver man inte ta hänsyn till autentisering/auktorisering.</p>
    </div>
  );
};
export default About;