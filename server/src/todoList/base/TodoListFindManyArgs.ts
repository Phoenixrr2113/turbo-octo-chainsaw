/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TodoListWhereInput } from "./TodoListWhereInput";
import { Type } from "class-transformer";
import { TodoListOrderByInput } from "./TodoListOrderByInput";

@ArgsType()
class TodoListFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TodoListWhereInput,
  })
  @Field(() => TodoListWhereInput, { nullable: true })
  @Type(() => TodoListWhereInput)
  where?: TodoListWhereInput;

  @ApiProperty({
    required: false,
    type: [TodoListOrderByInput],
  })
  @Field(() => [TodoListOrderByInput], { nullable: true })
  @Type(() => TodoListOrderByInput)
  orderBy?: Array<TodoListOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TodoListFindManyArgs };
