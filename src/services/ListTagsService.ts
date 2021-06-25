import { getCustomRepository } from "typeorm";
import { TagRepositores } from "../repositories/TagRepositories";
import {classToPlain} from "class-transformer"

export class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagRepositores);

    let tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}
