import Sequelize, { Model } from 'sequelize';

export class Setting extends Model {}
export const SETTINGS_TABLE: 'T_Settings' = 'T_Settings';

export function getSettingsModel({ sequelize }): any {
  Setting.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    pcTime: {
      type: Sequelize.INTEGER,
    },
  }, {
    sequelize,
    modelName: SETTINGS_TABLE,
  });

  return Setting;
}
