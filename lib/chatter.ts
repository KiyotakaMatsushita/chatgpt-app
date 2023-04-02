import { OpenAIModel } from '@/types/openai';
import { ChatOpenAI } from 'langchain/chat_models';

export function NewChatOpenAIClient(
  apiKey: string,
  model: OpenAIModel,
  organizationId?: string,
) {
  return new ChatOpenAI({
    temperature: 0,
    openAIApiKey: apiKey,
    modelName: model.id as unknown as string,
    // organization: organizationId,
  });
}
