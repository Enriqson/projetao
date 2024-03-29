import Rope from "@/components/svgs/activities/Rope";
import Ball from "@/components/svgs/activities/Ball";
import Bike from "@/components/svgs/activities/Bike";
import Chess from "@/components/svgs/activities/Chess";
import Hide from "@/components/svgs/activities/Hide";

const ACTIVITY_METADATA = {
  soccer: {
    alias: "Futebol",
    color: "blue",
    image: Ball,
    instructions: "É um esporte coletivo, onde dois times jogam entre si e tem com o objetivo fazer o gol, cada time é composto por 1 goleiro e seus jogadores de linha, geralmente com 10",
    requirements: "É necessário uma bola para que haja a prática, uniforme ou colete, chuteira, um espaço adequado, além de se alongar e aquecer antes da prática.",
    weeklyGoal: "1 hora",
    achievements: 3,
  },
  rope_jumping: {
    alias: "Pular Corda",
    color: "pink",
    image: Rope,
    instructions: "Consistirá em fazer movimentos de salto para que consiga fazer com que a corda passe sem bater em alguma parte do corpo.",
    requirements: "Uma corda para realizar o exercício, coordenação motora e equilíbrio",
    weeklyGoal: "1 hora",
    achievements: 1,
  },
  cycling: {
    alias: "Pedalar",
    color: "purple",
    image: Bike,
    instructions: "Será um movimento realizado em conjunto entre os membros superiorese inferiores, onde os membros inferiores vão ser responsáveis por fazer o movimento no...",
    requirements: "Uma bicicleta para a realização da prática, agilidade, coordenaçãomotora e também equilíbrio.",
    weeklyGoal: "1 hora",
    achievements: 4,
  },
  chess: {
    alias: "Xadrez",
    color: "green",
    image: Chess,
    instructions: "É um jogo de mesa onde irá ter 2 jogadores, com 2 cores de peças, geralmente branco e preto, cada jogador pode fazer um lance por vez e tem...",
    requirements: "Tabuleiro com todas as peças, um local para apoiar o tabuleiro e dois jogadores.",
    weeklyGoal: "10 jogos",
    achievements: 8,
  },
  hide_and_seek: {
    alias: "Pique esconde",
    color: "yellow",
    image: Hide,
    instructions: "é uma brincadeira onde uma criança irá fazer uma contagem em voz alta, virada para a parede sem ver o resto das crianças e tentaráacha-las, se achar alguma crianças.",
    requirements: "Um espaço para a realização da atividade e mais de uma criança.",
    weeklyGoal: "1 hora",
    achievements: 4,
  },
};

export default ACTIVITY_METADATA
