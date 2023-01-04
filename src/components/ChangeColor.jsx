//Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.

//Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

// ! 1ro Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

// ! 2do Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

// ! 3ro Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

import React, { useEffect, useState } from 'react';



const ChangeColor = () => {
   const [color, setColor] = useState('rgb(0,0,0)');
   const [start, setStart] = useState(0);


   const numbRandom = () => {
      return Math.floor((Math.random() * 255) + 0);
   }

   /* let red = numbRandom();
   let blue = numbRandom();
   let green = numbRandom(); */
   /* const newColor = (red, green, blue) => {
      return (
         `rgb(${red},${green},${blue})`
      )
   }
   const genRGB = () => {
      const rgb = {
         red: numbRandom(),
         green: numbRandom(),
         blue: numbRandom(),
      }
      return setColor(newColor(rgb.red, rgb.green, rgb.blue))
   } */

   const tryRGB = () => {
      const rgb = {
         red: numbRandom(),
         green: numbRandom(),
         blue: numbRandom(),
      }
      return setColor(`rgb(${rgb.red},${rgb.green},${rgb.blue})`)
   }

   const changeColor = () => {
      return setStart(
         setInterval(() => {
            tryRGB()
         }, 1000))
   }

   const stopOutSquare = () => {
      return clearInterval(start);
   }

   const stopDoubleClick = () => {
      return clearInterval(start);
   }
   return (
      <span
         onMouseOver={changeColor} //mouse sobre el span => inicia la cuenta
         onMouseLeave={stopOutSquare} //mouse fuera del span => para el cambio de color
         onDoubleClick={stopDoubleClick} //doble click => para el cambio de color
         style={{ width: '255px', height: '255px', backgroundColor: color, boxShadow: '4px 4px 4px rgba(0,0,0,0.5)', borderRadius: '2px' }}
      >

         {/* {color} */}

      </span>

   );
};

export default ChangeColor;