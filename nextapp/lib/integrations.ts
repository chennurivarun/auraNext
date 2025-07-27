export const Core = {
  async InvokeLLM(_prompt: string): Promise<any> {
    console.warn('InvokeLLM not implemented');
    return null;
  },
  async SendEmail(_payload: Record<string, any>): Promise<any> {
    console.warn('SendEmail not implemented');
    return null;
  },
  async UploadFile(_file: File): Promise<any> {
    console.warn('UploadFile not implemented');
    return null;
  },
  async GenerateImage(_params: Record<string, any>): Promise<any> {
    console.warn('GenerateImage not implemented');
    return null;
  },
  async ExtractDataFromUploadedFile(_file: File): Promise<any> {
    console.warn('ExtractDataFromUploadedFile not implemented');
    return null;
  },
};
