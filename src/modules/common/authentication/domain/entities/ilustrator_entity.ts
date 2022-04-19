class IlustratorEntity {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  balance: number;
  profilePicture?: string | null;
  available: boolean;
  emailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: { id: number; name: string; email: string; username: string; phone: string; balance: number; profilePicture: string | null; available: boolean; emailVerified: boolean; createdAt: Date; updatedAt: Date }) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.email = params.email;
    this.phone = params.phone;
    this.balance = params.balance;
    this.profilePicture = params.profilePicture;
    this.available = params.available;
    this.emailVerified = params.emailVerified;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
export default IlustratorEntity;
