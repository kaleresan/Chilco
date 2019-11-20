import Sequelize, { Model } from 'sequelize';

export class Process extends Model {}
export const PROCESSES_TABLE: 'T_Processes' = 'T_Processes';

export function getProcessModel({ sequelize }): any {
  Process.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    name: {
      primaryKey: true,
      type: Sequelize.STRING,
    },
  }, {
    sequelize,
    modelName: PROCESSES_TABLE,
  });

  return Process;
}
