import { OpenAIModel } from '@/types/openai';
import { ChatOpenAI } from 'langchain/chat_models';
import { CallbackManager } from 'langchain/callbacks';

interface NewChatOpenAIClientOptions {
  apiKey: string;
  model: OpenAIModel;
  temperature?: number;
  callbackManager?: CallbackManager;
}

export function NewChatOpenAIClient(options: NewChatOpenAIClientOptions) {
  const { apiKey, model, temperature = 0, callbackManager } = options;

  return new ChatOpenAI({
    temperature: temperature,
    openAIApiKey: apiKey,
    modelName: model.id as unknown as string,
    streaming: true,
    callbackManager,
  });
}
