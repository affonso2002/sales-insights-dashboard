export interface Subscriber {
  id: number;
  name: string;
  plan: string;
  startDate: string;
  autoRenewal: boolean;
  subscriptionPrice: number;
  subscriptionType: 'Monthly' | 'Quarterly' | 'Annual';
  eaPlaySeasonPass: boolean;
  eaPlayPrice: number;
  minecraftSeasonPass: boolean;
  minecraftPrice: number;
  couponValue: number;
  totalValue: number;
}

export const subscribers: Subscriber[] = [
  { id: 3231, name: "João Silva", plan: "Ultimate", startDate: "2024-01-01", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3234, name: "Ana Souza", plan: "Ultimate", startDate: "2024-02-20", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3237, name: "Camila Ribeiro", plan: "Ultimate", startDate: "2024-03-03", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 10, totalValue: 55 },
  { id: 3239, name: "Sofia Almeida", plan: "Ultimate", startDate: "2024-03-05", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3242, name: "Marco Túlio", plan: "Ultimate", startDate: "2024-03-08", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3245, name: "Fernanda Lima", plan: "Ultimate", startDate: "2024-03-11", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 8, totalValue: 57 },
  { id: 3248, name: "Cesar Oliveira", plan: "Ultimate", startDate: "2024-03-14", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3251, name: "Gabriela Santos", plan: "Ultimate", startDate: "2024-03-17", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3254, name: "Joaquim Barbosa", plan: "Ultimate", startDate: "2024-03-20", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3257, name: "Nicole Costa", plan: "Ultimate", startDate: "2024-03-23", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3260, name: "Raquel Alves", plan: "Ultimate", startDate: "2024-03-26", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3263, name: "Vinicius Lima", plan: "Ultimate", startDate: "2024-03-29", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3267, name: "Bruno Cavalheiro", plan: "Ultimate", startDate: "2024-04-02", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3270, name: "Eunice Lima", plan: "Ultimate", startDate: "2024-04-05", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3273, name: "Hélio Castro", plan: "Ultimate", startDate: "2024-04-08", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3276, name: "Kléber Oliveira", plan: "Ultimate", startDate: "2024-04-11", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3279, name: "Nilo Peçanha", plan: "Ultimate", startDate: "2024-04-14", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3282, name: "Quirino Gonçalves", plan: "Ultimate", startDate: "2024-04-17", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3285, name: "Tiago Ramos", plan: "Ultimate", startDate: "2024-04-20", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3288, name: "William Siqueira", plan: "Ultimate", startDate: "2024-04-23", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3291, name: "Zacarias Alves", plan: "Ultimate", startDate: "2024-04-26", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3294, name: "Carla Bruni", plan: "Ultimate", startDate: "2024-04-29", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3297, name: "Fábio Nobre", plan: "Ultimate", startDate: "2024-05-02", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3300, name: "Ivan Carvalho", plan: "Ultimate", startDate: "2024-05-05", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3303, name: "Lucas Mendes", plan: "Ultimate", startDate: "2024-05-08", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3306, name: "Otávio Barros", plan: "Ultimate", startDate: "2024-05-11", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3309, name: "Raquel Novaes", plan: "Ultimate", startDate: "2024-05-14", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3312, name: "Ulysses Guimarães", plan: "Ultimate", startDate: "2024-05-17", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3315, name: "Ximena Rocha", plan: "Ultimate", startDate: "2024-05-20", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3318, name: "Alan Teixeira", plan: "Ultimate", startDate: "2024-05-23", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3321, name: "Daniela Moura", plan: "Ultimate", startDate: "2024-05-26", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3324, name: "Geraldo Ribeiro", plan: "Ultimate", startDate: "2024-05-29", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3327, name: "João Pedro Almeida", plan: "Ultimate", startDate: "2024-06-01", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3330, name: "Marcelo Gouveia", plan: "Ultimate", startDate: "2024-06-04", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3333, name: "Patrícia Alves", plan: "Ultimate", startDate: "2024-06-07", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3337, name: "Ulisses Tavares", plan: "Ultimate", startDate: "2024-06-11", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3340, name: "Xavier Nascimento", plan: "Ultimate", startDate: "2024-06-14", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3343, name: "Amanda Lopes", plan: "Ultimate", startDate: "2024-06-17", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3346, name: "Diogo Souza", plan: "Ultimate", startDate: "2024-06-20", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3349, name: "Geraldo Ribeiro", plan: "Ultimate", startDate: "2024-06-23", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3352, name: "João Marcelo", plan: "Ultimate", startDate: "2024-06-26", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3355, name: "Nadia Costa", plan: "Ultimate", startDate: "2024-06-29", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3358, name: "Quênia Barros", plan: "Ultimate", startDate: "2024-07-02", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3361, name: "Tiago Mendes", plan: "Ultimate", startDate: "2024-07-05", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3364, name: "Waldir Junior", plan: "Ultimate", startDate: "2024-07-08", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3367, name: "Zacarias Nunes", plan: "Ultimate", startDate: "2024-07-11", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3370, name: "Carlos Eduardo", plan: "Ultimate", startDate: "2024-07-14", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3373, name: "Fabiano Gomes", plan: "Ultimate", startDate: "2024-07-17", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3376, name: "Igor Martins", plan: "Ultimate", startDate: "2024-07-20", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3379, name: "Luciana Santos", plan: "Ultimate", startDate: "2024-07-23", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3382, name: "Oscar Ribeiro", plan: "Ultimate", startDate: "2024-07-26", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3385, name: "Renata Machado", plan: "Ultimate", startDate: "2024-07-29", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3388, name: "Ulysses Pereira", plan: "Ultimate", startDate: "2024-08-01", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3391, name: "Xuxa Meneghel", plan: "Ultimate", startDate: "2024-08-04", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3394, name: "André Lima", plan: "Ultimate", startDate: "2024-08-07", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3397, name: "Daniela Moura", plan: "Ultimate", startDate: "2024-08-10", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3400, name: "Guilherme Souza", plan: "Ultimate", startDate: "2024-08-13", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3403, name: "João Carvalho", plan: "Ultimate", startDate: "2024-08-16", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3407, name: "Nina Pacheco", plan: "Ultimate", startDate: "2024-08-20", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3410, name: "Raquel Domingos", plan: "Ultimate", startDate: "2024-08-23", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3413, name: "Ulysses Farias", plan: "Ultimate", startDate: "2024-08-26", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3416, name: "Ximena Barros", plan: "Ultimate", startDate: "2024-08-29", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3419, name: "André Lopes", plan: "Ultimate", startDate: "2024-09-01", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3422, name: "Daniela Araújo", plan: "Ultimate", startDate: "2024-09-04", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3425, name: "Gabriel Teixeira", plan: "Ultimate", startDate: "2024-09-07", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3428, name: "Joana Silveira", plan: "Ultimate", startDate: "2024-09-10", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3431, name: "Nicolas Borges", plan: "Ultimate", startDate: "2024-09-13", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3434, name: "Raquel Andrade", plan: "Ultimate", startDate: "2024-09-16", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3437, name: "Ursula Monteiro", plan: "Ultimate", startDate: "2024-09-19", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3440, name: "Xavier Almeida", plan: "Ultimate", startDate: "2024-09-22", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3443, name: "Amanda Costa", plan: "Ultimate", startDate: "2024-09-25", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3446, name: "Diogo Martins", plan: "Ultimate", startDate: "2024-09-28", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3449, name: "Gabriel Santos", plan: "Ultimate", startDate: "2024-10-01", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3452, name: "Joana Silveira", plan: "Ultimate", startDate: "2024-10-04", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3455, name: "Marcos Vinícius", plan: "Ultimate", startDate: "2024-10-07", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3458, name: "Patrícia Leite", plan: "Ultimate", startDate: "2024-10-10", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3461, name: "Sandra Gouveia", plan: "Ultimate", startDate: "2024-10-13", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3464, name: "Vanessa Andrade", plan: "Ultimate", startDate: "2024-10-16", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3467, name: "Yasmin Figueira", plan: "Ultimate", startDate: "2024-10-19", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3470, name: "Bruno Santos", plan: "Ultimate", startDate: "2024-10-22", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3473, name: "Elisa Neves", plan: "Ultimate", startDate: "2024-10-25", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3476, name: "Hélio Costa", plan: "Ultimate", startDate: "2024-10-28", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3479, name: "Klara Silva", plan: "Ultimate", startDate: "2024-10-31", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3482, name: "Natália Soares", plan: "Ultimate", startDate: "2024-11-03", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3485, name: "Quirino Neto", plan: "Ultimate", startDate: "2024-11-06", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3487, name: "Sandro Almeida", plan: "Ultimate", startDate: "2024-11-08", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3490, name: "Valéria Lima", plan: "Ultimate", startDate: "2024-11-11", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3493, name: "Ygor Farias", plan: "Ultimate", startDate: "2024-11-14", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3496, name: "Bruno Costa", plan: "Ultimate", startDate: "2024-11-17", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3499, name: "Elisa Correia", plan: "Ultimate", startDate: "2024-11-20", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3502, name: "Henrique Gonçalves", plan: "Ultimate", startDate: "2024-11-23", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3505, name: "Klara Fonseca", plan: "Ultimate", startDate: "2024-11-26", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3508, name: "Natália Castro", plan: "Ultimate", startDate: "2024-11-29", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
  { id: 3511, name: "Quentin Nogueira", plan: "Ultimate", startDate: "2024-12-02", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 15, totalValue: 50 },
  { id: 3514, name: "Tânia Machado", plan: "Ultimate", startDate: "2024-12-05", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Quarterly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 7, totalValue: 58 },
  { id: 3517, name: "William Carvalho", plan: "Ultimate", startDate: "2024-12-08", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 20, totalValue: 45 },
  { id: 3520, name: "Zacarias Duarte", plan: "Ultimate", startDate: "2024-12-11", autoRenewal: true, subscriptionPrice: 15, subscriptionType: "Annual", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 5, totalValue: 60 },
  { id: 3523, name: "Carla Siqueira", plan: "Ultimate", startDate: "2024-12-14", autoRenewal: false, subscriptionPrice: 15, subscriptionType: "Monthly", eaPlaySeasonPass: true, eaPlayPrice: 30, minecraftSeasonPass: true, minecraftPrice: 20, couponValue: 3, totalValue: 62 },
];

// Helper functions for dashboard calculations
export const calculateTotalRevenue = () => {
  return subscribers.reduce((sum, sub) => sum + sub.totalValue, 0);
};

export const calculateAutoRenewalRate = () => {
  const autoRenewalCount = subscribers.filter(sub => sub.autoRenewal).length;
  return (autoRenewalCount / subscribers.length) * 100;
};

export const getSubscriptionTypeDistribution = () => {
  const distribution = { Monthly: 0, Quarterly: 0, Annual: 0 };
  subscribers.forEach(sub => {
    distribution[sub.subscriptionType]++;
  });
  return distribution;
};

export const getMonthlySales = () => {
  const monthlyData: { [key: string]: number } = {};
  
  subscribers.forEach(sub => {
    const date = new Date(sub.startDate);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyData[monthKey] = (monthlyData[monthKey] || 0) + sub.totalValue;
  });
  
  return Object.entries(monthlyData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, total]) => ({
      month: new Date(month + '-01').toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }),
      total,
    }));
};

export const getMonthlySubscribers = () => {
  const monthlyData: { [key: string]: number } = {};
  
  subscribers.forEach(sub => {
    const date = new Date(sub.startDate);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
  });
  
  return Object.entries(monthlyData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, count]) => ({
      month: new Date(month + '-01').toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }),
      count,
    }));
};

export const getAverageTicket = () => {
  return calculateTotalRevenue() / subscribers.length;
};

export const getTotalCoupons = () => {
  return subscribers.reduce((sum, sub) => sum + sub.couponValue, 0);
};
