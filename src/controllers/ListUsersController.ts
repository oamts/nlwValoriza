import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUserService";

export class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUsersService();

    const users = await listUserService.execute();

    return response.json(users);
  }
}
