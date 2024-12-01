import { data } from './data';

export function Overview() {
  const data = [
    { day: 'Lun', value: 12 },
    { day: 'Mar', value: 15 },
    { day: 'Mer', value: 8 },
    { day: 'Jeu', value: 22 },
    { day: 'Ven', value: 18 },
    { day: 'Sam', value: 25 },
    { day: 'Dim', value: 20 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-7 gap-2">
        {data.map((item) => (
          <div key={item.day} className="space-y-2">
            <div className="h-32 bg-muted rounded-t-md relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-primary transition-all duration-300"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                }}
              />
            </div>
            <div className="text-center text-sm text-muted-foreground">
              {item.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
