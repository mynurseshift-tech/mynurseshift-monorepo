import { InputType, Field, ID } from "type-graphql";
import { UserRole } from "./user.types";

@InputType()
export class CreateUserInput {
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

  @Field({ nullable: true })
  position?: string;

  @Field(() => String, { nullable: true })
  workingHours?: Record<string, any>;

  @Field(() => ID, { nullable: true })
  serviceId?: number;

  @Field(() => ID, { nullable: true })
  supervisorId?: number;

  @Field()
  password!: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => UserRole, { nullable: true })
  role?: UserRole;

  @Field({ nullable: true })
  position?: string;

  @Field(() => String, { nullable: true })
  workingHours?: Record<string, any>;

  @Field(() => ID, { nullable: true })
  serviceId?: number;

  @Field(() => ID, { nullable: true })
  supervisorId?: number;
}

@InputType()
export class LoginInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class ResetPasswordInput {
  @Field()
  email!: string;

  @Field()
  newPassword!: string;
}

@InputType()
export class CreateServiceInput {
  @Field()
  name!: string;

  @Field(() => ID)
  poleId!: string;
}

@InputType()
export class UpdateServiceInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => ID, { nullable: true })
  poleId?: string;
}

@InputType()
export class CreatePoleInput {
  @Field()
  name!: string;
}

@InputType()
export class UpdatePoleInput {
  @Field({ nullable: true })
  name?: string;
}
