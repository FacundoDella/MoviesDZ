import { Route } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";


export const routes: Route[] = [{
    path: '',
    component: WelcomeComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 