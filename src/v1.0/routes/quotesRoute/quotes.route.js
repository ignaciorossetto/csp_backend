const sequelize = require("../../database/db");
const Category = require("../../database/models/Category");
const Quote = require("../../database/models/Quote");
const Supplier = require("../../database/models/Supplier");
const Supply = require("../../database/models/Supply");

const router = require("express").Router();

// All quotes
router.get("/", (req, res, next) => {});

//get one quote
router.get("/find/:id", async (req, res, next) => {
  try {
    const response = await Quote.findAll({
      where: {
        id_supply: req.params.id,
      },
      attributes: ["id_quote", "price", "dolar_rate", "supply_dolar_price", "date"],
      include: [
        {
          model: Supply,
          include: Category,
          attributes: ["name"],
        },
        {
          model: Supplier,
          attributes: ["name"],
        },
      ],
      order: [["date", "DESC"]]
    });

    const stats = await Quote.findAll({
      where: {
        id_supply: req.params.id,
      },
      attributes: [
        "id_supply",
        [sequelize.fn("MIN", sequelize.col("supply_dolar_price")), "min_price"],
        [
          sequelize.literal(
            `(SELECT MIN(q1.date) FROM Quotes AS q1 WHERE q1.id_supply = Quote.id_supply AND q1.supply_dolar_price = (SELECT MIN(q2.supply_dolar_price) FROM Quotes AS q2 WHERE q2.id_supply = Quote.id_supply))`
          ),
          "date_of_min_price",
        ],
        [sequelize.fn("AVG", sequelize.col("supply_dolar_price")), "avg_price"],
        [sequelize.fn("MAX", sequelize.col("supply_dolar_price")), "max_price"],
        [
          sequelize.literal(
            `(SELECT MAX(q3.date) FROM Quotes AS q3 WHERE q3.id_supply = Quote.id_supply AND q3.supply_dolar_price = (SELECT MAX(q4.supply_dolar_price) FROM Quotes AS q4 WHERE q4
                
                .id_supply = Quote.id_supply))`
          ),
          "date_of_max_price",
        ],
        [
          sequelize.literal(
            "(SELECT q5.supply_dolar_price FROM Quotes AS q5 WHERE q5.id_supply = Quote.id_supply ORDER BY q5.date DESC LIMIT 1)"
          ),
          "most_recent_dolar_price",
        ],
      ],
      group: ["id_supply"]
    });

    res.json({
      status: "OK",
      payload: response,
      stats: stats
    });
  } catch (error) {
    next(error);
  }
});

//get stats(min,max,avg,latest and dates) froma all quotes
router.get("/stats", async (req, res, next) => {
  console.log('hitted')
  try {
    const response = await await Quote.findAll({
      attributes: [
        "id_supply",
        [sequelize.fn("MIN", sequelize.col("supply_dolar_price")), "min_price"],
        [
          sequelize.literal(
            `(SELECT MIN(q1.date) FROM Quotes AS q1 WHERE q1.id_supply = Quote.id_supply AND q1.supply_dolar_price = (SELECT MIN(q2.supply_dolar_price) FROM Quotes AS q2 WHERE q2.id_supply = Quote.id_supply))`
          ),
          "date_of_min_price",
        ],
        [sequelize.fn("AVG", sequelize.col("supply_dolar_price")), "avg_price"],
        [sequelize.fn("MAX", sequelize.col("supply_dolar_price")), "max_price"],
        [
          sequelize.literal(
            `(SELECT MAX(q3.date) FROM Quotes AS q3 WHERE q3.id_supply = Quote.id_supply AND q3.supply_dolar_price = (SELECT MAX(q4.supply_dolar_price) FROM Quotes AS q4 WHERE q4.id_supply = Quote.id_supply))`
          ),
          "date_of_max_price",
        ],
        [
          sequelize.literal(
            "(SELECT q5.supply_dolar_price FROM Quotes AS q5 WHERE q5.id_supply = Quote.id_supply ORDER BY q5.date DESC LIMIT 1)"
          ),
          "most_recent_dolar_price",
        ],
      ],
      group: ["id_supply"],
      include: [
        {
          model: Supply,
          attributes: ["name"],
          include: Category,
        },
      ],
    });
    res.json({
      message: response,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
});

// Add new quote
router.post("/", async(req, res, next) => {
  try {
    const response = await Quote.bulkCreate(req.body)
    res.json({
      status: 'Records added successfully',
    })
  } catch (error) {
    next(error)
  }
});

// update one quote
router.put("/:id", (req, res, next) => {});

// Delete one quote
router.delete("/:id", async(req, res, next) => {
  const id = req.params.id
  try {
    await Quote.destroy({
      where: {
        id_quote: id
      }
    })
    res.json({
      status: 'Record deleted successfully',
    })
  } catch (error) {
    next(error)
  }
});

module.exports = router;
