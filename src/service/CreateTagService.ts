import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagsRepository"


class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagRepository);

        if(!name) {
            throw new Error("Incorrect name!");
        }

        const tagAlereadyExist = await tagsRepositories.findOne({
            name
        })

        if(tagAlereadyExist){
            throw new Error("Tag already exists!")
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);
        
        return tag;

    }

}

export { CreateTagService }