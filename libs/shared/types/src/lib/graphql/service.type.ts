import { ObjectType, Field, ID } from "type-graphql";
import { BaseType } from "../base.types";

@ObjectType("GraphQLService")
export class Service extends BaseType {
  @Field()
  name!: string;

  @Field(() => ID)
  poleId!: number;

  @Field(() => ID, { nullable: true })
  adminId?: number;
}
