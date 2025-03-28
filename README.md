# IPlast - Gerenciamento de Produtos, Funcionários e Clientes

## Visão Geral

Este projeto é um sistema web simples para gerenciamento de produtos, funcionários e clientes. Ele permite adicionar, editar e excluir registros de forma dinâmica, utilizando JavaScript e LocalStorage para armazenar os dados.

## Tecnologias Utilizadas

HTML para estruturação das páginas

CSS para estilização da interface

JavaScript para funcionalidades dinâmicas

LocalStorage para armazenamento dos dados no navegador

## Funcionalidades

CRUD (Create, Read, Update, Delete) para produtos, funcionários e clientes.

Uso de modais para adicionar e editar registros.

Armazenamento local via LocalStorage.

Interface simples e responsiva.

## Como Executar o Projeto

Baixe ou clone o repositório.

Abra o arquivo index.html em um navegador.

Utilize os botões para navegar entre as páginas e gerenciar os registros.

## Explicação das Páginas

Cada página (produtos.html, funcionarios.html e clientes.html) segue a mesma estrutura:

Um botão "Novo" para adicionar um item.

Uma tabela que exibe os dados cadastrados.

Botões de "Editar" e "Excluir" para cada item.

Um modal para adicionar ou editar registros.

## Como Funciona o script.js

O arquivo script.js gerencia todas as funcionalidades do sistema:

Identifica a página atual (produtos, funcionários ou clientes) usando data-page.

Carrega os dados armazenados no LocalStorage e exibe na tabela.

Abre o modal ao clicar em "Novo".

Permite adicionar novos registros e salva no LocalStorage.

Permite editar registros existentes e atualizar os dados.

Exclui registros ao clicar no botão "Excluir".

