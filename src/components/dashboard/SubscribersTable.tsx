import { useState } from 'react';
import { subscribers, Subscriber } from '@/data/subscriptions';
import { ChevronLeft, ChevronRight, Check, X, Download } from 'lucide-react';
import * as XLSX from 'xlsx';

export const SubscribersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const totalPages = Math.ceil(subscribers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSubscribers = subscribers.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

  const exportToExcel = () => {
    const exportData = subscribers.map(s => ({
      'ID': s.id,
      'Nome': s.name,
      'Plano': s.plan,
      'Data Início': formatDate(s.startDate),
      'Tipo': s.subscriptionType === 'Monthly' ? 'Mensal' : s.subscriptionType === 'Quarterly' ? 'Trimestral' : 'Anual',
      'Renovação Automática': s.autoRenewal ? 'Sim' : 'Não',
      'Valor Assinatura': s.subscriptionPrice,
      'Cupom': s.couponValue,
      'EA Play': s.eaPlaySeasonPass ? 'Sim' : 'Não',
      'Valor EA Play': s.eaPlayPrice,
      'Minecraft': s.minecraftSeasonPass ? 'Sim' : 'Não',
      'Valor Minecraft': s.minecraftPrice,
      'Total': s.totalValue
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Assinantes');
    XLSX.writeFile(wb, 'xbox_gamepass_assinantes.xlsx');
  };

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold font-display text-foreground">
          Lista de Assinantes
        </h3>
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-xbox text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Download className="h-4 w-4" />
          Exportar Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Nome</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Plano</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Início</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tipo</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Renovação</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {currentSubscribers.map((subscriber) => (
              <tr 
                key={subscriber.id} 
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-foreground font-mono">{subscriber.id}</td>
                <td className="py-3 px-4 text-sm text-foreground">{subscriber.name}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium gradient-xbox text-primary-foreground">
                    {subscriber.plan}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{formatDate(subscriber.startDate)}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    subscriber.subscriptionType === 'Annual' 
                      ? 'bg-xbox-green/20 text-xbox-green' 
                      : subscriber.subscriptionType === 'Quarterly'
                      ? 'bg-accent/20 text-accent'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {subscriber.subscriptionType === 'Monthly' ? 'Mensal' : 
                     subscriber.subscriptionType === 'Quarterly' ? 'Trimestral' : 'Anual'}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {subscriber.autoRenewal ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )}
                </td>
                <td className="py-3 px-4 text-sm text-foreground text-right font-medium">
                  {formatCurrency(subscriber.totalValue)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, subscribers.length)} de {subscribers.length} assinantes
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <span className="text-sm text-foreground px-3">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};
