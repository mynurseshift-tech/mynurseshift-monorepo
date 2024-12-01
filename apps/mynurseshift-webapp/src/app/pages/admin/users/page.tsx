import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from '@mynurseshift/ui';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { toast } from 'sonner';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      firstName
      lastName
      role
      status
      createdAt
    }
  }
`;

const APPROVE_USER = gql`
  mutation ApproveUser($userId: ID!, $status: UserStatus!) {
    approveUser(userId: $userId, status: $status) {
      id
      status
    }
  }
`;

export const AdminUsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, loading, error } = useQuery(GET_USERS);
  const [approveUser, { loading: approveLoading }] = useMutation(APPROVE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleApprove = async (userId: string, status: 'ACTIVE' | 'REJECTED') => {
    try {
      await approveUser({
        variables: {
          userId,
          status,
        },
      });
      toast.success(
        status === 'ACTIVE'
          ? 'Utilisateur approuvé avec succès'
          : 'Utilisateur rejeté avec succès'
      );
    } catch (error) {
      toast.error("Erreur lors de l'approbation de l'utilisateur");
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      PENDING: { variant: 'secondary', label: 'En attente' },
      ACTIVE: { variant: 'success', label: 'Actif' },
      REJECTED: { variant: 'destructive', label: 'Rejeté' },
      INACTIVE: { variant: 'outline', label: 'Inactif' },
    };

    const { variant, label } = variants[status] || variants.INACTIVE;
    return <Badge variant={variant}>{label}</Badge>;
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Gestion des utilisateurs</CardTitle>
          <CardDescription>
            Approuvez ou rejetez les demandes d'inscription des utilisateurs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date d'inscription</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="space-x-2">
                    {user.status === 'PENDING' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => handleApprove(user.id, 'ACTIVE')}
                          isLoading={approveLoading}
                        >
                          Approuver
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleApprove(user.id, 'REJECTED')}
                          isLoading={approveLoading}
                        >
                          Rejeter
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
