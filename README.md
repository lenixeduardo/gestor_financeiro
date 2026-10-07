# Gestor Financeiro Pessoal

Aplicação React para registrar receitas e despesas, acompanhar saldo e consultar o extrato financeiro.

## Funcionalidades

- cadastro de entradas e saídas;
- persistência local no navegador;
- totais de receitas, gastos e saldo calculados a partir das movimentações;
- médias mensais calculadas dinamicamente;
- remoção de movimentações;
- layout responsivo;
- testes de regressão para os cálculos financeiros.

## Execução

```bash
npm ci
npm start
```

## Qualidade

```bash
npm test -- --watchAll=false
npm run build
```

O projeto mantém os dados no `localStorage` para continuar simples e executável sem backend. Para uso multiusuário, o próximo passo é substituir essa camada por uma API e banco de dados com autenticação.
