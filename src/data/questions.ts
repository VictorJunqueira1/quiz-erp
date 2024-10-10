import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: "Como o sistema ERP pode ajudar a gerenciar o nível de estoque?",
        options: [
            'Emitindo relatórios semanais de vendas',
            'Alocando funcionários para a gestão manual do estoque',
            'Controlando o nível de estoque e alertando sobre a necessidade de reabastecimento',
            'Bloqueando pedidos de produtos sem estoque'
        ],
        answer: 2
    },
    {
        question: "O que o sistema ERP permite em relação ao rastreamento de entregas?",
        options: [
            'Estimar os prazos de entrega com base em médias históricas',
            'Rastrear o status das entregas em tempo real e otimizar rotas',
            'Atribuir manualmente entregas para cada motorista',
            'Definir horários fixos para entregas sem possibilidade de ajustes'
        ],
        answer: 1
    },
    {
        question: "Como o ERP pode ajudar no gerenciamento de projetos?",
        options: [
            'Enviar lembretes diários para toda a equipe',
            'Acompanhar apenas o início e o término dos projetos',
            'Atribuir tarefas e monitorar prazos e progresso de projetos',
            'Alocar automaticamente recursos humanos'
        ],
        answer: 2
    },
    {
        question: "Como o ERP facilita o controle financeiro de uma empresa?",
        options: [
            'Gerando faturas automaticamente para todos os clientes',
            'Controlando o fluxo de caixa, contas a pagar e a receber',
            'Monitorando apenas os custos de produção',
            'Definindo limites de gastos para os funcionários'
        ],
        answer: 1
    },
    {
        question: "Como o ERP pode integrar o departamento de estoque ao financeiro?",
        options: [
            'Atualizando os custos de produtos automaticamente com base nas vendas e compras',
            'Bloqueando o acesso dos funcionários de um departamento ao outro',
            'Enviando lembretes de pagamento para fornecedores de produtos em estoque',
            'Gerando relatórios anuais sobre o inventário e finanças'
        ],
        answer: 0
    }
];