export class CommissionPostEntity {
  id: number;
  title: string;
  durationTime: number;
  price: number;
  description?: string;
  status: string;
  image_1: string;
  image_2?: string | null;
  image_3?: string | null;
  image_4?: string | null;
  createdAt: Date;
  updatedAt?: Date;

  constructor(params: { id: number; title: string; durationTime: number; price: number; description?: string; status: string; image_1: string; image_2?: string; image_3?: string; image_4?: string; createdAt: Date; updatedAt?: Date }) {
    this.id = params.id;
    this.title = params.title;
    this.durationTime = params.durationTime;
    this.price = params.price;
    this.description = params.description;
    this.status = params.status;
    this.image_1 = params.image_1;
    this.image_2 = params.image_2;
    this.image_3 = params.image_3;
    this.image_4 = params.image_4;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
// export class Illustrator {
//   id: number;
//   name: string;
//   username: string;
//   profilePicture: string;

//   constructor(params: { id: number; name: string; username: string; profilePicture: string }) {
//     this.id = params.id;
//     this.name = params.name;
//     this.username = params.username;
//     this.profilePicture = params.profilePicture;
//   }
//   public static fromJson(json: any): Illustrator {
//     return new Illustrator({
//       id: json.id,
//       name: json.name,
//       username: json.username,
//       profilePicture: json.profilePicture,
//     });
//   }
// }
