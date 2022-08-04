import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepositories.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "category already exists" });
  }

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepositories.list();

  return response.json({ all });
});

export { categoriesRoutes };
