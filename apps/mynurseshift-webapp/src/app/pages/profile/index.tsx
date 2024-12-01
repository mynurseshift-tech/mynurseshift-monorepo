import { useAuth } from '@mynurseshift/core';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Label,
} from '@mynurseshift/ui';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
}

export const ProfilePage = () => {
  const { user } = useAuth();
  const form = useForm<ProfileFormData>({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      specialization: user?.specialization || '',
      experience: user?.experience || '',
    },
  });

  const handleSubmit = async (data: ProfileFormData) => {
    try {
      // TODO: Implement profile update
      toast.success('Profil mis à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour du profil');
    }
  };

  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <Form form={form} onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Mon Profil</CardTitle>
              <CardDescription>
                Gérez vos informations personnelles et professionnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    {...form.register('firstName')}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    {...form.register('lastName')}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register('phone')}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Spécialisation</Label>
                <Input
                  id="specialization"
                  {...form.register('specialization')}
                  placeholder="Ex: Infirmier en réanimation"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Années d'expérience</Label>
                <Input
                  id="experience"
                  type="number"
                  {...form.register('experience')}
                  placeholder="Ex: 5"
                />
              </div>

              <Button type="submit" className="w-full">
                Mettre à jour le profil
              </Button>
            </CardContent>
          </Card>
        </Form>
      </div>
    </div>
  );
};
