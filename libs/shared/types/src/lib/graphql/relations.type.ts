import { ObjectType, Field } from "type-graphql";
import { User } from "./user.type";
import { Service } from "./service.type";
import { Pole } from "./pole.type";
import { UserRef, ServiceRef, PoleRef } from "./refs.type";

@ObjectType("GraphQLUserWithRelations")
export class UserWithRelations extends User {
  @Field(() => ServiceRef, { nullable: true })
  service?: ServiceRef;

  @Field(() => UserRef, { nullable: true })
  supervisor?: UserRef;
}

@ObjectType("GraphQLServiceWithRelations")
export class ServiceWithRelations extends Service {
  @Field(() => PoleRef)
  pole!: PoleRef;

  @Field(() => UserRef, { nullable: true })
  admin?: UserRef;

  @Field(() => [UserRef])
  users!: UserRef[];
}

@ObjectType("GraphQLPoleWithRelations")
export class PoleWithRelations extends Pole {
  @Field(() => [ServiceRef])
  services!: ServiceRef[];
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
  recentUsers!: UserRef[];
}
