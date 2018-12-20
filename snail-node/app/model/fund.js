'use strict';
// 基金表
module.exports = app => {
  const { STRING, CHAR, INTEGER, TINYINT, FLOAT, TEXT } = app.Sequelize;
  const Fund = app.model.define('fund', {
    id: {
      type: INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: STRING,
      allowNull: false,
      field: 'name',
      comment: '基金名称',
    },
    code: {
      type: CHAR(6),
      allowNull: false,
      unique: true,
      field: 'name',
      comment: '基金代码',
    },
    underestimate: {
      type: FLOAT,
      allowNull: true,
      field: 'underestimate',
      comment: '低估值阀值',
    },
    normal: {
      type: FLOAT,
      allowNull: true,
      field: 'underestimate',
      comment: '正常估值阀值',
    },
    overestimate: {
      type: FLOAT,
      allowNull: true,
      field: 'underestimate',
      comment: '高估值阀值',
    },
    valuationType: {
      type: TINYINT,
      allowNull: true,
      field: 'valuation-type',
      comment: '估值类型，1：净值',
    },
    strategy: {
      type: TEXT,
      allowNull: true,
      field: 'strategy',
      comment: '操作策略',
    },
  });

  return Fund;
};
