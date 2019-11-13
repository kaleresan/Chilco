import { flat } from './object';

export function createMessages(messages: { [key: string]: any }) {
  for (const local of Object.keys(messages))
    messages[local] = flat(messages[local]);

  return messages;
}
