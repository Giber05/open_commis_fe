export class UserEntity {
  id: number;
  name: string;
  username: string;
  profilePicture?: string | null;

  constructor(params: { id: number; name: string; username: string; profilePicture?: string | null }) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.profilePicture = params.profilePicture;
  }
}