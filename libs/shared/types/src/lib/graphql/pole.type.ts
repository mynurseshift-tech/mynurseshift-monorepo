import { ObjectType, Field } from "type-graphql";
import { BaseType } from "../base.types";

@ObjectType("GraphQLPole")
export class Pole extends BaseType {
  @Field()
  name!: string;
}
