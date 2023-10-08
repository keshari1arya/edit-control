import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class VideoService {
    private apiUrl = "http://localhost:3010/api/";

    constructor(private http: HttpClient) { }

    public async upload(taskId: number, files: File[]) {
        const response = await this.getPresignedUploadUrl();
        const presignedUrl = response?.presignedUrl!;

        try {
            const url = await this.uploadToS3(presignedUrl, files);
            await this.attachVideoUrlToTask(taskId, url);

            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    private attachVideoUrlToTask(taskId: number, url: string) {
        return this.http.put(`${this.apiUrl}tasks/${taskId}/attachVideo`, { url }).toPromise();
    }

    private getPresignedUploadUrl(): Promise<{ presignedUrl: string } | undefined> {
        return this.http.get<{ presignedUrl: string }>(this.apiUrl + 'video/presigned-upload-url').toPromise();
    }

    private async uploadToS3(url: string, files: File[]): Promise<string> {
        try {
            const formData = new FormData();

            files.forEach((file, index) => {
                formData.append(`file${index}`, file);
            });

            const response = await fetch(url, {
                method: 'PUT',
                body: formData,
                headers: {
                    //    / 'Content-Type': file.type,
                },
            });

            if (response.ok) {
                // File uploaded successfully
                console.log(response);

                return response.url;
            } else {
                // Handle the error here
                throw new Error('Failed to upload file to S3');
            }
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw error;
        }
    }
}