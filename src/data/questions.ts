import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: "Como o sistema deve tratar a movimentação de estoque quando o saldo de um produto é zero?",
        options: [
            'Bloquear a retirada de produtos',
            'Permitir a retirada de produtos para evitar vendas perdidas',
            'Alertar o usuário, mas permitir a movimentação',
            'Cancelar automaticamente a operação'
        ],
        answer: 1
    },
    {
        question: "Qual das opções representa uma transação do tipo 'FI' no módulo de Receitas e Despesas?",
        options: [
            'Receita (Income)',
            'Receita Futura (Future Income)',
            'Despesa (Expense)',
            'Despesa Futura (Future Expense)'
        ],
        answer: 1
    },
    {
        question: "Qual é o principal objetivo do ajuste de estoque no ERP?",
        options: [
            'Garantir que as entradas e saídas estejam sempre equilibradas',
            'Permitir a movimentação de produtos sem acompanhamento de saldo',
            'Corrigir discrepâncias entre o saldo físico e o saldo registrado no sistema',
            'Impedir que produtos sem saída sejam retirados do estoque'
        ],
        answer: 2
    },
    {
        question: "O que o módulo de Acompanhamento de Entregas permite que o usuário faça?",
        options: [
            'Agendar entregas automaticamente',
            'Verificar o panorama geral do veículo e do motorista em tempo real',
            'Listar entregas baseadas em filtros como "status"',
            'Criar um relatório automático de entregas futuras'
        ],
        answer: 2
    },
    {
        question: "Qual funcionalidade o módulo de Tarefas oferece para gestão de prazos críticos?",
        options: [
            'Notificar automaticamente os responsáveis pelo projeto',
            'Filtrar as tarefas com base no vencimento e data atual',
            'Cancelar automaticamente as tarefas atrasadas',
            'Reatribuir tarefas com base no prazo'
        ],
        answer: 1
    }
];