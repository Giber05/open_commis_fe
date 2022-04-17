export class PortofolioEntity {
  bio: string;
  instagramAcc: string;
  twitterAcc: null;
  facebookAcc: string;

  constructor(params:{
    bio: string, 
    instagramAcc: string, 
    twitterAcc: null, 
    facebookAcc: string}
) {
    this.bio = params.bio
    this.instagramAcc = params.instagramAcc
    this.twitterAcc = params.twitterAcc
    this.facebookAcc = params.facebookAcc
  }

}

