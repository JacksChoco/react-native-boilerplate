export const SET_USER = 'SET_USER';

export function setUser(user:string){
  return {
    type: SET_USER,
    payload: user,
  };
}
