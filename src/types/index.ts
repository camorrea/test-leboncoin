export enum DataStatus {
  notAsked = 'NotAsked',
  loading = 'Loading',
  failure = 'Error',
  success = 'Success'
}

export enum Confidentiality {
  public = 'Public',
  private = 'Private'
}

export enum User {
  me = 'Me',
  anonymous = 'Anonymous'
}

export type MessageType = {
  id: string
  text: string
  confidentiality: Confidentiality
  user: User
}
