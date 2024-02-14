import { Route } from "@angular/router";
import { MainComponent } from "./main.component";


export const routes: Route[] = [{
    path: '',
    component: MainComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 