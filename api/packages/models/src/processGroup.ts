import Sequelize, { Model } from 'sequelize';

export class ProcessGroup extends Model {}
export const PROCESS_GROUPS_TABLE: 'T_Process_Groups' = 'T_Process_Groups';

export function getProcessGroupModel({ sequelize }): any {
  ProcessGroup.init({
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
    modelName: PROCESS_GROUPS_TABLE,
  });

  return ProcessGroup;
}
