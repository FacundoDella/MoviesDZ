import { Route } from "@angular/router";
import { HeaderComponent } from "./header.component";


export const routes: Route[] = [{
    path: '',
    component: HeaderComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 