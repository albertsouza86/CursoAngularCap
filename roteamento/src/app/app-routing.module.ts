import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardiaoGuard } from './guardiao.guard';
import { LoginComponent } from './login/login.component';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  {path: "primeira-pagina", component: PrimeiraPaginaComponent },
  {path: "segunda-pagina" , component: SegundaPaginaComponent },
  {path: "" , redirectTo: "primeira-pagina", pathMatch:"full" },
  {path: "pagina-com-paramentros/:id", component: PaginaComParamentrosComponent },
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [ GuardiaoGuard] },
  {path:"login", component: LoginComponent},
  {path:"**" , component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
