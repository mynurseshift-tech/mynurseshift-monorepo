// Export base types
export * from './lib/user.types';
export * from './lib/service.types';
export * from './lib/pole.types';
export * from './lib/enums';

// Export GraphQL types
export { 
  User as GraphQLUser,
  AuthPayload as GraphQLAuthPayload,
  Service as GraphQLService,
  Pole as GraphQLPole,
  DashboardStats as GraphQLDashboardStats
} from './lib/graphql/index';

// Export GraphQL inputs
export {
  CreateUserInput,
  UpdateUserInput,
  LoginInput,
  ResetPasswordInput,
} from './lib/user.types';

export {
  CreateServiceInput,
  UpdateServiceInput,
} from './lib/service.types';

export {
  CreatePoleInput,
  UpdatePoleInput,
} from './lib/pole.types';

// Export validation schemas
export {
  userSchema,
  createUserSchema,
  updateUserSchema,
  loginSchema,
  resetPasswordSchema,
} from './lib/user.types';

export {
  serviceSchema,
  createServiceSchema,
  updateServiceSchema,
} from './lib/service.types';

export {
  poleSchema,
  createPoleSchema,
  updatePoleSchema
} from './lib/pole.types';
