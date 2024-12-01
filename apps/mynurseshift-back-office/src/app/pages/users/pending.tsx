import { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell,
  Badge,
  Button
} from '@mynurseshift/ui';
import { Check, X } from 'lucide-react';
import { User } from '../../types';

export const PendingUsersPage = () => {
  // Ces données viendront de votre API GraphQL
  const [users] = useState<User[]>([
    {
      id: '1',
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@chu-nantes.fr',
      role: 'NURSE',
      status: 'PENDING',
      createdAt: '2024-01-15T10:00:00Z',
      service: {
        id: '1',
        name: 'Cardiologie',
        pole: {
          id: '1',
          name: 'Pôle Cardio',
          services: []
        },
        users: []
      }
    },
    // Ajoutez plus d'utilisateurs de test ici
  ]);

  const handleApprove = (userId: string) => {
    // Appel à votre mutation GraphQL pour approuver l'utilisateur
    console.log('Approve user:', userId);
  };

  const handleReject = (userId: string) => {
    // Appel à votre mutation GraphQL pour rejeter l'utilisateur
    console.log('Reject user:', userId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Utilisateurs en attente</h1>
        <p className="text-gray-400 mt-2">Validez ou rejetez les demandes d'inscription</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rôle</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date d'inscription</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === 'NURSE' ? 'default' : 'secondary'}>
                  {user.role === 'NURSE' ? 'Infirmier' : 'Médecin'}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{user.service?.name}</span>
                  <span className="text-sm text-gray-500">{user.service?.pole.name}</span>
                </div>
              </TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleApprove(user.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleReject(user.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
