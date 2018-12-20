'use strict';
// 基金交易表
module.exports = app => {
  const { INTEGER, CHAR, TINYINT, DECIMAL, DATE } = app.Sequelize;
  const FundTransaction = app.model.define('fund_transaction', {
    id: {
      type: INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    fundCode: {
      type: CHAR(6),
      allowNull: false,
      field: 'fund_code',
      comment: '基金代码',
    },
    type: {
      type: TINYINT,
      allowNull: false,
      field: 'type',
      comment: '交易类型,1:买，0：卖',
    },
    amount: {
      type: DECIMAL(10, 2),
      allowNull: false,
      field: 'amount',
      comment: '交易金额',
    },
    transactionDate: {
      type: DATE,
      allowNull: true,
      field: 'transaction_date',
      comment: '交易日期',
    },
    price: {
      type: DECIMAL(10, 2),
      allowNull: false,
      field: 'price',
      comment: '成交价格',
    },
    share: {
      type: DECIMAL(10, 2),
      allowNull: false,
      field: 'share',
      comment: '成交份额',
    },
    ep: {
      type: DECIMAL(5, 2),
      allowNull: false,
      field: 'ep',
      comment: '盈利收益率',
    },
    pe: {
      type: DECIMAL(5, 2),
      allowNull: false,
      field: 'pe',
      comment: '市盈率',
    },
    pb: {
      type: DECIMAL(5, 2),
      allowNull: false,
      field: 'pb',
      comment: '市静率',
    },
    dp: {
      type: DECIMAL(5, 2),
      allowNull: false,
      field: 'dp',
      comment: '股息率',
    },
    roe: {
      type: DECIMAL(5, 2),
      allowNull: false,
      field: 'roe',
      comment: '静资产收益率',
    },
  });

  return FundTransaction;
};
