import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const AppContainer = styled.div`
  border-left: 20px solid #0074d9; /* Borda esquerda maior */
  border-right: 20px solid #0074d9; /* Borda direita maior */
  border-top: 1px solid red; /* Borda superior para depuração */
  border-bottom: 1px solid red; /* Borda inferior para depuração */
  min-height: 100vh;
  background-color: #000;
  color: white;
  padding-top: 60px; /* Ajuste o preenchimento superior se necessário para compensar o header fixo */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
