import { Gamepad2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="glass border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="gradient-xbox rounded-xl p-2.5 glow-xbox">
              <Gamepad2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-foreground tracking-tight">
                Xbox Game Pass
              </h1>
              <p className="text-sm text-muted-foreground">
                Dashboard de Vendas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Última atualização:
            </span>
            <span className="text-sm font-medium text-foreground">
              {new Date().toLocaleDateString('pt-BR', { 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
