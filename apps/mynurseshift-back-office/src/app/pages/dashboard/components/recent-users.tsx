import { Avatar, AvatarFallback } from '@mynurseshift/ui';

export function RecentUsers() {
  const recentUsers = [
    {
      name: 'Marie Dubois',
      email: 'marie.d@chu-nantes.fr',
      role: 'Infirmière',
      service: 'Cardiologie',
    },
    {
      name: 'Pierre Martin',
      email: 'p.martin@chu-nantes.fr',
      role: 'Médecin',
      service: 'Urgences',
    },
    {
      name: 'Sophie Bernard',
      email: 's.bernard@chu-nantes.fr',
      role: 'Infirmière',
      service: 'Pédiatrie',
    },
    {
      name: 'Lucas Petit',
      email: 'l.petit@chu-nantes.fr',
      role: 'Médecin',
      service: 'Neurologie',
    },
    {
      name: 'Emma Roux',
      email: 'e.roux@chu-nantes.fr',
      role: 'Infirmière',
      service: 'Réanimation',
    },
  ];

  return (
    <div className="space-y-8">
      {recentUsers.map((user) => (
        <div key={user.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <p className="text-sm text-muted-foreground">{user.service}</p>
            <p className="text-xs text-muted-foreground">{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
