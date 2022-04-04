class UserModel {
  id: string;

  name: string;

  cookie?: string | null;

  constructor(params: { id: string; name: string; cookie?: string }) {
    this.id = params.id;
    this.name = params.name;
    this.cookie = params.cookie;
  }
  public static fromJson(json: string): UserModel {
    const object = JSON.parse(json);
    return new UserModel({
      id: object.id,
      name: object.name,
      cookie: object.cookie,
    });
  }

  public toJson(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      cookie: this.cookie,
    });
  }

  public toMap(): { id: string; name: string; cookie: string } {
    return {
      id: this.id,
      name: this.name,
      cookie: this.cookie ?? "",
    };
  }
}

export default UserModel;
