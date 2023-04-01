import { Configuration, OpenAIApi } from 'openai';

export function NewOpenAIClient(apiKey: string, organizationId?: string) {
  const configuration = new Configuration({
    organization: organizationId,
    apiKey,
  });
  return new OpenAIApi(configuration);
}
