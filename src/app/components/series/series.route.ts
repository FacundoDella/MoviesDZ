import { Route } from "@angular/router";
import { SeriesComponent } from "./series.component";

export const routes: Route[] = [{
    path: '',
    component: SeriesComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 