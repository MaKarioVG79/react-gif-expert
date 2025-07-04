import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { use } from "react";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {

    const category ="One Punch";

    test ("Debe de mostrar el loading inicialmete", () => {

      useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
      });

      render (<GifGrid category={category}/>);
      expect(screen.getByText("Cargando..."));
      expect(screen.getByText(category));

    });

    
    test ("Debe de mostrar items cuando se cargan las imagenes mediante es useFetchGif ", () => {

        const gifs = [{
          id: "123",
          title: "Saitama",
          url: "https://localhost/saitama.jpg",
        },
        {
          id: "abc",
          title: "Goku",
          url: "https://localhost/goku.jpg",
        },
        ]

       useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
      });

       render (<GifGrid category={category}/>);

       expect(screen.getAllByRole("img").length).toBe(2);

       

    });
});
