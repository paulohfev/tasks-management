import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator((_data, context: ExecutionContext): User => {
  // get request body whenever the request is made
  const request = context.switchToHttp().getRequest();
  return request.user;
});
