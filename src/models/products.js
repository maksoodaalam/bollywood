'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        productname: {
            type: Sequelize.STRING
        },
        productslug: {
            type: Sequelize.STRING
        },
        gstslap: {
            type: Sequelize.DECIMAL
        },
        discounttype: {
            type: Sequelize.STRING
        },
        discount: {
            type: Sequelize.DECIMAL
        },
        productstatus: {
            type: Sequelize.INTEGER
        },
        productfor: {
            type: Sequelize.STRING
        },
        attributename: {
            type: Sequelize.JSON
        },
        producttype: {
            type: Sequelize.STRING
        },
        featuredimg: {
            type: Sequelize.STRING
        },
        gallary: {
            type: Sequelize.STRING
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        createdby: {
            type: Sequelize.INTEGER
        },
        modifiedby: {
            type: Sequelize.INTEGER
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        tableName: 'products',
        timestamps: true
    });

    products.associate = function (models) {
        products.belongsTo(models.product_category, { foreignKey: 'id' });
    }

    // products.sync({ force: true });

    return products;
}