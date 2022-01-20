const chai = require("chai");
const { expect } = chai;
const session = require("supertest-session");
const app = require("../../src/App.js");

let agent = null;

//chai.use(require("chai-uuid"));

describe("Recipe routes", () => {
  beforeEach(() => {
    agent = session(app);
  });

  describe("/recipes/:idReceta", () => {
    it("deberia devolver un 200 y id, titulo y descripcion en la respuesta", async () => {
      await agent
        .get("/recipes/12")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.property("idApi");
            expect(res.body).to.have.property("name");
            expect(res.body).to.have.property("summary");
        });
    });
  });
  describe("/recipe", () => {
    it("deberia devolver la receta creada con un id en formato UUID", async () => {
      const response = await agent
        .post("/recipe")
        .send({ name: "tortilla de acelga", summary: "comida no muy rica", diets: "vegetarian" });
      expect(response.status).to.eql(200);
      
    });
  });
});