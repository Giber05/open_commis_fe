class ConsumerEntity {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  profilePicture: null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  
  constructor(params:{
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  profilePicture: null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  }) {
    this.id = params.id
    this.name = params.name
    this.username = params.username
    this.email = params.email
    this.phone = params.phone
    this.profilePicture = params.profilePicture
    this.emailVerified = params.emailVerified
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
export default ConsumerEntity
