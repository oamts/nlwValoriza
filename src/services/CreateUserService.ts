import { getCustomRepository } from "typeorm";
import { UserRepositores } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepositores = getCustomRepository(UserRepositores);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepositores.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepositores.create({ name, email, admin });

    await userRepositores.save(user);

    return user;
  }
}

export { CreateUserService };