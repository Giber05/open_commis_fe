export class UserEntity {
  id: number;
  name: string;
  username: string;
  profilePicture: string;

  constructor(params: { id: number; name: string; username: string; profilePicture: string }) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.profilePicture = params.profilePicture;
  }
}