# Universidade das Heurísticas 

O objetivo deste trabalho é desenvolver um jogo com foco no processo de ensino-aprendizagem que  
englobe o conhecimento de heurísticas de Nielsen no contexto de IHC e possibilite ao  
jogador aprender mais facilmente o conteúdo.
 
## Instalação e Execução

Para a instalaçao do projeto é necessário ter JavaScript (versão 10.19 ou superior) e docker (versão  20.10 ou superior)

- git clone https://github.com/RecursosDigitaisdeEnsinoAprendizagemIHC/Universidade-das-Heuristicas.git
- npm install back/
- npm install front/
- cd back
- npm run typeorm-sync
- npm run typeorm-migration
- cd ..
- ./up.sh
- cd front/ 
- npm run dev

# Telas do Jogo

![teste](/image/Menu_principal.png "Menu Principal")
![teste](/image/boas_vindas.png "Tela de boas vindas")
![teste](/image/fases.png "Apresentação das fases")
![teste](/image/pergunta_multipla_escolha.png "Exemplo de pergunta multipla escolha")
![teste](/image/feedback_resposta_errada.png "Feedback de resposta errada")
![teste](/image/tela_ranking.png "Tela de Ranking")

## Documentação

A documentação deste jogo é o arquivo zip com apresentação [Universidade-das-Heuristicas.zip](Universidade-das-Heuristicas.zip).