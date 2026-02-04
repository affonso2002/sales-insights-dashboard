import { Header } from '@/components/dashboard/Header';
import { KPICard } from '@/components/dashboard/KPICard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { SubscribersChart } from '@/components/dashboard/SubscribersChart';
import { SubscriptionTypeChart } from '@/components/dashboard/SubscriptionTypeChart';
import { RenewalGauge } from '@/components/dashboard/RenewalGauge';
import { SubscribersTable } from '@/components/dashboard/SubscribersTable';
import { 
  subscribers, 
  calculateTotalRevenue, 
  getAverageTicket, 
  getTotalCoupons 
} from '@/data/subscriptions';
import { Users, DollarSign, Ticket, TrendingUp } from 'lucide-react';

const Index = () => {
  const totalRevenue = calculateTotalRevenue();
  const averageTicket = getAverageTicket();
  const totalCoupons = getTotalCoupons();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard 
            title="Total de Assinantes"
            value={subscribers.length}
            icon={Users}
            subtitle="Usuários ativos"
          />
          <KPICard 
            title="Receita Total"
            value={`R$ ${totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            icon={DollarSign}
            subtitle="Faturamento acumulado"
          />
          <KPICard 
            title="Ticket Médio"
            value={`R$ ${averageTicket.toFixed(2)}`}
            icon={TrendingUp}
            subtitle="Por assinante"
          />
          <KPICard 
            title="Total em Cupons"
            value={`R$ ${totalCoupons.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            icon={Ticket}
            subtitle="Descontos aplicados"
          />
        </section>

        {/* Charts Row 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SalesChart />
          <SubscribersChart />
        </section>

        {/* Charts Row 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SubscriptionTypeChart />
          <RenewalGauge />
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold font-display text-foreground mb-6">
              Season Passes
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-foreground font-medium">EA Play</span>
                </div>
                <span className="text-foreground font-bold">
                  {subscribers.filter(s => s.eaPlaySeasonPass).length} assinantes
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-foreground font-medium">Minecraft</span>
                </div>
                <span className="text-foreground font-bold">
                  {subscribers.filter(s => s.minecraftSeasonPass).length} assinantes
                </span>
              </div>
              <div className="mt-6 p-4 gradient-xbox rounded-lg">
                <p className="text-sm text-primary-foreground/80">Total Season Passes</p>
                <p className="text-2xl font-bold font-display text-primary-foreground">
                  R$ {(subscribers.reduce((sum, s) => sum + (s.eaPlaySeasonPass ? s.eaPlayPrice : 0) + (s.minecraftSeasonPass ? s.minecraftPrice : 0), 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribers Table */}
        <section className="mb-8">
          <SubscribersTable />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Dashboard Xbox Game Pass Subscriptions • Dados de Janeiro a Dezembro 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
