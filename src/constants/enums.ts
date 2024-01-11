export enum DeckTypes {
  SERIAL = 'SERIAL',
  EVEN = 'EVEN',
  ODD = 'ODD',
  FIBONACCI = 'FIBONACCI',
}

export enum EmailSubject {
  ADDED_TO_GROUP = 'Added to new group',
  REGISTRATION_SUCESS = 'Registered successfully!!',
  VERIFICATION_SUCCESS = 'Account verified successfully!!',
  EMAIL_VERIFICATION = 'Email verification',
}

export enum InviteStatus {
  ACCEPTED = 'ACCEPTED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

export enum PokerBoardStatus {
  CREATED = 'CREATED',
  STARTED = 'GAME_STARTED',
  ENDED = 'GAME_ENDED',
}

export enum Routes {
  USER = '/user',
  USERS = '/users',
  POKER_BOARD = '/pokerboard',
}

export enum TicketTypes {
  BUG = 'Bug',
  STORY = 'Story',
  TASK = 'Task',
}

export enum UserRoles {
  MANAGER = 'MANAGER',
  PLAYER = 'PLAYER',
  SPECTATOR = 'SPECTATOR',
}
