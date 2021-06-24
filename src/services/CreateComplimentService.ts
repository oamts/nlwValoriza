import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositores } from "../repositories/UserRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentRepositores = getCustomRepository(ComplimentRepositories);
    const userRepositores = getCustomRepository(UserRepositores);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver");
    }

    const userReceiverExists = await userRepositores.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver does not exist");
    }

    const compliment = complimentRepositores.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentRepositores.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
