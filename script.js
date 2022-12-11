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
<section>
   <h1>My Favorite Dress.</h1>
   <ul>
      <li>T-Shirt</li>
      <li>Pant</li>
      <li>Full Sleeve Shirt.</li>
   </ul>
</section>
`;
createSection.appendChild(addSec);
addSec.style.border = '2px solid red';
addSec.style.backgroundColor = 'gray';
addSec.style.color = 'white';
addSec.style.textAlign = 'center';
addSec.style.fontSize = '2em';