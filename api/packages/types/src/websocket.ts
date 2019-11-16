type eventHandler = (data: any) => any;

export interface WebsocketType {
    join: (id: string) => void;
    leave: (id: string) => void;
    emit: (type: string, data: any) => void;
    on: (type: string, ev: eventHandler) => void;
}
