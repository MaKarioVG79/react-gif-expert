

import { render, screen,  } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe(`Pruebas en <GifItem/>`, () => {
    
     const title = `Saitama`;
     const url = `https://one-punch.com/saitama.jpg`;

    test ("Debe de hacer match con el snapshot", () => {

       const {container} = render(<GifItem title= {title} url= {url}/>) ;
       expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="card"
  >
    <img
      alt="Saitama"
      src="https://one-punch.com/saitama.jpg"
    />
    <p>
      Saitama
    </p>
  </div>
</div>
`);
    });

    test ("Debe de mostrar la imagen con el URL y ALT indicado", () => {

       render(<GifItem title= {title} url= {url}/>) ;
        //expect(screen.getByRole(`img`).src).toBe(url);
        //expect(screen.getByRole(`img`).alt).toBe(title);
        const {src, alt} = screen.getByRole(`img`);
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test ("Debe de mostrar el titulo en el componente", () => {
         render(<GifItem title= {title} url= {url}/>) ;
         expect (screen.getByText(title)).toBeTruthy();


    });
});

