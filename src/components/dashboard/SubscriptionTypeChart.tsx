import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { getSubscriptionTypeDistribution } from '@/data/subscriptions';

export const SubscriptionTypeChart = () => {
  const distribution = getSubscriptionTypeDistribution();
  
  const data = [
    { name: 'Mensal', value: distribution.Monthly, color: 'hsl(142, 71%, 45%)' },
    { name: 'Trimestral', value: distribution.Quarterly, color: 'hsl(162, 79%, 53%)' },
    { name: 'Anual', value: distribution.Annual, color: 'hsl(103, 60%, 53%)' },
  ];

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold font-display text-foreground mb-6">
        Tipo de Assinatura
      </h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(220, 20%, 10%)',
                border: '1px solid hsl(220, 15%, 25%)',
                borderRadius: '8px',
                color: 'hsl(0, 0%, 98%)',
              }}
              formatter={(value: number) => [value, 'Assinantes']}
            />
            <Legend 
              verticalAlign="bottom"
              formatter={(value) => <span style={{ color: 'hsl(220, 10%, 60%)' }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
