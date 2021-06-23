import { getCustomRepository } from "typeorm";
import { TagRepositores } from "../repositories/TagRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagRepositores = getCustomRepository(TagRepositores);

    if (!name) {
      throw new Error("Name incorrect");
    }

    const tagAlreadyExists = await tagRepositores.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagRepositores.create({ name });

    await tagRepositores.save(tag);

    return tag;
  }
}

export { CreateTagService };
