const createSection = document.getElementById('mainSec');
const addSec = document.createElement('section')
addSec.innerHTML = `
<section>
   <h1>My Favorite Games.</h1>
   <ul>
      <li>Grand Theft Auto V</li>
      <li>Tomb Raider</li>
      <li>Valorant</li>
   </ul>
</section>
`;
createSection.appendChild(addSec);