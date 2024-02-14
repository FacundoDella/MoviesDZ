import { Route } from "@angular/router";
import { PeliculasComponent } from "./peliculas.component";


export const routes: Route[] = [{
    path: '',
    component: PeliculasComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 