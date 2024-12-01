export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'NURSE' | 'DOCTOR' | 'ADMIN' | 'SUPER_ADMIN';
  status: 'PENDING' | 'ACTIVE' | 'REJECTED';
  createdAt: string;
  service?: Service;
}

export interface Pole {
  id: string;
  name: string;
  description?: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  pole: Pole;
  users: User[];
}
