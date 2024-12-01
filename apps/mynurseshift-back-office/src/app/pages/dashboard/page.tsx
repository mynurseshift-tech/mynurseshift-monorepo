import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@mynurseshift/ui';
import { Users, Building2, Building, Clock, Activity, ArrowRight, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Overview } from './components/overview';
import { RecentUsers } from './components/recent-users';

export const DashboardPage = () => {
  const navigate = useNavigate();

  // Ces données viendront de votre API GraphQL
  const stats = [
    {
      icon: Users,
      label: 'Utilisateurs Total',
      value: '245',
      description: '+12% par rapport au mois dernier',
      path: '/users',
    },
    {
      icon: Building2,
      label: 'Pôles',
      value: '8',
      description: '2 nouveaux pôles ce mois',
      path: '/poles',
    },
    {
      icon: Building,
      label: 'Services',
      value: '32',
      description: '4 nouveaux services ce mois',
      path: '/services',
    },
    {
      icon: Clock,
      label: 'En attente',
      value: '12',
      description: 'Demandes à traiter',
      path: '/users/pending',
      highlight: true
    },
  ];

  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className={`cursor-pointer hover:shadow-lg transition-all`}
                  onClick={() => navigate(stat.path)}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.label}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu</CardTitle>
                <CardDescription>
                  Nombre d'inscriptions sur les 30 derniers jours
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Utilisateurs Récents</CardTitle>
                <CardDescription>
                  Les 5 dernières inscriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentUsers />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
