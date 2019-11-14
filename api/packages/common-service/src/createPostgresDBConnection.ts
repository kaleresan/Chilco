import Sequelize from 'sequelize';
import { ServiceConfigType } from './createService';

export var postgress = null;
export async function createPostgresDBConnection({
    postgresdbURI,
    models,
    ...config
}: ServiceConfigType): Promise<void> {
    try {
        // @ts-ignore
        const sequelize = new Sequelize(postgresdbURI);
        const serviceModels = {};
        for (const model of models) {
            const serviceModel = model({ sequelize });
            serviceModels[serviceModel.name] = serviceModel;
        }

        for (const serviceModel of Object.values(serviceModels)) {
            // @ts-ignore
            if (serviceModel.associate) {
                // @ts-ignore
                serviceModel.associate(serviceModels);
            }
        }

        await sequelize.sync();
        console.log('Connect to Database');
        postgress = sequelize;
    } catch (err) {
        console.log(err);
        await new Promise(resolve => {
            setTimeout(async () => {
                console.log('Error by connection to the Database');
                await createPostgresDBConnection({ postgresdbURI, models, ...config });
                resolve();
            }, 20000);
        });
    }
}
