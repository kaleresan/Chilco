import mongoose from 'mongoose';
import { ServiceConfigType } from './createService';

mongoose.Promise = Promise;

mongoose.connection.on('connected', () =>
    console.log('Connected to Database successfully'),
);

export async function createMongoDBConnection({
    mongodbURI,
    ...config
}: ServiceConfigType): Promise<void> {
    try {
        await mongoose.connect(mongodbURI, {
            autoReconnect: true,
            useNewUrlParser: true,
            reconnectTries: 1000000,
            reconnectInterval: 3000,
        });
    } catch (err) {
        await new Promise(resolve => {
            setTimeout(async () => {
                console.log('Error by connection to the Database');
                await createMongoDBConnection({ mongodbURI, ...config });
                resolve();
            }, 20000);
        });
    }
}
