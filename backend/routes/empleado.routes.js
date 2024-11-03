const express = require("express");
const router = express.Router();
const empleadoControl = require("../controllers/empleado.controller");

router.get("/", empleadoControl.getEmpleados);
router.post("/", empleadoControl.createEmpleados);
router.get("/:id", empleadoControl.getUnicoEmpleado);
router.put("/:id", empleadoControl.editarEmpleado);
router.delete("/:id", empleadoControl.eliminarEmpleado);

module.exports = router;
