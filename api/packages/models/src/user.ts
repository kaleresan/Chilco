import Sequelize, { Model } from 'sequelize';

import { Setting } from './setting';

export class User extends Model {}
export const USERS_TABLE: 'T_Settings' = 'T_Settings';

export function getUsersModel({ sequelize }): any {
  User.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }, {
    sequelize,
    modelName: USERS_TABLE,
  });

  // @ts-ignore
  User.associate = models => {
    User.belongsTo(Setting, { foreignKey: 'settingsId' });
  };

  return User;
}
