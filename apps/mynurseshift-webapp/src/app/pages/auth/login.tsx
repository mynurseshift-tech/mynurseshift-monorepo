import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Form,
} from '@mynurseshift/ui';
import { toast } from 'sonner';
import { Icons } from '@mynurseshift/ui';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginFormData>();

  const handleSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      toast.success('Connexion réussie');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Identifiants invalides. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r bg-primary">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="mr-2 h-6 w-6" />
          <span className="text-white">MyNurseShift</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Cette plateforme a révolutionné la gestion de nos plannings. Elle
              nous permet de nous concentrer sur l'essentiel : nos patients."
            </p>
            <footer className="text-sm text-white/80">Carla Gomes, Infirmière</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-8 w-8" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Bienvenue
            </h1>
            <p className="text-sm text-muted-foreground">
              Connectez-vous pour accéder à votre espace
            </p>
          </div>

          <Form form={form} onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Connexion</CardTitle>
                <CardDescription>
                  Entrez vos identifiants pour vous connecter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="nom@exemple.fr"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link
                      to="/auth/forgot-password"
                      className="text-sm text-primary hover:text-primary/90"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...form.register('password')}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Se connecter
                </Button>
              </CardFooter>
            </Card>
          </Form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              to="/auth/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Pas encore de compte ? Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
