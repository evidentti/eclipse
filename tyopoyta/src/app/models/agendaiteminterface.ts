export interface AgendaItemInterface {
  attachments: Array<any>;
  classification_code: string;
  classification_description: string;
  content: Array<any>;
  from_minutes: boolean;
  id: number;
  index: number;
  introducer: string;
  issue: object;
  last_modified_time: string;
  meeting: object;
  origin_last_modified_time: string;
  permalink: string;
  preparer: string;
  resolution: string;
  resource_uri: string;
  subject: string;
}
