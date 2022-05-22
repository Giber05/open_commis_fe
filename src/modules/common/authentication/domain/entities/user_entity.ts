export class UserEntity {
  id: number;
  name: string;
  username: string;
  profilePicture?: string | null;
  available?: boolean | null;

  constructor(params: { id: number; name: string; username: string; profilePicture?: string | null; available?: boolean | null }) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.profilePicture = params.profilePicture;
    this.available = params.available;
  }
}
