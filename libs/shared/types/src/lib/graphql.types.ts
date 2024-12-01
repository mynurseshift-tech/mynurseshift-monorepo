import { ObjectType, Field, ID, registerEnumType } from "type-graphql";
import { UserRole, UserStatus } from "./user.types";
import { Type } from "class-transformer";

registerEnumType(UserRole, {
  name: "UserRole",
  description: "The role of the user",
});

registerEnumType(UserStatus, {
  name: "UserStatus",
  description: "The status of the user",
});

// Forward references for circular dependencies
@ObjectType("GraphQLUserRef")
export class UserRef {
  @Field(() => ID)
  id!: number;
}

@ObjectType("GraphQLServiceRef")
export class ServiceRef {
  @Field(() => ID)
  id!: number;
}

@ObjectType("GraphQLPoleRef")
export class PoleRef {
  @Field(() => ID)
  id!: number;
}

@ObjectType("GraphQLUser")
export class User {
  @Field(() => ID)
  id!: number;

  @Field()
  email!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => UserRole)
  role!: UserRole;

  @Field(() => UserStatus)
  status!: UserStatus;

  @Field({ nullable: true })
  position?: string;

  @Field(() => String, { nullable: true })
  workingHours?: Record<string, any>;

  @Field(() => ID, { nullable: true })
  serviceId?: number;

  @Field(() => ServiceRef, { nullable: true })
  @Type(() => ServiceRef)
  service?: ServiceRef;

  @Field(() => ID, { nullable: true })
  supervisorId?: number;

  @Field(() => UserRef, { nullable: true })
  @Type(() => UserRef)
  supervisor?: UserRef;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@ObjectType("GraphQLAuthPayload")
export class AuthPayload {
  @Field()
  token!: string;

  @Field(() => User)
  @Type(() => User)
  user!: User;
}

@ObjectType("GraphQLPole")
export class Pole {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field(() => [ServiceRef])
  @Type(() => ServiceRef)
  services!: ServiceRef[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@ObjectType("GraphQLService")
export class Service {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field(() => ID)
  poleId!: number;

  @Field(() => PoleRef)
  @Type(() => PoleRef)
  pole!: PoleRef;

  @Field(() => UserRef, { nullable: true })
  @Type(() => UserRef)
  admin?: UserRef;

  @Field(() => [UserRef])
  @Type(() => UserRef)
  users!: UserRef[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@ObjectType("GraphQLDashboardStats")
export class DashboardStats {
  @Field()
  totalUsers!: number;

  @Field()
  totalPoles!: number;

  @Field()
  totalServices!: number;

  @Field()
  pendingValidations!: number;

  @Field(() => [UserRef])
  @Type(() => UserRef)
  recentUsers!: UserRef[];
}
