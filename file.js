const projectsArr = [
    {
        name: 'MAN 109-07',
        address: 'Miradores de manantiales etapa 2 mza 109 lote 07'
    },
    {
        name: 'MAN 109-25',
        address: 'Miradores de manantiales etapa 2 mza 109 lote 25'
    },
    {
        name: 'MAN 109-05/06',
        address: 'Miradores de manantiales etapa 2 mza 109 lote 05/06'
    },
    {
        name: 'MAN 114-04/05',
        address: 'Miradores de manantiales etapa 2 mza 114 lote 04/05'
    },
    {
        name: 'MAN 109-28',
        address: 'Miradores de manantiales etapa 2 mza 109 lote 28'
    },
    {
        name: 'MAN 118-15',
        address: 'Miradores de manantiales etapa 2 mza 118 lote 15'
    },
    {
        name: 'OTROS'
    },
]

const categoryArr = [
    {
        name: 'CORRALON'
    },
    {
        name: 'PLOMERIA'
    },
    {
        name: 'ELECTRICIDAD'
    },
    {
        name: 'OTROS'
    },
]

const supplierArr = [
    {
        name: 'GRINGO'
    },
    {
        name: 'FURLANETTO'
    },
    {
        name: 'MERLINO'
    },
    {
        name: 'CORMAC'
    },
    {
        name: 'FERROCONS'
    },
    {
        name: 'CASA MANRIQUE'
    },
    {
        name: 'FERRETERIA CERRO'
    },
    {
        name: 'CONTIGIANI'
    },
    {
        name: 'SANIPLAST'
    },
    {
        name: 'DEPLANO'
    },
    {
        name: 'MAYGA'
    },
    {
        name: 'FREGUGLIA'
    },
    {
        name: 'ARIDOS TOMAS'
    },
    {
        name: 'PRETENSADOS RIVADAVIA'
    },
]

const supplyArr = [
    {
        name: 'Cemento',
        id_category: 1,
    },
    {
        name: 'Hercal',
        id_category: 1,
    },
    {
        name: 'Cal Hidrat. El milagro',
        id_category: 1,
    },
    {
        name: 'Ladrillo portante 12',
        id_category: 1,
    },
    {
        name: 'Ladrillo portante 18',
        id_category: 1,
    },
    {
        name: 'Ladrillo tabique 8',
        id_category: 1,
    },
    {
        name: 'Ladrillo tabique 12',
        id_category: 1,
    },
    {
        name: 'Ladrillo losa 11',
        id_category: 1,
    },
    {
        name: 'Hierro 4.2',
        id_category: 1,
    },
    {
        name: 'Hierro 6',
        id_category: 1,
    },
    {
        name: 'Hierro 8',
        id_category: 1,
    },
    {
        name: 'Hierro 10',
        id_category: 1,
    },
    {
        name: 'Hierro 12',
        id_category: 1,
    },
    {
        name: 'Malla sima 15x25 hierro 4.2 (3x2)',
        id_category: 1,
    },
    {
        name: 'Alambre 17',
        id_category: 1,
    },
    {
        name: 'Alambre 4',
        id_category: 1,
    },
    {
        name: 'Clavos 2 1/2',
        id_category: 1,
    },
    {
        name: 'Viaje arena gruesa',
        id_category: 1,
    },
    {
        name: 'Viaje arena fina',
        id_category: 1,
    },
    {
        name: 'Ladrillo común 15',
        id_category: 1,
    },
    {
        name: 'Ladrillo común 17',
        id_category: 1,
    },
    {
        name: 'Hormigon H17',
        id_category: 1,
    },
    {
        name: 'Hormigon H21',
        id_category: 1,
    },
    {
        name: 'Pintura asfaltica x20lts',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 2.00',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 3.80',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 4.00',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 4.20',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 5.00',
        id_category: 1,
    },
    {
        name: 'Vigueta Pretensada 6.00',
        id_category: 1,
    },
    {
        name: 'Caldera dual Peisa DIVA',
        id_category: 1,
    },
]

// await Category.bulkCreate(categoryArr)
    // await Supplier.bulkCreate(supplierArr)
    // await Supply.bulkCreate(supplyArr)
    // await Project.bulkCreate(projectsArr)
    // await Quote.create({
    //     price: 95000,
    //     dolar_rate: 750,
    //     supply_dolar_price: 9500/750,
    //     date: new Date(),
    //     id_supply: 5,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 7500,
    //     dolar_rate: 700,
    //     supply_dolar_price: 7500/700,
    //     date: new Date('2023-05-05'),
    //     id_supply: 5,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 3800,
    //     dolar_rate: 650,
    //     supply_dolar_price: 3800/650,
    //     date: new Date('2023-05-03'),
    //     id_supply: 5,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 1800,
    //     dolar_rate: 750,
    //     supply_dolar_price: 1800/750,
    //     date: new Date('2023-05-08'),
    //     id_supply: 1,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 1200,
    //     dolar_rate: 700,
    //     supply_dolar_price: 1200/700,
    //     date: new Date('2023-05-07'),
    //     id_supply: 1,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 1105,
    //     dolar_rate: 680,
    //     supply_dolar_price: 1105/680,
    //     date: new Date('2023-05-06'),
    //     id_supply: 1,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // await Quote.create({
    //     price: 950,
    //     dolar_rate: 600,
    //     supply_dolar_price: 950/600,
    //     date: new Date('2023-05-05'),
    //     id_supply: 1,
    //     id_supplier: 2,
    //     id_project: 7
    // })
    // res.json({
    //     message: 'OK'
    // })




module.exports = {
    projectsArr,
    categoryArr,
    supplierArr,
    supplyArr
}
