import express, { Request, Response } from "express";
import { cars } from "./data/cars";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  const { q } = req.query;

  // 1. implement search on make and model e.g. /cars?q=toyota
  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(q?.toString().toLowerCase() ?? "") ||
      car.model.toLowerCase().includes(q?.toString().toLowerCase() ?? "")
  );

  // 2. implement sort e.g. /cars?sort=price&order=desc

  // 3. implement filtering e.g. /cars?color=red&year=2022

  return res.json({
    data: filteredCars,
    metadata: { total: filteredCars.length },
    errors: [],
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
