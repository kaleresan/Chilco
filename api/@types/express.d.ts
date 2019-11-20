declare namespace Express {
    interface Request {
        accountId?: string;
        companyId?: string;
        salesforce?: any;
        salesforceConnectionInfo?: any;
        outlook?: any;
        outlookConnectionInfo?: any;
        hubspot?: any;
        websocket?: any;
        hubspotConnectionInfo?: any;
    }
}
