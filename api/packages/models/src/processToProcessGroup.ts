import Sequelize, { Model } from 'sequelize';

export class ProcessToProcessGroup extends Model {}
export const PROCESS_TO_PROCESS_GROUP_TABLE: 'T_Processes_To_Process_Group' = 'T_Processes_To_Process_Group';

export function getProcessToProgressGroupModel({ sequelize }): any {
  ProcessToProcessGroup.init({
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
    modelName: PROCESS_TO_PROCESS_GROUP_TABLE,
  });

  return ProcessToProcessGroup;
}
