import { calculateAutoRenewalRate } from '@/data/subscriptions';

export const RenewalGauge = () => {
  const rate = calculateAutoRenewalRate();
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (rate / 100) * circumference;

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold font-display text-foreground mb-6">
        Taxa de Auto-Renovação
      </h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg width="180" height="180" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="hsl(220, 15%, 20%)"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="url(#gaugeGradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(142, 71%, 45%)" />
                <stop offset="100%" stopColor="hsl(162, 79%, 53%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-display text-foreground">
              {rate.toFixed(1)}%
            </span>
            <span className="text-sm text-muted-foreground">Renovação</span>
          </div>
        </div>
      </div>
    </div>
  );
};
