import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

export class ListTagsController {
  async handle(resquest: Request, response: Response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}
