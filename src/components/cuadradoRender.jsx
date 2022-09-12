import React, {useState} from 'react';

const CuadradoRender = () => {

    const [color, setColor] = useState('#000000');
    const [intervalotiempo, setIntervalotiempo] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const getHex = (red, green, blue) => {
        return (
          '#' +
          [red, green, blue]
            .map((c) => {
              const hex = c.toString(16);
              return hex.lenght === 1 ? '0' + hex : hex;
            })
            .join('')
        );
      };

    const generarHex = () => {
        const rgb = {
          r: getColor(),
          g: getColor(),
          b: getColor(),
        };
        return setColor(getHex(rgb.r, rgb.g, rgb.b));
      };

    const CambioColor = () => {
        return setIntervalotiempo(setInterval(generarHex, 500));
    };
    
    const DetenCambioColor = () => {
        return clearInterval(intervalotiempo);
    };

    

    return (
        
        <div>
            <div
            onMouseOver={CambioColor}
            onMouseLeave={DetenCambioColor}
            onDoubleClick={DetenCambioColor}
            style={{ fontSize: '4em', width: '255px', height: '255px', backgroundColor: color, margin: '5px', color:color?'white':'', textalign:'center', padding: '1rem' }}
            >
            Color: {color}
            </div>
        </div>
    );
}

export default CuadradoRender;
