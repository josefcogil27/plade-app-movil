const express = require('express');
const app = express();
const knex = require('../knex');


// Consultar ultimos 20 productos vendidos
app.get('/ultimos/:empresa', (req, res) => {
    let empresa = req.params.empresa

    knex('detalle_factura')
        .distinct('nom_pro', 'des_inv', 'pre_ven_inv', 'id_categoria', 'img_inv', 'id_empresa', 'dolar', 'cod_inv')
        .where('empresa', '=', empresa)
        .innerJoin('inventario', 'inventario.id', '=', 'detalle_factura.id_inventario')
        .innerJoin('empresas', 'empresas.id', '=', 'inventario.id_empresa')
        .orderBy('detalle_factura.id', 'DESC')
        .limit(20)
        .then((data) => {
            let productos = []
            data.forEach((data) => {
                productos.push(data);
            });

            res.json({
                productos
            })
        })
        .catch((err) => {
            res.json({
                err
            })
        });
});


// Consultar categorias
app.get('/categorias', (req, res) => {

    knex('categorias')
        .select('*')
        .then((data) => {
            let categorias = []
            data.forEach((data) => {
                categorias.push(data);
            });

            res.json({
                categorias
            })
        })
        .catch((err) => {
            res.json({
                err
            })
        });
});


// Consultar por categoria
app.get('/productos/categorias/:categoria', (req, res) => {
    let categoria = req.params.categoria

    knex('inventario')
        .select('*')
        .where('id_categoria', '=', categoria)
        .innerJoin('empresas', 'empresas.id', '=', 'inventario.id_empresa')
        .then((data) => {
            let productos = []
            data.forEach((data) => {
                productos.push(data);
            });

            res.json({
                productos
            })
        })
        .catch((err) => {
            res.json({
                err
            })
        });
});


app.get('/productos/busqueda/:termino', (req, res) => {
    let termino = req.params.termino

    knex('inventario')
        .select('*')
        .where('des_inv', 'LIKE', `%${termino}%`)
        .innerJoin('empresas', 'empresas.id', '=', 'inventario.id_empresa')
        .then((data) => {
            let productos = []
            data.forEach((data) => {
                productos.push(data);
            });

            res.json({
                productos
            })
        })
        .catch((err) => {
            res.json({
                err
            })
        });
});


module.exports = app;