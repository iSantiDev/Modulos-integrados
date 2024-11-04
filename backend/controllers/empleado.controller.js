const Empleado = require("../models/empleado");
const empleadoControl = {};

empleadoControl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoControl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        status: "Empleado guardado",
    });
};

empleadoControl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
};

empleadoControl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    await Empleados.findByIdAndUpdate(
        id,
        { $set: empleadoEdit },
        { new: true }
    );
    res.jason({ status: "Empleado actualizado" });
};

empleadoControl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: "Empleado Eliminado" });
};

module.exports = empleadoControl;
