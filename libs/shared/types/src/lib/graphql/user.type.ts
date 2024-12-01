import { ObjectType, Field, ID } from "type-graphql";
import { BaseType } from "../base.types";
import { UserRole, UserStatus } from "../user.types";

@ObjectType("GraphQLUser")
export class User extends BaseType {
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

  @Field(() => ID, { nullable: true })
  supervisorId?: number;
}

@ObjectType("GraphQLAuthPayload")
export class AuthPayload {
  @Field()
  token!: string;

  @Field(() => User)
  user!: User;
}
