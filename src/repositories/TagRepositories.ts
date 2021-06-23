import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagRepositores extends Repository<Tag> {}

export { TagRepositores };
