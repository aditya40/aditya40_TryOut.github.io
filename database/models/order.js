'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.ENUM('accepted', 'sending', 'done', 'failure'),
  }, {});
  Order.associate = function(models) {
		Order.hasMany(models.OrderItem, {
			foreignKey: 'order_id',
			onDelete: 'CASCADE'
		});
    Order.belongsTo(models.Customer, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
		Order.belongsTo(models.Driver, {
			foreignKey: 'driver_id',
			onDelete: 'CASCADE'
		});
  };
  return Order;
};