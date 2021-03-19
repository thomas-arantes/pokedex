import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage/HomePage';
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage';
import { DetailsPage } from '../Pages/DetailsPage/DetailsPage';
import React from 'react';
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>
        <Route exact path="/details/:name">
          <DetailsPage />
        </Route>
        <Route>
          <div>Erro 404 - Págin não encontrada :(</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
