export enum Confidentiality {
  public = 'Public',
  private = 'Private'
}

export type MessageType = {
  id: string,
  text: string,
  confidentiality: Confidentiality
}