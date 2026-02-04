import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getMonthlySubscribers } from '@/data/subscriptions';

export const SubscribersChart = () => {
  const data = getMonthlySubscribers();

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold font-display text-foreground mb-6">
        Novos Assinantes por Mês
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(220, 10%, 60%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(220, 10%, 60%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(220, 20%, 10%)',
                border: '1px solid hsl(220, 15%, 25%)',
                borderRadius: '8px',
                color: 'hsl(0, 0%, 98%)',
              }}
              formatter={(value: number) => [value, 'Assinantes']}
            />
            <Bar 
              dataKey="count" 
              fill="hsl(162, 79%, 53%)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
