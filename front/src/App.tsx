// App.tsx
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import Logo from "./assets/Logo";

interface Item {
  id: number;
  name: string;
  species: string;
  birthDate: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('http://host.docker.internal:8000/animals')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do backend');
        }
        return response.json();
      })
      .then((data: Item[]) => setItems(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '1rem' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Espécie</TableCell>
                <TableCell>Data de Nascimento</TableCell>
                <TableCell>Criado Em</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.species}</TableCell>
                  <TableCell>{item.birthDate}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default App;
