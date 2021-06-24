import { UserRepositores } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositores = getCustomRepository(UserRepositores);

    //verify existence of user
    const user = await userRepositores.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    //verify correctness of the password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    //token generation
    const token = sign(
      {
        email: user.email,
      },
      "e42b6a82864b7060c447ecebd62518a3",
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}

export { AuthenticateUserService };
