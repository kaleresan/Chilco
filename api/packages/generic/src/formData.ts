import FormData from 'form-data';

export interface MulterFileType {
    buffer: Buffer;
    mimetype: string;
    originalname: string;
}
export function appendFileToFormData(
    field: string,
    formData: FormData,
    { buffer, mimetype, originalname }: MulterFileType,
) {
    formData.append(field, buffer, {
        contentType: mimetype,
        filename: originalname,
    });
}
