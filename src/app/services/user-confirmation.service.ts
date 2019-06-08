export class UserConfirmationService {
  getConfimation(){
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
      }, 1000);
    });
    return result;
  }
}
