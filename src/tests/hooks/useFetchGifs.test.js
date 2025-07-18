import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { use } from "react";





describe("Pruebas en <useFetchGifs/>", () => {
    test ("Debe de regresar el estado inicial", () => {

      const { result} =  renderHook (() => useFetchGifs("One Punch"));
      const { images, isLoading } = result.current;

      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
      // useFetchGifs
    });


      test ("Debe de retornanr un arreglo de imagenes y el isLoading en false", async() => {

      const { result} =  renderHook (() => useFetchGifs("One Punch"));
      await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0),
      );

      const { images, isLoading } = result.current;

      expect(images.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();

            
    });
});