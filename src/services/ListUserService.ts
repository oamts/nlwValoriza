import { getCustomRepository } from "typeorm";
import { UserRepositores } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer";

export class ListUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UserRepositores);

    const users = await usersRepository.find();

    return classToPlain(users);
  }
}
