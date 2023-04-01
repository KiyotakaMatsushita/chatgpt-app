import { ChatOpenAI } from 'langchain/chat_models';

export function NewChatOpenAIClient(apiKey: string, organizationId?: string) {
  return new ChatOpenAI({
    temperature: 0,
    openAIApiKey: apiKey,
    // organization: organizationId,
  });
}
