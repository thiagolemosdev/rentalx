import { ICategoriesRepository } from "../repositories/ICategoriesRepotory";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [] - Definir o tipo de retorno
 * [X] - Alterar o retorno do erro
 * [] - acessar o repositorio
 * [] - Retornar algo
 */

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
      // return response.status(400).json({ error: "category already exists" });
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
